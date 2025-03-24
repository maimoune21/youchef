<?php

namespace App\Http\Controllers;

use App\Models\Meal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class MealController extends Controller
{
    /**
     * Display a listing of the Meals.
     */
    public function index()
    {
        $data = Meal::latest()->get();
        return inertia("meals/Meals", compact("data"));
    }

    /**
     * Display Popular Meals
     */
    public function popularMeals()
    {
        $popularMeals = 'test';
        return inertia('general/Home', compact('popularMeals'));
    }

    /**
     * Show the form for creating a new Meal.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created Meal in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified Meal.
     */
    public function show($id)
    {
        $meal = Meal::find($id);
        if (!$meal) {
            abort(404);
        }
        // Fetching the user who posted the meal :
        $user = DB::table('users')
            ->where('idUser', $meal->idUser)
            ->select('idUser', 'firstName', 'lastName', 'profile_img', 'email', 'bio')
            ->first();


        // Fetching category and kitchen of the meal :
        $categories = DB::table('categories')->pluck('name', 'idCategory')->toArray();
        $kitchens = DB::table('kitchens')->pluck('name', 'idKitchen')->toArray();
        $categoryName = $categories[$meal->idCategory] ?? 'Unknown Category';
        $kitchenName = $kitchens[$meal->idKitchen] ?? 'Unknown Kitchen';

        // Fetching the meal comments :
        $comments = DB::table('comments')
            ->where('comments.idMeal', $meal->idMeal)
            ->join('users', 'comments.idUser', '=', 'users.idUser')
            ->select('comments.*', 'users.firstName', 'users.lastName', 'users.profile_img')
            ->orderBy('comments.created_at', 'desc')
            ->get();

        // Passing data to the view :
        return inertia('meals/MealDetails', compact('meal', 'user', 'categoryName', 'kitchenName', 'comments'));
    }

    /**
     * Show the form for editing the specified Meal.
     */
    public function edit(Meal $meal)
    {
        //
    }

    /**
     * Update the specified Meal in storage.
     */
    public function update(Request $request, Meal $meal)
    {
        //
    }

    /**
     * Increment the likes count for a meal.
     */
    public function like($id)
    {
        $meal = Meal::find($id);
        if ($meal) {
            $meal->increment('likes');
        }
    }

    /**
     * Decrement the likes count for a meal.
     */
    public function dislike($id)
    {
        $meal = Meal::find($id);
        if ($meal && $meal->likes > 0) {
            $meal->decrement('likes');
        }
    }

    /**
     * Commenting.
     */
    public function addComment(Request $request, $id)
    {
        $request->validate([
            'comment' => 'required|string|max:500',
        ]);
        $idUser = Auth::id();
        DB::table('comments')->insert([
            'idMeal' => $id,
            'idUser' => $idUser,
            'content' => $request->comment,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        return redirect()->back();
    }

    /**
     * Remove the specified Meal from storage.
     */
    public function destroy(Meal $meal)
    {
        //
    }
}
