<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\HouseListing;
use Illuminate\Support\Facades\DB;
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

        $listings = $query->with('images')->get();

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
            'images' => 'array|min:1',
            'images.*' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
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

        // Create the house listing
        $listing = HouseListing::create([
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

        // Handle file upload
        if ($request->hasFile('images')) {
            $images = $request->images;
            foreach($images as $image){
                $image_url = Storage::url($image->storePublicly('public'));
                DB::table('house_images')->insert([
                    'url' => $image_url,
                    'house_listing_id' => $listing->id
                ]);
            }
        }

        return redirect()->route('listing.show', $listing->id)->with('success', 'House listing created successfully.');
    }

    /**
     * Display the specified house listing.
     */
    public function show(HouseListing $listing)
    {
        return Inertia::render('DetailsPage', [
            'listing' => $listing->load('images')
        ]);
    }
}
