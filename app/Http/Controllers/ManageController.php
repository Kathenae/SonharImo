<?php

namespace App\Http\Controllers;

use App\Models\HouseImage;
use App\Models\HouseListing;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ManageController extends Controller
{
    /**
     * Display a listing of the house listings for the current user.
     */
    public function index(Request $request)
    {
        $query = HouseListing::query();

        // Filter by province
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

        $listings = $query->with('images')->get();

        return Inertia::render('ManagePage', [
            'listings' => $listings
        ]);
    }

    /**
     * Show the form for editing the specified house listing.
     */
    public function edit(HouseListing $listing)
    {
        return Inertia::render('FormPage', [
            'listing' => $listing->load('images')
        ]);
    }

    /**
     * Update the specified house listing in storage.
     */
    public function update(Request $request, HouseListing $listing)
    {
        $request->validate([
            'images' => 'array',
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

        // Update the house listing
        $listing->update([
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

        return redirect()->route('listing.edit', $listing->id)->with('flash.success', 'Dados do imóvel atualizados com sucesso');
    }

    /**
     * Remove the specified house listing from storage.
     */
    public function destroy(HouseListing $listing)
    {
        $listing->delete();
        return redirect()->route('listing.manage')->with('flash.success', 'O Imóvel foi removido. essa ação não pode ser revertida');
    }

    /**
     * Remove the specified house image from storage.
     */
    public function deleteImage(Request $request, HouseImage $image)
    {
        if($image->house->user_id == $request->user()->id){
            $filePath = str_replace('/storage/', 'public/', $image->url);
            Storage::delete($filePath);
            $image->delete();
        }

        return back()->with('flash.success', 'Imagem foi apagada');
    }

    /**
     * set the specified house
     */
    public function toggleHighlighted(Request $request, HouseListing $listing)
    {
        $userRole = $request->user()->role;
        if($userRole != User::ADMIN_ROLE && $userRole != User::MODERATOR_ROLE){
            return abort(403, 'Unauthorized');
        }

        $listing->is_highlighted = !$listing->is_highlighted;
        $listing->save();
        $flash_message = $listing->is_highlighted? "Anuncio addicionada a secção de destaques" : "Anuncio removido da secção de destaques";

        return back()->with('flash.success', $flash_message);
    }
}
