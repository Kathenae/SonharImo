<?php

use App\Http\Controllers\HouseListingController;
use App\Http\Controllers\ProfileController;
use App\Models\HouseListing;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('HomePage', [
        'popularListings' => HouseListing::mostPopular(),
    ]);
})->name('home-page');

Route::get('/procurar', [HouseListingController::class, 'index'])->name('listing.index');
Route::get('/ver/{listing}', [HouseListingController::class, 'show'])->name('listing.show');
Route::get('/anuncie', [HouseListingController::class, 'create'])->middleware('auth')->name('listing.create');
Route::post('/anuncie', [HouseListingController::class, 'store'])->middleware('auth')->name('listing.store');
Route::get('/alterar/{listing}', [HouseListingController::class, 'edit'])->middleware('auth')->name('listing.edit');
Route::put('/alterar/{listing}', [HouseListingController::class, 'store'])->middleware('auth')->name('listing.update');
Route::delete('/remover/{listing}', [HouseListingController::class, 'destroy'])->middleware('auth')->name('listing.destroy');


Route::get('/sobre-nos', function () {
    return Inertia::render('AboutPage', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('about-page');

Route::get('/contactos', function () {
    return Inertia::render('ContactPage', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('contact-page');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
