<?php

namespace App\Http\Middleware;

use App\Models\SiteContact;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $site_contacts = SiteContact::query()->where('id', 1)->first();

        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'ziggy' => fn () => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
            'site_contacts' => $site_contacts,
            'flash' => [
                'success' => fn() => $request->session()->get('flash.success'),
                'error' => fn() => $request->session()->get('flash.error'),
                'warning' => fn() => $request->session()->get('flash.warning'),
            ]
        ];
    }
}
