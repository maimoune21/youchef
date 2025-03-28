<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Meal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Mockery\Generator\StringManipulation\Pass\Pass;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $meals = Meal::join('users', 'meals.idUser', '=', 'users.idUser')
            ->select(
                'meals.*',
                'users.idUser as idUser',
                'users.firstName as userLName',
                'users.lastName as userFName',
                'users.profile_img as userImage'
            )
            ->orderBy('meals.views', 'desc')
            ->get();
        $categories = Category::all();
        $Kitchen = DB::table("kitchens")->get();

        $thisUser = Auth::user();
        $mealsfav = collect();

        if ($thisUser) {
            $mealsfav = DB::table('user__meal__favorite')
                ->where('idUser', $thisUser->idUser)
                ->pluck('idMeal');
        }

        $favoriteMeals = Meal::join('users', 'meals.idUser', '=', 'users.idUser')
            ->whereIn('meals.idMeal', $mealsfav)
            ->select(
                'meals.*',
                'users.idUser as idUser',
                'users.firstName as userFName',
                'users.lastName as userLName',
                'users.profile_img as userImage'
            )
            ->orderBy('meals.views', 'desc')
            ->get();

        $SearchedMeals = Meal::latest()->get();

        return inertia("general/Home", compact("meals", "categories", "Kitchen", "thisUser", "favoriteMeals", "SearchedMeals"));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
