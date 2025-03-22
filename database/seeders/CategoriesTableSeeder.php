<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            ['nom' => 'All'],
            ['nom' => 'Salad'],
            ['nom' => 'Cake'],
            ['nom' => 'Soup'],
            ['nom' => 'Drinks'],
            ['nom' => 'Pasta'],
            ['nom' => 'Snaks'],
            ['nom' => 'Desserts'],
        ];
        DB::table('categories')->insert($categories);
    }
}
