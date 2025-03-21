<?php

use Illuminate\Support\Facades\Route;


Route::inertia("/","general/Home");

Route::inertia("/meals","meals/Meals");

Route::get("/postMeal", function(){
    return  inertia("meals/postMeal");
});

Route::get("/favorites", function(){
    return  inertia("meals/Favorites");
});

Route::get("/profile/{status}", function($status){
    return  inertia("profile/PrivateProfile",compact("status"));
});

Route::get("/dashboard/{location}", function($location){
    return inertia("admin/Dashboard",compact("location"));
});
