<?php

use Illuminate\Support\Facades\Route;


Route::inertia("/", "general/Home");
Route::inertia("/aboutUs", "general/AboutUs");
Route::inertia("/popularMeals", "general/PopularMeals");
Route::inertia("/FAQS", "general/FAQS");
Route::inertia("/privacy", "general/Privacy");
Route::inertia("/termsOfService", "general/TermsOfService");
Route::inertia("/meals", "meals/Meals");
Route::inertia('/postMeal', 'meals/postMeal');
Route::inertia('/favorites', 'meals/Favorites');
Route::get("/profile/{status}", function ($status) {
    return  inertia("profile/PrivateProfile", compact("status"));
});
Route::get("/dashboard/{location}", function ($location) {
    return inertia("admin/Dashboard", compact("location"));
});
