<?php

namespace App\Http\Controllers;

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

        // Filter by province
        if ($request->has('province')) {
            $province = $request->input('province');

            if (isset($province)){
                $query->where('province', $province);
            }
        }

        if ($request->has('address')) {
            $address = $request->input('address');

            if (isset($address)){
                $query->where('address', 'like', "%$address%");
            }
        }

        // Filter by price range
        if ($request->has('price') ) {
            $price = explode(",", $request->input('price'));

            if(isset($price[0]) && is_numeric($price[0]) && isset($price[1]) && is_numeric($price[1]))
            {
                $query->whereBetween('price', [$price[0], $price[1]]);

            }
            else if (isset($price[0]) && is_numeric($price[0])){
                $query->where('price', '<=', $price[0]);
            }
        }

        // Filter by deal_type
        if ($request->has('deal_type')) {
            $dealType = $request->input('deal_type');
            if (isset($dealType)){
                $query->where('deal_type', $dealType);
            }
        }

        // Filter by total_bedrooms
        if ($request->has('total_bedrooms')) {
            $totalBedrooms = $request->input('total_bedrooms');

            if (isset($totalBedrooms)){
                $query->where('total_bedrooms', $totalBedrooms);
            }
        }

        $listings = $query->get();

        return Inertia::render('ListPage', [
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
    public function store(Request $request)
    {
        $request->validate([
            'cover_image' => 'required|image|max:16000',
            'province' => 'required|string',
            'city' => 'required|string',
            'address' => 'required|string',
            'property_type' => 'required|string',
            'deal_type' => 'required|in:rent,sale',
            'price' => 'required|numeric',
            'description' => 'required|string',
            'total_bedrooms' => 'required|integer',
            'total_showers' => 'required|integer',
            'total_garages' => 'required|integer',
            'owner_first_name' => 'required|string',
            'owner_last_name' => 'required|string',
            'owner_phone_number' => 'required|string',
            'owner_secondary_phone_number' => 'nullable|string',
            'owner_personal_id_number' => 'required|string',
            'owner_address' => 'required|string',
            'owner_email_address' => 'required|email',
        ]);

        // Handle file upload
        if ($request->hasFile('cover_image')) {
            $image = $request->file('cover_image');
            $coverImageUrl = Storage::url($image->storePublicly('public'));
        }

        // Create the house listing
        $listing = HouseListing::create([
            'cover_image_url' => $coverImageUrl ?? null,
            'province' => $request->province,
            'city' => $request->city,
            'address' => $request->address,
            'property_type' => $request->property_type,
            'deal_type' => $request->deal_type,
            'price' => $request->price,
            'description' => $request->description,
            'total_bedrooms' => $request->total_bedrooms,
            'total_showers' => $request->total_showers,
            'total_garages' => $request->total_garages,
            'owner_first_name' => $request->owner_first_name,
            'owner_last_name' => $request->owner_last_name,
            'owner_phone_number' => $request->owner_phone_number,
            'owner_secondary_phone_number' => $request->owner_secondary_phone_number,
            'owner_personal_id_number' => $request->owner_personal_id_number,
            'owner_address' => $request->owner_address,
            'owner_email_address' => $request->owner_email_address,
            'user_id' => $request->user()->id,
        ]);

        return redirect()->route('listing.show', $listing->id)->with('success', 'House listing created successfully.');
    }

    /**
     * Display the specified house listing.
     */
    public function show(HouseListing $listing)
    {
        return Inertia::render('DetailsPage', [
            'listing' => $listing
        ]);
    }

    /**
     * Show the form for editing the specified house listing.
     */
    public function edit(HouseListing $listing)
    {
        return Inertia::render('FormPage', [
            'listing' => $listing
        ]);
    }

    /**
     * Update the specified house listing in storage.
     */
    public function update(Request $request, HouseListing $listing)
    {
        $request->validate([
            'cover_image' => 'nullable|image|max:2048',
            'province' => 'required|string',
            'city' => 'required|string',
            'address' => 'required|string',
            'property_type' => 'required|string',
            'deal_type' => 'required|in:rent,sale',
            'price' => 'required|numeric',
            'description' => 'required|string',
            'total_bedrooms' => 'required|integer',
            'total_showers' => 'required|integer',
            'total_garages' => 'required|integer',
            'owner_first_name' => 'required|string',
            'owner_last_name' => 'required|string',
            'owner_phone_number' => 'required|string',
            'owner_secondary_phone_number' => 'nullable|string',
            'owner_personal_id_number' => 'required|string',
            'owner_address' => 'required|string',
            'owner_email_address' => 'required|email',
        ]);

        // Handle file upload
        if ($request->hasFile('cover_image')) {
            $image = $request->file('cover_image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('images'), $imageName);
            $coverImageUrl = '/images/' . $imageName;
        }

        // Update the house listing
        $listing->update([
            'cover_image_url' => $coverImageUrl ?? $listing->cover_image_url,
            'province' => $request->province,
            'city' => $request->city,
            'address' => $request->address,
            'property_type' => $request->property_type,
            'deal_type' => $request->deal_type,
            'price' => $request->price,
            'description' => $request->description,
            'total_bedrooms' => $request->total_bedrooms,
            'total_showers' => $request->total_showers,
            'total_garages' => $request->total_garages,
            'owner_first_name' => $request->owner_first_name,
            'owner_last_name' => $request->owner_last_name,
            'owner_phone_number' => $request->owner_phone_number,
            'owner_secondary_phone_number' => $request->owner_secondary_phone_number,
            'owner_personal_id_number' => $request->owner_personal_id_number,
            'owner_address' => $request->owner_address,
            'owner_email_address' => $request->owner_email_address,
            'user_id' => $request->user()->id,
        ]);

        return redirect()->route('listing.show', $listing->id)->with('success', 'House listing updated successfully.');
    }

    /**
     * Remove the specified house listing from storage.
     */
    public function destroy(HouseListing $listing)
    {
        $listing->delete();
        return redirect()->route('listing.index')->with('success', 'House listing deleted successfully.');
    }
}
