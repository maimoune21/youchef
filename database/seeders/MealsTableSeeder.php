<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MealsTableSeeder extends Seeder
{
    public function run(): void
    {
        $kitchenIds = DB::table('kitchens')->pluck('idKitchen', 'name')->toArray();
        $meals = [
            [
                'title'        => 'Garlic Bread',
                'meal_img'     => 'garlic_bread.jpg',
                'duration'     => '00:07:30',
                'description'  => 'Crispy garlic bread with butter and herbs.',
                'ingredients'  => json_encode(["Bread", "Garlic", "Butter", "Parsley", "Salt"]),
                'instructions' => json_encode(["Spread garlic butter on bread", "Bake for 7 minutes"]),
                'status'       => 'published',
                'views'        => 220,
                'idCategory'   => 2,
                'idKitchen'    => $kitchenIds['Italy'],
                'created_at'   => now(),
                'updated_at'   => now(),
            ],
            [
                'title'        => 'Fruit Salad',
                'meal_img'     => 'fruit_salad.jpg',
                'duration'     => '00:05:20',
                'description'  => 'Fresh mixed fruit salad with honey dressing.',
                'ingredients'  => json_encode(["Apples", "Bananas", "Berries", "Honey", "Lemon Juice"]),
                'instructions' => json_encode(["Chop fruits", "Drizzle with honey and lemon", "Mix well"]),
                'status'       => 'published',
                'views'        => 180,
                'idCategory'   => 5,
                'idKitchen'    => $kitchenIds['USA'],
                'created_at'   => now(),
                'updated_at'   => now(),
            ],
            [
                'title'        => 'Scrambled Eggs',
                'meal_img'     => 'scrambled_eggs.jpg',
                'duration'     => '00:06:45',
                'description'  => 'Creamy and fluffy scrambled eggs.',
                'ingredients'  => json_encode(["Eggs", "Butter", "Salt", "Pepper"]),
                'instructions' => json_encode(["Whisk eggs", "Cook in butter on low heat", "Stir until creamy"]),
                'status'       => 'published',
                'views'        => 260,
                'idCategory'   => 4,
                'idKitchen'    => $kitchenIds['France'],
                'created_at'   => now(),
                'updated_at'   => now(),
            ],
            [
                'title'        => 'Butter Chicken',
                'meal_img'     => 'butter_chicken.jpg',
                'duration'     => '00:45:30',
                'description'  => 'Rich and creamy butter chicken with spices.',
                'ingredients'  => json_encode(["Chicken", "Tomato", "Butter", "Cream", "Spices"]),
                'instructions' => json_encode(["Cook chicken in spices", "Add tomato and butter", "Simmer with cream"]),
                'status'       => 'published',
                'views'        => 450,
                'idCategory'   => 6,
                'idKitchen'    => $kitchenIds['India'],
                'created_at'   => now(),
                'updated_at'   => now(),
            ],
            [
                'title'        => 'Seafood Paella',
                'meal_img'     => 'seafood_paella.jpg',
                'duration'     => '00:50:40',
                'description'  => 'Traditional Spanish seafood paella with saffron rice.',
                'ingredients'  => json_encode(["Rice", "Shrimp", "Mussels", "Peppers", "Saffron"]),
                'instructions' => json_encode(["Cook rice with saffron", "Add seafood and simmer"]),
                'status'       => 'published',
                'views'        => 380,
                'idCategory'   => 3,
                'idKitchen'    => $kitchenIds['Spain'],
                'created_at'   => now(),
                'updated_at'   => now(),
            ],
        ];

        foreach ($meals as $meal) {
            DB::table('meals')->insert($meal);
        }
    }
}
