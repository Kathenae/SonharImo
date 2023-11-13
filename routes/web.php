<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HouseListingController;
use App\Http\Controllers\AdminListingController;
use App\Http\Controllers\PartnersController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SiteContactsController;
use App\Http\Controllers\SiteController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

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

#region static site pages
Route::get('/', [SiteController::class, 'home'])
    ->name('site.home');

Route::get('/contactos', [SiteController::class, 'contact'])
    ->name('site.contact');

Route::get('/sobre-nos', [SiteController::class, 'about'])
    ->name('site.about');

Route::get('/termos e condições', [SiteController::class, 'terms'])
    ->name('site.terms');

Route::get('/politicas de privacidade', [SiteController::class, 'privacy'])
    ->name('site.privacy');
#endregion


#region House Listings Controller
Route::get('/procurar', [HouseListingController::class, 'index'])
    ->name('listing.index');

Route::get('/ver/{listing}', [HouseListingController::class, 'show'])
    ->name('listing.show');

Route::get('/anuncie', [HouseListingController::class, 'create'])
    ->middleware('auth')
    ->name('listing.create');

Route::post('/anuncie', [HouseListingController::class, 'store'])
    ->middleware(['auth', 'optimizeImages'])
    ->name('listing.store');

Route::get('/imoveis/gerir', [HouseListingController::class, 'manage'])
    ->middleware(['auth'])
    ->name('listing.manage');

Route::get('/imoveis/alterar/{listing}', [HouseListingController::class, 'edit'])
    ->middleware(['auth', 'ownership'])
    ->name('listing.edit');

Route::post('/imoveis/alterar/{listing}', [HouseListingController::class, 'update'])
    ->middleware(['auth', 'ownership'])
    ->middleware('optimizeImages')
    ->name('listing.update');

Route::delete('/imoveis/remover/{listing}', [HouseListingController::class, 'destroy'])
    ->middleware(['auth', 'ownership'])
    ->name('listing.destroy');

Route::delete('/imoveis/remover-image/{image}', [HouseListingController::class, 'deleteImage'])
    ->middleware(['auth'])
    ->name('listing.delete-image');
#endregion


#region Admin Listing Management
Route::get('/admin/imoveis', [AdminListingController::class, 'index'])
    ->middleware(['auth', 'role:admin'])
    ->name('admin.listings.index');

Route::get('/admin/imoveis/novo', [AdminListingController::class, 'create'])
    ->middleware(['auth', 'role:admin'])
    ->name('admin.listings.create');

Route::post('/admin/imoveis/novo', [AdminListingController::class, 'store'])
    ->middleware(['auth', 'role:admin', 'optimizeImages'])
    ->name('admin.listings.store');

Route::get('/admin/imoveis/alterar/{listing}', [AdminListingController::class, 'edit'])
    ->middleware(['auth', 'role:admin'])
    ->name('admin.listings.edit');

Route::post('/admin/imoveis/alterar/{listing}', [AdminListingController::class, 'update'])
    ->middleware(['auth', 'role:admin'])
    ->middleware('optimizeImages')
    ->name('admin.listings.update');

Route::delete('/admin/imoveis/remover/', [AdminListingController::class, 'destroy'])
    ->middleware(['auth', 'role:admin'])
    ->name('admin.listings.destroy');

Route::post('/admin/imoveis/publicar/', [AdminListingController::class, 'publish'])
    ->middleware(['auth', 'role:admin'])
    ->name('admin.listings.publish');

Route::post('/admin/imoveis/approvar', [AdminListingController::class, 'approve'])
    ->middleware(['auth', 'role:admin'])
    ->name('admin.listings.approve');

Route::post('/admin/imoveis/destacar', [AdminListingController::class, 'feature'])
    ->middleware(['auth', 'role:admin'])
    ->name('admin.listings.feature');

Route::delete('/admin/imoveis/remover-image/{image}', [AdminListingController::class, 'deleteImage'])
    ->middleware(['auth', 'role:admin'])
    ->name('admin.listings.delete-image');


#region Admin Dashboard
Route::get('/admin', [DashboardController::class, 'index'])
    ->middleware(['auth','role:admin'])
    ->name('admin.dashboard');


#region User Management
Route::get('/admin/utilizadores', [UserController::class, 'index'])
    ->middleware(['auth','role:admin'])
    ->name('admin.users.index');

Route::get('/admin/utilizadores/novo', [UserController::class, 'create'])
    ->middleware(['auth','role:admin'])
    ->name('admin.users.create');

Route::post('/admin/utilizadores/novo', [UserController::class, 'store'])
    ->middleware(['auth','role:admin'])
    ->name('admin.users.store');

Route::get('/admin/utilizadores/alterar/{user}', [UserController::class, 'edit'])
    ->middleware(['auth','role:admin'])
    ->name('admin.users.edit');

Route::post('/admin/utilizadores/alterar/{user}', [UserController::class, 'update'])
    ->middleware(['auth','role:admin'])
    ->name('admin.users.update');

Route::delete('/admin/utilizadores/alterar/{user}', [UserController::class, 'destroy'])
    ->middleware(['auth','role:admin'])
    ->name('admin.users.destroy');
#endregion


#region Partner Management
Route::get('/admin/parceiros', [PartnersController::class, 'index'])
    ->middleware(['auth','role:admin'])
    ->name('admin.partners.index');

Route::get('/admin/parceiros/novo', [PartnersController::class, 'create'])
    ->middleware(['auth','role:admin'])
    ->name('admin.partners.create');

Route::post('/admin/parceiros/novo', [PartnersController::class, 'store'])
    ->middleware(['auth','role:admin'])
    ->name('admin.partners.store');

Route::get('/admin/parceiros/alterar/{partner}', [PartnersController::class, 'edit'])
    ->middleware(['auth','role:admin'])
    ->name('admin.partners.edit');

Route::post('/admin/parceiros/alterar/{partner}', [PartnersController::class, 'update'])
    ->middleware(['auth','role:admin'])
    ->name('admin.partners.update');

Route::delete('/admin/parceiros/alterar/{partner}', [PartnersController::class, 'destroy'])
    ->middleware(['auth','role:admin'])
    ->name('admin.partners.destroy');
#endregion

#region Contact Management
Route::get('/admin/contactos', [SiteContactsController::class, 'index'])
    ->middleware(['auth','role:admin'])
    ->name('admin.sitecontacts.index');

Route::post('/admin/contacts/actualizar', [SiteContactsController::class, 'update'])
    ->middleware(['auth','role:admin'])
    ->name('admin.sitecontacts.update');
#endregion


#region Profile
Route::get('/profile', [ProfileController::class, 'edit'])
    ->middleware(['auth'])
    ->name('profile.edit');

Route::patch('/profile', [ProfileController::class, 'update'])
    ->middleware(['auth'])
    ->name('profile.update');

Route::delete('/profile', [ProfileController::class, 'destroy'])
    ->middleware(['auth'])
    ->name('profile.destroy');

require __DIR__.'/auth.php';
