<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MealsSeeder extends Seeder
{
    public function run(): void
    {
        $kitchenIds = DB::table('kitchens')->pluck('idKitchen', 'name')->toArray();
        $categoryIds = DB::table('categories')->pluck('idCategory', 'name')->toArray();
        $meals = [
            // Morocco
            [
                'title'        => 'Tagine Chicken',
                'meal_img'     => 'meal1.png',
                'duration'     => '0:02:00',
                'description'  => 'A traditional Moroccan chicken tagine with olives and preserved lemons.',
                'ingredients'  => json_encode(["Chicken", "Olives", "Preserved Lemons", "Onions", "Garlic", "Spices"]),
                'instructions' => json_encode(["Brown the chicken", "Add onions, garlic, and spices", "Cook with olives and preserved lemons in a tagine"]),
                'views'        => 320,
                'likes'        => 2,
                'idCategory'   => $categoryIds['All'],
                'idKitchen'    => $kitchenIds['Morocco'],
                'created_at'   => now(),
                'updated_at'   => now(),
            ],

            // Japan
            [
                'title'        => 'Sushi',
                'meal_img'     => '',
                'duration'     => '01:00:00',
                'description'  => 'A traditional Japanese dish with vinegared rice and various toppings.',
                'ingredients'  => json_encode(["Sushi Rice", "Fish", "Seaweed", "Vinegar", "Sugar", "Salt"]),
                'instructions' => json_encode(["Prepare sushi rice", "Slice fish", "Assemble sushi with rice and toppings"]),
                'views'        => 400,
                'likes'        => 30,
                'idCategory'   => $categoryIds['Salad'],
                'idKitchen'    => $kitchenIds['Japan'],
                'created_at'   => now(),
                'updated_at'   => now(),
            ],

            // Italy
            [
                'title'        => 'Spaghetti Carbonara',
                'meal_img'     => '',
                'duration'     => '00:30:00',
                'description'  => 'Classic Italian pasta dish with eggs, cheese, pancetta, and pepper.',
                'ingredients'  => json_encode(["Spaghetti", "Eggs", "Pancetta", "Parmesan", "Black Pepper"]),
                'instructions' => json_encode(["Cook spaghetti", "Fry pancetta", "Mix with eggs and cheese"]),
                'views'        => 380,
                'likes'        => 2,
                'idCategory'   => $categoryIds['Pasta'],
                'idKitchen'    => $kitchenIds['Italie'],
                'created_at'   => now(),
                'updated_at'   => now(),
            ],

            // USA
            [
                'title'        => 'Hamburger',
                'meal_img'     => '',
                'duration'     => '00:30:00',
                'description'  => 'A classic American hamburger with a juicy beef patty and toppings.',
                'ingredients'  => json_encode(["Beef Patty", "Bun", "Lettuce", "Tomato", "Cheese", "Pickles", "Ketchup"]),
                'instructions' => json_encode(["Grill the beef patty", "Toast the bun", "Assemble with toppings"]),
                'views'        => 300,
                'likes'        => 2,
                'idCategory'   => $categoryIds['Snaks'],
                'idKitchen'    => $kitchenIds['Usa'],
                'created_at'   => now(),
                'updated_at'   => now(),
            ],

            // France
            [
                'title'        => 'Coq au Vin',
                'meal_img'     => '',
                'duration'     => '02:00:00',
                'description'  => 'A traditional French dish of chicken braised with wine, mushrooms, and bacon.',
                'ingredients'  => json_encode(["Chicken", "Red Wine", "Mushrooms", "Bacon", "Onions", "Garlic"]),
                'instructions' => json_encode(["Brown the chicken", "Cook with wine, mushrooms, and bacon", "Simmer until tender"]),
                'views'        => 250,
                'likes'        => 2,
                'idCategory'   => $categoryIds['Desserts'],
                'idKitchen'    => $kitchenIds['France'],
                'created_at'   => now(),
                'updated_at'   => now(),
            ],

            // India
            [
                'title'        => 'Butter Chicken',
                'meal_img'     => '',
                'duration'     => '00:15:00',
                'description'  => 'A rich and creamy Indian curry made with chicken, tomatoes, and spices.',
                'ingredients'  => json_encode(["Chicken", "Tomatoes", "Cream", "Butter", "Spices"]),
                'instructions' => json_encode(["Marinate chicken", "Cook with tomatoes and spices", "Add cream and butter"]),
                'views'        => 280,
                'likes'        => 2,
                'idCategory'   => $categoryIds['Soup'],
                'idKitchen'    => $kitchenIds['India'],
                'created_at'   => now(),
                'updated_at'   => now(),
            ],

            // Mexico
            [
                'title'        => 'Tacos al Pastor',
                'meal_img'     => '',
                'duration'     => '01:00:00',
                'description'  => 'Mexican tacos made with marinated pork, pineapple, and spices.',
                'ingredients'  => json_encode(["Pork", "Pineapple", "Tortillas", "Onions", "Cilantro", "Spices"]),
                'instructions' => json_encode(["Marinate pork", "Grill with pineapple", "Serve on tortillas with onions and cilantro"]),
                'views'        => 270,
                'likes'        => 2,
                'idCategory'   => $categoryIds['Cake'],
                'idKitchen'    => $kitchenIds['Mexico'],
                'created_at'   => now(),
                'updated_at'   => now(),
            ],
        ];

        DB::table('meals')->insert($meals);
    }
}