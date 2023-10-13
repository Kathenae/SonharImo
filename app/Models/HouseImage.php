<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HouseImage extends Model
{
    use HasFactory;

    public function house(){
        return $this->belongsTo(HouseListing::class, 'house_listing_id');
    }
}
