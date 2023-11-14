<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class HouseListing extends Model
{
    use HasFactory;

    protected $fillable = [
        'province',
        'city',
        'address',
        'property_type',
        'deal_type',
        'negotiation_type',
        'price',
        'is_approved',
        'is_published',
        'is_featured',
        'publish_at',
        'description',
        'plot_square_footage',
        'total_bedrooms',
        'total_showers',
        'total_parking_spaces',
        'owner_name',
        'owner_phone_number',
        'owner_secondary_phone_number',
        'owner_personal_id_number',
        'owner_address',
        'owner_email_address',
        'user_id',
        'include_convenience',
    ];

    protected $casts = [
        'is_approved' => 'boolean',
        'is_published' => 'boolean',
        'is_featured' => 'boolean',
        'include_convenience' => 'boolean',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public static function featured()
    {
        $listings = HouseListing::query()
            ->where('is_published', true)
            ->where('is_approved', true)
            ->where('is_featured', true)
            ->with('images')
            ->get();
        return $listings;
    }

    public function images()
    {
        return $this->hasMany(HouseImage::class);
    }

    public function saveImages(Request $request)
    {
        if ($request->hasFile('images')) {
            $images = $request->images;
            foreach ($images as $image) {
                if($image instanceof UploadedFile && $image->isValid()){
                    $image_url = Storage::url($image->storePublicly('public'));
                    DB::table('house_images')->insert([
                        'url' => $image_url,
                        'house_listing_id' => $this->id
                    ]);
                }
            }
        }
    }
}
