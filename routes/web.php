<?php

use App\Http\Controllers\TestController;
use Illuminate\Support\Facades\Route;

Route::get("/", function(){
    return  inertia("general/Home");
});

Route::get("/meals", function(){
    return  inertia("meals/Meals");
});

Route::get("/postMeal", function(){
    return  inertia("meals/postMeal");
});

Route::get("/favorites", function(){
    return  inertia("meals/Favorites");
});

Route::get("/profile/{status}", function($status){
    return  inertia("profile/PrivateProfile",["status"=>$status]);
});

Route::get("/profile/{status}", function($status){
    return  inertia("profile/PrivateProfile", compact('status'));
});