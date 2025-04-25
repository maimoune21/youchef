<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Meal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Storage;

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
            ->select(
                'meals.*',
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

        $userlogin = Auth::user();

        $mealfav = DB::table('user_meal_favorites')
            ->where('idUser', $userlogin->idUser)
            ->pluck('idMeal');

        $favoriteMeals = Meal::join('users', 'meals.idUser', '=', 'users.idUser')
            ->leftJoin('categories', 'meals.idCategory', '=', 'categories.idCategory')
            ->leftJoin('kitchens', 'meals.idKitchen', '=', 'kitchens.idKitchen')
            ->whereIn('meals.idMeal', $mealfav)
            ->select(
                'meals.*',
                'users.idUser as idUser',
                'users.firstName as userFName',
                'users.lastName as userLName',
                'users.profile_img as userImage',
                'categories.name as categoryName',
                'kitchens.name as kitchenName'
            )
            ->latest()
            ->get();

        // Passing data to the view :
        return inertia('profile/PublicProfile', compact('user', 'meals', 'favoriteMeals'));
    }
    public function privateShow()
    {
        $user = Auth::user();

        $posts = DB::table('meals')
            ->join('users', 'meals.idUser', '=', 'users.idUser')
            ->leftJoin('categories', 'meals.idCategory', '=', 'categories.idCategory')
            ->leftJoin('kitchens', 'meals.idKitchen', '=', 'kitchens.idKitchen')
            ->where('meals.idUser', $user->idUser)
            ->select(
                'meals.*',
                'users.firstName as userFName',
                'users.lastName as userLName',
                'users.profile_img as userImage',
                'categories.name as categoryName',
                'kitchens.name as kitchenName'
            )
            ->get();

        $meals = DB::table('user_meal_favorites')
            ->where('idUser', $user->idUser)
            ->pluck('idMeal');

        $favoriteMeals = Meal::join('users', 'meals.idUser', '=', 'users.idUser')
            ->leftJoin('categories', 'meals.idCategory', '=', 'categories.idCategory')
            ->leftJoin('kitchens', 'meals.idKitchen', '=', 'kitchens.idKitchen')
            ->whereIn('meals.idMeal', $meals)
            ->select(
                'meals.*',
                'users.idUser as idUser',
                'users.firstName as userFName',
                'users.lastName as userLName',
                'users.profile_img as userImage',
                'categories.name as categoryName',
                'kitchens.name as kitchenName'
            )
            ->latest()
            ->get()
            ->map(function ($meal) {
                $meal->views = DB::table('user_meal_views')
                    ->where('idMeal', $meal->idMeal)
                    ->count();
                return $meal;
            });

        $SearchedMeals = Meal::latest()->get();
        $dataKitchens = DB::table("kitchens")->get();
        $dataCategories = Category::all();

        return inertia('profile/PrivateProfile', compact('user', 'posts', "dataKitchens", "dataCategories", 'favoriteMeals', 'SearchedMeals'));
    }
    public function update(Request $request)
    {
        $user = Auth::user();
        $validator = Validator::make($request->all(), [
            'firstName' => 'required|string|max:255',
            'lastName' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $user->idUser . ',idUser',
            'bio' => 'nullable|string|max:500',
            'password' => 'nullable|string|min:8|confirmed',
            'profile_img' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);
        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator->errors())->withInput();
        }

        if ($request->hasFile('profile_img')) {
            if ($user->profile_img) {
                Storage::disk('public')->delete('users/' . $user->profile_img);
            }
            $extension = $request->file('profile_img')->getClientOriginalExtension();
            $filename = 'User' . $user->idUser . '.' . $extension;
            $request->file('profile_img')->storeAs('users', $filename, 'public');
            $user->profile_img = $filename;
        }
        if (!$user->profile_img) {
            $user->profile = null;
        }

        $user->firstName = $request->firstName;
        $user->lastName = $request->lastName;
        $user->email = $request->email;
        $user->bio = $request->bio;
        if ($request->password) {
            $user->password = bcrypt($request->password);
        }
        $user->save();
        return redirect()->back()->with('success', 'Profile updated successfully!');
    }

    public function deleteImage()
    {
        $user = Auth::user();

        if ($user->profile_img) {
            Storage::disk('public')->delete('users/' . $user->profile_img);
            $user->profile_img = null;
            $user->save();
        }

        return back()->with('success', 'Profile image deleted successfully.');
    }
}