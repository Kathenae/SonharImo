<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HouseListing extends Model
{
    use HasFactory;

    protected $fillable = [
        'cover_image_url',
        'province',
        'city',
        'address',
        'property_type',
        'deal_type',
        'price',
        'description',
        'total_bedrooms',
        'total_showers',
        'total_garages',
        'owner_first_name',
        'owner_last_name',
        'owner_phone_number',
        'owner_secondary_phone_number',
        'owner_personal_id_number',
        'owner_address',
        'owner_email_address',
        'user_id'
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }

    public static function mostPopular(){
        $listings = HouseListing::all();
        return $listings;
    }
}
