<?php

namespace App\Http\Controllers;

use App\Models\Meal;
use Illuminate\Http\Request;
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
        ->join('users', 'meals.idUser', '=', 'users.idUser')  // Join based on user ID in meals table
        ->where('meals.idUser', $id) // Filter meals for the specific user
        ->select('meals.*', 'users.firstName', 'users.lastName', 'users.profile_img') // Select relevant fields
        ->get();

        // Passing data to the view :
        return inertia('profile/PublicProfile', compact('user', 'meals'));
    }
}
