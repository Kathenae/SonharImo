<?php

namespace App\Http\Middleware;

use App\Models\HouseListing;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckOwnership
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $listing = $request->route('listing');
        $user = $request->user();

        // Check if the authenticated user owns the listing
        if ($user->id !== $listing->user_id) {
            return abort(403, 'Unauthorized');
        }

        return $next($request);
    }
}
