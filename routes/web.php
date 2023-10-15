<?php

use App\Http\Controllers\HouseListingController;
use App\Http\Controllers\ManageController;
use App\Http\Controllers\ProfileController;
use App\Models\HouseListing;
use App\Models\User;
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
Route::post('/anuncie', [HouseListingController::class, 'store'])->middleware(['auth', 'optimizeImages'])->name('listing.store');


Route::middleware(['auth', 'ownership'])->group(function () {
    Route::get('/minhas-propriedades', [ManageController::class, 'index'])->withoutMiddleware('ownership')->name('listing.manage');
    Route::get('/minhas-propriedades/alterar/{listing}', [ManageController::class, 'edit'])->name('listing.edit');
    Route::post('/minhas-propriedades/alterar/{listing}', [ManageController::class, 'update'])->middleware('optimizeImages')->name('listing.update');
    Route::delete('/minhas-propriedades/remover/{listing}', [ManageController::class, 'destroy'])->name('listing.destroy');
    Route::delete('/minhas-propriedades/remover-image/{image}', [ManageController::class, 'deleteImage'])->withoutMiddleware('ownership')->name('listing.delete-image');
    Route::patch('/minhas-propriedades/destacar/{listing}', [ManageController::class, 'toggleHighlighted'])->withoutMiddleware('ownership')->name('listing.toggle-highlighted');
});

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
