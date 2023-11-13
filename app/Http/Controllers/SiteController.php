<?php

namespace App\Http\Controllers;

use App\Models\HouseListing;
use App\Models\Partner;
use Illuminate\Http\Request;
use Inertia\Inertia;

/**
 * SiteController.php
 *
 * This controller handles the rendering of the main pages of the site.
 * It uses the Inertia.js library to render Vue.js components on the client-side.
 *
 * Methods:
 * - home: Renders the home page with the most popular house listings.
 * - contact: Renders the contact page.
 * - about: Renders the about page.
 * - terms: Renders the terms and conditions page.
 *
 * Each method accepts a Request object and returns an Inertia response.
 *
 * @author Ronald
 * @version 1.0
 * @package App\Http\Controllers
 */
class SiteController extends Controller
{
    public function home(Request $request)
    {
        return Inertia::render('HomePage', [
            'listings' => HouseListing::featured(),
            'partners' => Partner::featured(),
        ]);
    }

    public function contact(Request $request)
    {
        return Inertia::render('ContactPage', []);
    }

    public function about(Request $request)
    {
        return Inertia::render('AboutPage', []);
    }

    public function terms(Request $request)
    {
        return Inertia::render('TermsPage', []);
    }

    public function privacy(Request $request)
    {
        return Inertia::render('PrivacyPage', []);
    }
}
