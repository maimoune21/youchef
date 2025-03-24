<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\MealController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Meals :
Route::get("/meals", [MealController::class, "index"]);
Route::get("/mealDetails/{id}", [MealController::class, "show"]);
Route::get("/publicProfile/{id}", [ProfileController::class, "show"]);

// Categories
Route::get('/categories', [CategoryController::class, 'index']);

// Open Pages :
Route::get("/", [HomeController::class,"index"]);
Route::inertia("/aboutUs", "general/AboutUs");
Route::inertia("/FAQS", "general/FAQS");
Route::inertia("/privacy", "general/Privacy");
Route::inertia("/termsOfService", "general/TermsOfService");

// Guest Pages :
Route::middleware('guest')->group(function () {
    // Register :
    Route::inertia('/register', 'auth/Register')->name('register');
    Route::post('/register', [AuthController::class, "register"])->name('register.post');
    // Login :
    Route::inertia('/login', 'auth/Login')->name('login');
    Route::post('/login', [AuthController::class, 'login'])->name('login.post');
});

// User Pages :
Route::middleware('auth')->group(function () {
    Route::post('/meals/{id}/like', [MealController::class, 'like']);
    Route::post('/meals/{id}/dislike', [MealController::class, 'dislike']);
    Route::post('/meals/{id}/comment', [MealController::class, 'addComment']);
    Route::inertia('/postMeal', 'meals/postMeal');
    Route::inertia('/favorites', 'meals/Favorites');
    Route::get("/profile/{status}", function ($status) {
        return  inertia("profile/PrivateProfile", compact("status"));
    });
    // Private Profile
    Route::inertia('/privateProfile', 'profile/PrivateProfile');
    // Logout :
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
});

// Admin Pages :
Route::middleware(['auth', 'admin'])->group(function () {
    Route::inertia('/admin/dashboard', 'admin/Dashboard');
});

// NotFound Page :
Route::fallback(function () {
    return Inertia::render('general/NotFound')->toResponse(request())->setStatusCode(404);
});
