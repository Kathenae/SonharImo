<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Partner extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'logoUrl',
        'websiteUrl',
        'featured',
    ];

    protected $casts = [
        'featured' => 'boolean'
    ];

    public static function featured(){
        return self::query()->where('featured', true)->get();
    }
}
