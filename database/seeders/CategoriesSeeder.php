<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            [
                'name' => 'All',
                'picture' => 'all.png',
            ],
            [
                'name' => 'Salad',
                'picture' => 'salad.png',
            ],
            [
                'name' => 'Cake',
                'picture' => 'cake.png',
            ],
            [
                'name' => 'Soup',
                'picture' => 'soup.png',
            ],
            [
                'name' => 'Drinks',
                'picture' => 'drinks.png',
            ],
            [
                'name' => 'Pasta',
                'picture' => 'pasta.png',
            ],
            [
                'name' => 'Snaks',
                'picture' => 'snaks.png',
            ],
            [
                'name' => 'Desserts',
                'picture' => 'desserts.png',
            ],
        ];
        
        DB::table('categories')->insert($categories);
    }
}
