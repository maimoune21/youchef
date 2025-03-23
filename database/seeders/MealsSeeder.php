<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MealsTableSeeder extends Seeder
{
    public function run(): void
    {
        $kitchenIds = DB::table('kitchens')->pluck('idKitchen', 'name')->toArray();
        $categoryIds = DB::table('categories')->pluck('idCategory', 'name')->toArray();
        $meals = [
            // Morocco
            [
                'title'        => 'Tagine Chicken',
                'meal_img'     => 'tagine_chicken.jpg',
                'duration'     => '01:30:00',
                'description'  => 'A traditional Moroccan chicken tagine with olives and preserved lemons.',
                'ingredients'  => json_encode(["Chicken", "Olives", "Preserved Lemons", "Onions", "Garlic", "Spices"]),
                'instructions' => json_encode(["Brown the chicken", "Add onions, garlic, and spices", "Cook with olives and preserved lemons in a tagine"]),
                'views'        => 320,
                'idCategory'   => $categoryIds['All'],
                'idKitchen'    => $kitchenIds['Morocco'],
                'created_at'   => now(),
                'updated_at'   => now(),
            ],

            // Japan
            [
                'title'        => 'Sushi',
                'meal_img'     => 'sushi.jpg',
                'duration'     => '01:00:00',
                'description'  => 'A traditional Japanese dish with vinegared rice and various toppings.',
                'ingredients'  => json_encode(["Sushi Rice", "Fish", "Seaweed", "Vinegar", "Sugar", "Salt"]),
                'instructions' => json_encode(["Prepare sushi rice", "Slice fish", "Assemble sushi with rice and toppings"]),
                'views'        => 400,
                'idCategory'   => $categoryIds['Salad'],
                'idKitchen'    => $kitchenIds['Japan'],
                'created_at'   => now(),
                'updated_at'   => now(),
            ],

            // Italy
            [
                'title'        => 'Spaghetti Carbonara',
                'meal_img'     => 'spaghetti_carbonara.jpg',
                'duration'     => '00:30:00',
                'description'  => 'Classic Italian pasta dish with eggs, cheese, pancetta, and pepper.',
                'ingredients'  => json_encode(["Spaghetti", "Eggs", "Pancetta", "Parmesan", "Black Pepper"]),
                'instructions' => json_encode(["Cook spaghetti", "Fry pancetta", "Mix with eggs and cheese"]),
                'views'        => 380,
                'idCategory'   => $categoryIds['Italie'],
                'idKitchen'    => $kitchenIds['Pasta'],
                'created_at'   => now(),
                'updated_at'   => now(),
            ],

            // USA
            [
                'title'        => 'Hamburger',
                'meal_img'     => 'hamburger.jpg',
                'duration'     => '00:30:00',
                'description'  => 'A classic American hamburger with a juicy beef patty and toppings.',
                'ingredients'  => json_encode(["Beef Patty", "Bun", "Lettuce", "Tomato", "Cheese", "Pickles", "Ketchup"]),
                'instructions' => json_encode(["Grill the beef patty", "Toast the bun", "Assemble with toppings"]),
                'views'        => 300,
                'idCategory'   => $categoryIds['Usa'],
                'idKitchen'    => $kitchenIds['Snaks'],
                'created_at'   => now(),
                'updated_at'   => now(),
            ],

            // France
            [
                'title'        => 'Coq au Vin',
                'meal_img'     => 'coq_au_vin.jpg',
                'duration'     => '02:00:00',
                'description'  => 'A traditional French dish of chicken braised with wine, mushrooms, and bacon.',
                'ingredients'  => json_encode(["Chicken", "Red Wine", "Mushrooms", "Bacon", "Onions", "Garlic"]),
                'instructions' => json_encode(["Brown the chicken", "Cook with wine, mushrooms, and bacon", "Simmer until tender"]),
                'views'        => 250,
                'idCategory'   => $categoryIds['France'],
                'idKitchen'    => $kitchenIds['Desserts'],
                'created_at'   => now(),
                'updated_at'   => now(),
            ],

            // India
            [
                'title'        => 'Butter Chicken',
                'meal_img'     => 'butter_chicken.jpg',
                'duration'     => '01:30:00',
                'description'  => 'A rich and creamy Indian curry made with chicken, tomatoes, and spices.',
                'ingredients'  => json_encode(["Chicken", "Tomatoes", "Cream", "Butter", "Spices"]),
                'instructions' => json_encode(["Marinate chicken", "Cook with tomatoes and spices", "Add cream and butter"]),
                'views'        => 280,
                'idCategory'   => $categoryIds['India'],
                'idKitchen'    => $kitchenIds['Soup'],
                'created_at'   => now(),
                'updated_at'   => now(),
            ],

            // Mexico
            [
                'title'        => 'Tacos al Pastor',
                'meal_img'     => 'tacos_al_pastor.jpg',
                'duration'     => '01:00:00',
                'description'  => 'Mexican tacos made with marinated pork, pineapple, and spices.',
                'ingredients'  => json_encode(["Pork", "Pineapple", "Tortillas", "Onions", "Cilantro", "Spices"]),
                'instructions' => json_encode(["Marinate pork", "Grill with pineapple", "Serve on tortillas with onions and cilantro"]),
                'views'        => 270,
                'idCategory'   => $categoryIds['Mexico'],
                'idKitchen'    => $kitchenIds['Cake'],
                'created_at'   => now(),
                'updated_at'   => now(),
            ],
        ];

        DB::table('meals')->insert($meals);
    }
}