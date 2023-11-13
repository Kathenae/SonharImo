<?php

namespace App\Http\Controllers;

use App\Http\Requests\ListingCreateRequest;
use App\Http\Requests\ListingUpdateRequest;
use App\Models\HouseImage;
use App\Models\HouseListing;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class AdminListingController extends Controller
{
    /**
     * Display a listing of the house listings for the current user.
     */
    public function index(Request $request)
    {
        $query = HouseListing::query();

        // filter by approved state
        if ($request->has('approved')) {
            $approved = $request->input('approved');

            if (isset($approved)) {
                $query->where('is_approved', $approved);
            }
        }

        // filter by published state
        if ($request->has('published')) {
            $published = $request->input('published');

            if (isset($published)) {
                $query->where('is_published', $published);
            }
        }

        // filter by featured state
        if ($request->has('featured')) {
            $featured = $request->input('featured');

            if (isset($featured)) {
                $query->where('is_featured', $featured);
            }
        }

        // filter by province
        if ($request->has('province')) {
            $province = $request->input('province');

            if (isset($province)) {
                $query->where('province', $province);
            }
        }

        // filter by address
        if ($request->has('address')) {
            $address = $request->input('address');

            if (isset($address)) {
                $query->where('address', 'like', "%$address%");
            }
        }

        // Filter by price range
        if ($request->has('price')) {
            $price = explode(",", $request->input('price'));

            if (isset($price[0]) && is_numeric($price[0]) && isset($price[1]) && is_numeric($price[1])) {
                $query->whereBetween('price', [$price[0], $price[1]]);

            } else if (isset($price[0]) && is_numeric($price[0])) {
                $query->where('price', '<=', $price[0]);
            }
        }

        // Filter by deal_type
        if ($request->has('deal_type')) {
            $dealType = $request->input('deal_type');
            if (isset($dealType)) {
                $query->where('deal_type', $dealType);
            }
        }

        // Filter by total_bedrooms
        if ($request->has('total_bedrooms')) {
            $totalBedrooms = $request->input('total_bedrooms');

            if (isset($totalBedrooms)) {
                $query->where('total_bedrooms', $totalBedrooms);
            }
        }

        $userRole = $request->user()->role;
        if($userRole != User::ADMIN_ROLE && $userRole != User::MODERATOR_ROLE){
            $query->where('user_id', $request->user()->id);
        }

        $listings = $query->with(['images', 'user'])->get();

        return Inertia::render('Admin/listing-index', [
            'listings' => $listings
        ]);
    }

    /**
     * Show the form for creating a new house listing.
     */
    public function create()
    {
        return Inertia::render('Admin/listing-create');
    }

    /**
     * Store a newly created house listing in storage.
     */
    public function store(ListingCreateRequest $request)
    {
        $validatedData = $request->validatedWithQueryData([
            'is_approved' => 'boolean',
            'is_featured' => 'boolean',
        ]);

        $listing = HouseListing::create(array_merge($validatedData, [
            'is_approved' => isset($request->is_approved)? $request->is_approved : false,
            'is_featured' => isset($request->is_featured)? $request->is_featured : false,
        ]));

        $listing->saveImages($request);
        return redirect()->route('admin.listings.index', $listing->id)->with('flash.success', 'Imovel addicionado com successo.');
    }

    /**
     * Show the form for editing the specified house listing.
     */
    public function edit(HouseListing $listing)
    {
        return Inertia::render('Admin/listing-edit', [
            'listing' => $listing->load('images')
        ]);
    }

    /**
     * Update the specified house listing in storage.
     */
    public function update(ListingUpdateRequest $request, HouseListing $listing)
    {
        $validatedData = $request->validatedWithQueryData($listing, [
            'is_approved' => 'boolean',
            'is_featured' => 'boolean',
        ]);

        $listing->update(array_merge($validatedData, [
            'is_approved' => isset($request->is_approved)? $request->is_approved : $listing->is_approved,
            'is_featured' => isset($request->is_featured)? $request->is_featured : $listing->is_featured,
        ]));

        $listing->saveImages($request);

        return redirect()->route('admin.listings.index', $listing->id)->with('flash.success', 'Dados do imóvel atualizados com sucesso');
    }

    /**
     * Remove the specified house listing from storage.
     */
    public function destroy(Request $request)
    {
        $request->validate([
            'listings' => 'required|array',
            'listings.*' => 'numeric',
        ]);

        HouseListing::query()
            ->whereIn('id', $request->listings)
            ->delete();

        return back()->with('flash.success', 'Acção effectuada com sucesso');
    }

    /**
     * Remove the specified house image from storage.
     */
    public function deleteImage(Request $request, HouseImage $image)
    {
        if ($image->house->user_id == $request->user()->id) {
            $filePath = str_replace('/storage/', 'public/', $image->url);
            Storage::delete($filePath);
            $image->delete();
        }

        return back()->with('flash.success', 'Imagem foi apagada');
    }

    /**
     * updated is_featured state of the given listings
     */
    public function feature(Request $request)
    {
        $request->validate([
            'feature' => 'required|boolean',
            'listings' => 'required|array',
            'listings.*' => 'numeric',
        ]);

        HouseListing::query()
            ->whereIn('id', $request->listings)
            ->update(['is_featured' => $request->feature]);

        return back()->with('flash.success', 'Acção effectuada com sucesso');
    }

    /**
     * updated is_approved state of the given listings
     */
    public function approve(Request $request)
    {
        $request->validate([
            'approve' => 'required|boolean',
            'listings' => 'required|array',
            'listings.*' => 'numeric',
        ]);

        HouseListing::query()
            ->whereIn('id', $request->listings)
            ->update(['is_approved' => $request->approve]);

        return back()->with('flash.success', 'Acção effectuado com sucesso');
    }

    /**
     * updated is_published state of the given listings
     */
    public function publish(Request $request, HouseListing $listing)
    {
        $request->validate([
            'publish' => 'required|boolean',
            'listings' => 'required|array',
            'listings.*' => 'numeric',
        ]);

        HouseListing::query()
            ->whereIn('id', $request->listings)
            ->update(['is_published' => $request->publish]);

        return back()->with('flash.success', 'Acção effectuada com sucesso');
    }
}
