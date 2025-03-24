<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class CategoriesSeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            [
                'name' => 'Salad',
                'picture' => 'salad.png',
                'created_at'   => now(),
                'updated_at'   => now(),
            ],
            [
                'name' => 'Cake',
                'picture' => 'cake.png',
                'created_at'   => now(),
                'updated_at'   => now(),
            ],
            [
                'name' => 'Soup',
                'picture' => 'soup.png',
                'created_at'   => now(),
                'updated_at'   => now(),
            ],
            [
                'name' => 'Drinks',
                'picture' => 'drinks.png',
                'created_at'   => now(),
                'updated_at'   => now(),
            ],
            [
                'name' => 'Pasta',
                'picture' => 'pasta.png',
                'created_at'   => now(),
                'updated_at'   => now(),
            ],
            [
                'name' => 'Snacks',
                'picture' => 'snacks.png',
                'created_at'   => now(),
                'updated_at'   => now(),
            ],
            [
                'name' => 'Desserts',
                'picture' => 'desserts.png',
                'created_at'   => now(),
                'updated_at'   => now(),
            ],
        ];
        
        DB::table('categories')->insert($categories);
    }
}
