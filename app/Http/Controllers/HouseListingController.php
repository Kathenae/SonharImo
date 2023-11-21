<?php

namespace App\Http\Controllers;

use App\Http\Requests\ListingCreateRequest;
use App\Http\Requests\ListingUpdateRequest;
use App\Models\HouseImage;
use Illuminate\Http\Request;
use App\Models\HouseListing;
use Inertia\Inertia;
use Storage;

class HouseListingController extends Controller
{
    /**
     * Display a listing of the house listings.
     */
    public function index(Request $request)
    {
        $query = HouseListing::query();
        // filter for only is_published, is_approved and publish_at is now
        $query
            ->where('is_published', true)
            ->where('is_approved', true);

        // Filter by province
        if ($request->has('province')) {
            $province = $request->input('province');

            if (isset($province)) {
                $query->where('province', $province);
            }
        }

        if ($request->has('property_type')) {
            $property_type = $request->input('property_type');

            if (isset($property_type)) {
                $query->where('property_type', $property_type);
            }
        }

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

        $listings = $query->with('images')->get();

        return Inertia::render('ListPage', [
            'listings' => $listings
        ]);
    }

    public function manage(Request $request)
    {
        $query = HouseListing::query();

        // Filter by province
        if ($request->has('province')) {
            $province = $request->input('province');

            if (isset($province)) {
                $query->where('province', $province);
            }
        }

        if ($request->has('property_type')) {
            $property_type = $request->input('property_type');

            if (isset($property_type)) {
                $query->where('property_type', $property_type);
            }
        }

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

        $listings = $query
            ->where('user_id', $request->user()->id)
            ->with(['images', 'user'])
            ->get();

        return Inertia::render('ManagePage', [
            'listings' => $listings
        ]);
    }

    /**
     * Show the form for creating a new house listing.
     */
    public function create()
    {
        return Inertia::render('FormPage');
    }

    /**
     * Store a newly created house listing in storage.
     */
    public function store(ListingCreateRequest $request)
    {
        $data = $request->validatedWithQueryData();
        $listing = HouseListing::create($data);
        $listing->saveImages($request);
        return redirect()->route('listing.manage')->with('flash.success', 'Anuncio enviado e estará disponivel assim que o administrador aprovar');
    }

    /**
     * Display the specified house listing.
     */
    public function show(HouseListing $listing)
    {
        if(!$listing->is_published || !$listing->is_approved){
            abort(404);
        }

        return Inertia::render('DetailsPage', [
            'listing' => $listing->load('images')
        ]);
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
        // Update the house listing
        $validatedData = $request->validatedWithQueryData($listing);
        $listing->update($validatedData);
        $listing->saveImages($request);
        return redirect()->route('admin.listing.index', $listing->id)->with('flash.success', 'Dados do imóvel atualizados com sucesso');
    }

    /**
     * Remove the specified house listing from storage.
     */
    public function destroy(HouseListing $listing)
    {
        $listing->delete();
        return redirect()->route('admin.listing.index')->with('flash.success', 'O Imóvel foi removido. essa ação não pode ser revertida');
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
     * updated is_published state of the given listings
     */
    public function publish(Request $request, HouseListing $listing)
    {
        $request->validate([
            'is_published' => 'required|boolean'
        ]);

        $listing->is_published = $request->is_published;
        $listing->save();
        $flash_message = $listing->is_published ? "Imóvel publicado" : "Imóvel não será publicado";
        return back()->with('flash.success', $flash_message);
    }
}
