<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function userAccounts($location='reportedMeals')
    {
        $users = User::all();
        return Inertia::render('admin/Dashboard', [
            'location' => $location,
            'users' => $users
        ]);
    }
}
