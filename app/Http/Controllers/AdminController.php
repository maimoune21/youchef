<?php

namespace App\Http\Controllers;

use App\Models\Meal;
use App\Models\Message;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function userAccounts($location = 'reportedMeals')
    {
        $users = User::where('idRole', '!=', 1)->get();
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
        $meals = DB::table('meals')
            ->leftJoin('users', 'meals.idUser', '=', 'users.idUser')
            ->select(
                'meals.*',
                'users.firstName',
                'users.lastName',
                'users.profile_img',
            )
            ->get()
            ->map(function ($meal) {
                $meal->views = DB::table('user_meal_views')
                    ->where('idMeal', $meal->idMeal)
                    ->count();
                return (array) $meal;
            });

        return Inertia::render('admin/Dashboard', compact('location', 'users', 'usersMessages', 'meals'));
    }

    public function deleteMeal($idMeal)
    {
        Meal::where('idMeal', $idMeal)->delete();
        return redirect()->back();
    }
    public function deleteUser($id)
    {
        User::where('idUser', $id)->delete();
        return redirect()->back();
    }
    public function deleteMessage($id)
    {
        Message::where('idMessage', $id)->delete();
        return redirect()->back();
    }
}
