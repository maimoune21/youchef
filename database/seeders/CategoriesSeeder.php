<?php

namespace Database\Seeders;

use DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategoriesSeeder extends Seeder
{
    public function run(): void
    {
      $categories = [
        'Salad',
        'Cake',
        'Soup',
        'Drinks',
        'Pasta',
        'Snacks',
        'Desserts',
      ];
      foreach($categories as $cat)
      DB::table('categories')->insert([
        'nom' => $cat,
        'created_at' => now(),
        'updated_at' => now(),
    ]);
    }
}
