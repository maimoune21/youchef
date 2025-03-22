<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\MealController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {
    // Guest Pages
    Route::inertia("/", "general/Home");
    Route::inertia("/aboutUs", "general/AboutUs");
    Route::inertia("/popularMeals", "general/PopularMeals");
    Route::inertia("/FAQS", "general/FAQS");
    Route::inertia("/privacy", "general/Privacy");
    Route::inertia("/termsOfService", "general/TermsOfService");
    Route::get("/meals",[MealController::class,"index"]);

    // Register :
    Route::inertia('/register', 'auth/Register');
    Route::post('/register', [AuthController::class, "register"]);
    // Login :
    Route::inertia('/login', 'auth/Login');
    Route::post('/login', [AuthController::class, 'login']);
});

Route::middleware('auth')->group(function(){
    Route::inertia('/postMeal', 'meals/postMeal');
    Route::inertia('/favorites', 'meals/Favorites');
    Route::get("/profile/{status}", function ($status) {
        return  inertia("profile/PrivateProfile", compact("status"));
    });
    Route::get("/dashboard/{location}", function ($location) {
        return inertia("admin/Dashboard", compact("location"));
    });
});
