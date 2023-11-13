<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SiteContact extends Model
{
    use HasFactory;

    protected $fillable = [
        'phone_number',
        'whatsapp_link',
        'instagram_link',
        'facebook_link',
        'twitter_link',
        'threads_link',
    ];
}
