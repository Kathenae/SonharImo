<?php

namespace App\Http\Controllers;

use App\Models\Partner;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PartnersController extends Controller
{
    public function index(Request $request)
    {
        $users = Partner::all();
        return Inertia::render('Admin/partners-index', [
            'partners' => $users,
        ]);
    }

    public function create(Request $request){
        return Inertia::render('Admin/partners-create', []);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|min:20|max:500',
            'featured' => 'boolean',
            'logo' => 'image',
            'logoUrl' => 'url|max:255',
            'websiteUrl' => 'url|max:255',
        ]);

        $partner = Partner::create([
            'name' => $request->name,
            'description' => $request->description,
            'logoUrl' => $request->logoUrl,
            'websiteUrl' => $request->websiteUrl,
            'featured' => $request->featured,
        ]);

        return redirect(route('admin.partners.index'))->with('flash.success', 'Novo parceiro addicionado');
    }

    public function edit(Request $request, Partner $partner)
    {
        return Inertia::render('Admin/partners-edit', [
            'partner' => $partner
        ]);
    }

    public function update(Request $request, Partner $partner)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|min:20|max:500',
            'featured' => 'boolean',
            'logo' => 'image',
            'logoUrl' => 'url|max:255',
            'websiteUrl' => 'url|max:255',
        ]);

        $partner->update([
            'name' => $request->name,
            'description' => $request->description,
            'websiteUrl' => $request->websiteUrl,
            'logoUrl' => $request->logoUrl,
            'featured' => $request->featured,
        ]);

        return redirect(route('admin.partners.index'))->with('flash.success', 'Dados do parceiro actualizados');
    }

    public function destroy(Request $request, Partner $partner)
    {
        $partner->delete();
        return redirect(route('admin.partners.index'))->with('flash.success', 'Parceiro eliminado');
    }
}
