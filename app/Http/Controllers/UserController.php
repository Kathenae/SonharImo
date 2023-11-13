<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $users = User::all();
        return Inertia::render('Admin/users-index', [
            'users' => $users,
        ]);
    }

    public function create(Request $request){
        return Inertia::render('Admin/users-create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:'.User::class,
            'address' => 'string|max:255',
            'phone_number' => 'string|max:20',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone_number' => $request->phone_number,
            'address' => $request->address,
            'password' => Hash::make($request->password),
        ]);

        return redirect(route('admin.users.index'))->with('flash.success', 'Novo Utilizador addicionado');
    }

    public function edit(Request $request, User $user){
        return Inertia::render('Admin/users-edit', [
            'user' => $user,
        ]);
    }

    public function update(Request $request, User $user)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:' . User::class . ",email,$user->id",
            'address' => 'max:255',
            'phone_number' => 'max:20',
            'password' => ['required', Rules\Password::defaults()],
        ]);

        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            'phone_number' => $request->phone_number,
            'address' => $request->address,
            'password' => Hash::make($request->password),
        ]);

        return redirect(route('admin.users.index'))->with('flash.success', 'Dados do Utilizador Actualizados');
    }

    public function destroy(Request $request, User $user){
        $user->delete();
        return redirect(route('admin.users.index'))->with('flash.success','Utilizador Removido');
    }
}
