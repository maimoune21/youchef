<?php

namespace App\Http\Controllers;

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

        // Passing data to the view :
        return inertia('profile/PublicProfile', compact('user'));
    }
}
