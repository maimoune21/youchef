<?php

namespace App\Http\Controllers;

use App\Models\Message;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function userAccounts($location = 'reportedMeals')
    {
        $users = User::all();
        $usersMessages = DB::table('messages')
            ->leftJoin('users', 'messages.idUser', '=', 'users.idUser')
            ->select(
                'messages.*',
                'users.profile_img'
            )
            ->get()
            ->map(function ($message) {
                return (array) $message;
            });

        return Inertia::render('admin/Dashboard', compact('location', 'users', 'usersMessages'));
    }
    public function deleteMessage($id)
    {
        Message::where('idMessage', $id)->delete();
        return redirect()->back();
    }
}
