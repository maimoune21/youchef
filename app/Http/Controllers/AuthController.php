<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AuthController extends Controller
{
    // Register User
    public function register(Request $request)
    {
        //Validation
        $data = $request->validate(
            [
                'firstName' => ['required', 'max:80'],
                'lastName' => ['required', 'max:80'],
                'email' => ['required', 'max:80', 'email', 'unique:users'],
                'password' => ['required', 'min:4', 'confirmed'],
            ]
        );
        //Give The User a Role
        $data['idRole'] = 2;
        //Register
        $user = User::create($data);
        //Login
        Auth::login($user);
        //Redirect
        return redirect('/');
    }
    // Login User
    public function login(Request $request)
    {
        //Validate
        $data = $request->validate(
            [
                'email' => ['required', 'max:80', 'email'],
                'password' => ['required'],
            ]
        );
        //Try to Login the user
        if (Auth::attempt($data)) {
            $request->session()->regenerate();
            return redirect('/');
        } else {
            return redirect()->back()->with('failed', 'The email or password is incorrect');
        }
    }
    public function logout(Request $request) {
        //Logout the user
        Auth::logout();
        //Invalidate the user session
        $request->session()->invalidate();
        //Regenerate CSRF token
        $request->session()->regenerateToken();
        //Redirect to home
        return redirect('/');
    }
}
