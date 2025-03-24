<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ProfileController extends Controller
{

    public function show($id)
    {
        $user = DB::table('users')
            ->where('idUser', $id)
            ->select('idUser', 'firstName', 'lastName', 'profile_img', 'email', 'bio')
            ->first();

        if (!$user) {
            abort(404);
        }

        $meals = DB::table('meals')
        ->join('users', 'meals.idUser', '=', 'users.idUser')
        ->where('meals.idUser', $id)
        ->select('meals.*', 'users.firstName', 'users.lastName', 'users.profile_img')
        ->get();

        // Passing data to the view :
        return inertia('profile/PublicProfile', compact('user', 'meals'));
    }
    public function privateShow()
    {
        $user = Auth::user();

        $posts = DB::table('meals')
        ->join('users', 'meals.idUser', '=', 'users.idUser')
        ->where('meals.idUser', $user->idUser)
        ->select('meals.*', 'users.firstName', 'users.lastName', 'users.profile_img')
        ->get();

        $favoriteMeals = DB::table('user__meal__favorite')
        ->join('meals', 'user__meal__favorite.idMeal', '=', 'meals.idMeal')  // Join with meals to get meal details
        ->where('user__meal__favorite.idUser', $user->idUser)  // Get favorites for the authenticated user
        ->select('meals.*')  // Select all meal columns
        ->get();

        return inertia('profile/PrivateProfile', compact('user', 'posts', 'favoriteMeals'));
    }
}
