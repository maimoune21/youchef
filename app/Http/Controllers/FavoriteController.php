<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Meal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;

class FavoriteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $thisUser = Auth::user();

        $categories = Category::all();
        $Kitchen = DB::table("kitchens")->get();

        $meals = DB::table('user__meal__favorite')
            ->where('idUser', $thisUser->idUser)
            ->pluck('idMeal');

        $favoriteMeals = Meal::join('users', 'meals.idUser', '=', 'users.idUser')
            ->whereIn('meals.idMeal', $meals)
            ->select(
                'meals.*',
                'users.idUser as idUser',
                'users.firstName as userFName',
                'users.lastName as userLName',
                'users.profile_img as userImage'
            )
            ->latest()
            ->get()
            ->map(function ($meal) {
                $meal->views = DB::table('user_meal_views')
                    ->where('idMeal', $meal->idMeal)
                    ->count();
                return $meal;
            });

        return inertia('meals/Favorites', compact('favoriteMeals', 'categories', 'Kitchen', 'thisUser'));
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

        $idMeal = $request->input('idMeal');
        $idUser = $request->input('idUser');

        // Check if the meal is already in the favorites
        $existing = DB::table('user__meal__favorite')
            ->where('idMeal', $idMeal)
            ->where('idUser', $idUser)
            ->first();

        if ($existing) {
            // If the meal exists, remove it
            DB::table('user__meal__favorite')
                ->where('idMeal', $idMeal)
                ->where('idUser', $idUser)
                ->delete();

            return Redirect::back()->with('success', 'Meal removed from favorites!');
        } else {
            // If the meal does not exist, add it
            DB::table('user__meal__favorite')->insert([
                'idMeal' => $idMeal,
                'idUser' => $idUser
            ]);

            return Redirect::back()->with('success', 'Meal added to favorites!');
        }
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
