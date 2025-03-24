<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class FavoriteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = Auth::user();

        $categories = Category::all();
        $Kitchen = DB::table("kitchens")->get();

        $favoriteMeals = DB::table('user__meal__favorite')
        ->join('meals', 'user__meal__favorite.idMeal', '=', 'meals.idMeal')
        ->where('user__meal__favorite.idUser', $user->idUser) 
        ->select('meals.*') 
        ->get();

        return inertia('meals/Favorites', compact('favoriteMeals', 'categories', 'Kitchen'));
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
