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
        $mealTypes = [
            'Salad' => [
                'countries' => ['Morocco'],
                'ingredients' => ['Lettuce', 'Tomato', 'Cucumber', 'Olives']
            ],
            'Drinks' => [
                'countries' => ['Japan', 'India'],
                'ingredients' => ['Fruits', 'Yogurt', 'Ice', 'Tea Leaves']
            ],
            'Pasta' => [
                'countries' => ['Italy'],
                'ingredients' => ['Pasta', 'Cheese', 'Tomato Sauce', 'Basil']
            ],
            'Soup' => [
                'countries' => ['Japan', 'Mexico'],
                'ingredients' => ['Broth', 'Vegetables', 'Chili', 'Beans']
            ],
            'Snacks' => [
                'countries' => ['Usa', 'Mexico'],
                'ingredients' => ['Potato', 'Cheese', 'Tortilla', 'Avocado']
            ],
            'Desserts' => [
                'countries' => ['France', 'Italy'],
                'ingredients' => ['Sugar', 'Flour', 'Eggs', 'Chocolate']
            ],
            'Cake' => [
                'countries' => ['Usa', 'France'],
                'ingredients' => ['Flour', 'Sugar', 'Butter', 'Vanilla']
            ]
        ];

        $meals = [];
        $usedDurations = [];

        for ($i = 0; $i < 20; $i++) {
            $category = array_rand($mealTypes);
            $country = $mealTypes[$category]['countries'][array_rand($mealTypes[$category]['countries'])];

            do {
                $minutes = rand(1, 180);
                $duration = sprintf("%02d:%02d:00", floor($minutes / 60), $minutes % 60);
            } while (in_array($duration, $usedDurations));

            $usedDurations[] = $duration;

            $meals[] = [
                'title' => ucfirst(fake()->words(rand(1, 3), true)),
                'meal_img' => '',
                'duration' => $duration,
                'description' => fake()->sentence(),
                'ingredients' => json_encode(array_merge(
                    $mealTypes[$category]['ingredients'],
                    fake()->randomElements(['Salt', 'Pepper', 'Oil', 'Herbs'], rand(1, 3))
                )),
                'instructions' => json_encode(array_map(fn($s) => ucfirst($s), fake()->sentences(rand(3, 5)))),
                'views' => rand(50, 1000),
                'likes' => rand(0, 100),
                'idCategory' => $categoryIds[$category],
                'idKitchen' => $kitchenIds[$country],
                'idUser' => rand(1, 9),
                'created_at' => now()->subDays(rand(0, 365)),
                'updated_at' => now(),
            ];
        }

        DB::table('meals')->insert($meals);
    }
}