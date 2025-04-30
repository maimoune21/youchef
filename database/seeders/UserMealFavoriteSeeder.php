<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserMealFavoriteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $favorites = [];
        $totalFavorites = 100;
        $userCount = 10;
        $mealCount = 30;
        for ($userId = 1; $userId <= $userCount; $userId++) {
            $mealsForUser = [];
            $favoritesPerUser = rand(3, 5);
            while (count($mealsForUser) < $favoritesPerUser) {
                $mealId = rand(1, $mealCount);
                if (!in_array($mealId, $mealsForUser)) {
                    $mealsForUser[] = $mealId;
                    $favorites[] = [
                        'idUser' => $userId,
                        'idMeal' => $mealId,
                    ];
                }
            }
        }

        while (count($favorites) < $totalFavorites) {
            $userId = rand(1, $userCount);
            $mealId = rand(1, $mealCount);

            $exists = false;
            foreach ($favorites as $fav) {
                if ($fav['idUser'] == $userId && $fav['idMeal'] == $mealId) {
                    $exists = true;
                    break;
                }
            }
            if (!$exists) {
                $favorites[] = [
                    'idUser' => $userId,
                    'idMeal' => $mealId,
                ];
            }
        }

        DB::table('user_meal_favorites')->insert($favorites);
    }
}
