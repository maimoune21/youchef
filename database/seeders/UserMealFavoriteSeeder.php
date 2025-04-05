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
        $favorites = [
            ['idUser' => 1, 'idMeal' => 1],
            ['idUser' => 1, 'idMeal' => 2],
            ['idUser' => 1, 'idMeal' => 3],
            ['idUser' => 2, 'idMeal' => 4],
            ['idUser' => 2, 'idMeal' => 5],
            ['idUser' => 2, 'idMeal' => 6],
            ['idUser' => 3, 'idMeal' => 7],
            ['idUser' => 3, 'idMeal' => 8],
            ['idUser' => 3, 'idMeal' => 9],
            ['idUser' => 4, 'idMeal' => 10],
            ['idUser' => 4, 'idMeal' => 11],
            ['idUser' => 4, 'idMeal' => 12],
            ['idUser' => 5, 'idMeal' => 13],
            ['idUser' => 5, 'idMeal' => 14],
            ['idUser' => 5, 'idMeal' => 15],
            ['idUser' => 6, 'idMeal' => 16],
            ['idUser' => 6, 'idMeal' => 17],
            ['idUser' => 6, 'idMeal' => 18],
            ['idUser' => 7, 'idMeal' => 19],
            ['idUser' => 7, 'idMeal' => 20],
            ['idUser' => 8, 'idMeal' => 1],
            ['idUser' => 8, 'idMeal' => 2],
            ['idUser' => 8, 'idMeal' => 3],
            ['idUser' => 9, 'idMeal' => 4],
            ['idUser' => 9, 'idMeal' => 5],
            ['idUser' => 9, 'idMeal' => 6],
        ];

        // Insert predefined favorite meals
        DB::table('user_meal_favorites')->insert($favorites);
    }
}
