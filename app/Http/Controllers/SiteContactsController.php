<?php

namespace App\Http\Controllers;

use App\Models\SiteContact;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SiteContactsController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('Admin/sitecontacts-index');
    }

    public function update(Request $request)
    {
        $request->validate([
            'phone_number' => 'nullable|string|min:8|max:20',
            'whatsapp_link' => 'nullable|url|max:255',
            'instagram_link' => 'nullable|url|max:255',
            'facebook_link' => 'nullable|url|max:255',
            'twitter_link' => 'nullable|url|max:255',
            'threads_link' => 'nullable|url|max:255',
        ]);

        SiteContact::query()->updateOrCreate(['id' => 1], [
            'phone_number' => $request->phone_number,
            'whatsapp_link' => $request->whatsapp_link,
            'instagram_link' => $request->instagram_link,
            'facebook_link' => $request->facebook_link,
            'twitter_link' => $request->twitter_link,
            'threads_link' => $request->threads_link,
        ]);

        return redirect()->back()->with('flash.success', 'Contactos actualizados com successo');
    }
}
