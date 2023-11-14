<?php

namespace App\Http\Controllers;

use App\Models\Partner;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
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
            'description' => 'required|min:10|max:500',
            'featured' => 'boolean',
            'logo' => 'image',
            'logoUrl' => 'nullable|url|max:255',
            'websiteUrl' => 'nullable|url|max:255',
        ]);

        $partner = Partner::create([
            'name' => $request->name,
            'description' => $request->description,
            'logoUrl' => $request->logoUrl,
            'websiteUrl' => $request->websiteUrl,
            'featured' => $request->featured,
        ]);

        if($request->hasFile('logo')){
            $logo = $request->logo;
            if($logo instanceof UploadedFile && $logo->isValid()){
                $logo_url = Storage::url($logo->storePublicly('public'));
                $partner->update([
                    'logoUrl' => $logo_url,
                ]);
            }
        }

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
            'description' => 'required|min:10|max:500',
            'featured' => 'boolean',
            'logo' => 'image',
            'logoUrl' => 'nullable|url|max:255',
            'websiteUrl' => 'nullable|url|max:255',
        ]);

        $partner->update([
            'name' => $request->name,
            'description' => $request->description,
            'websiteUrl' => $request->websiteUrl,
            'logoUrl' => $request->logoUrl,
            'featured' => $request->featured,
        ]);

        if($request->hasFile('logo')){
            $logo = $request->logo;
            if($logo instanceof UploadedFile && $logo->isValid()){
                $logo_url = Storage::url($logo->storePublicly('public'));
                $partner->update([
                    'logoUrl' => $logo_url,
                ]);
            }
        }

        return redirect(route('admin.partners.index'))->with('flash.success', 'Dados do parceiro actualizados');
    }

    public function destroy(Request $request)
    {
        $request->validate([
            'partners' => 'required|array',
            'partners.*' => 'required|integer'
        ]);

        Partner::query()
            ->whereIn('id', $request->partners)
            ->delete();

        return redirect(route('admin.partners.index'))->with('flash.success', 'Parceiros removidos');
    }
}
