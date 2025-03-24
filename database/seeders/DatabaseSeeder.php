<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            RolesSeeder::class,
            CategoriesSeeder::class,
            KitchensSeeder::class,
            UsersSeeder::class,
            MealsSeeder::class,
            CommentsSeeder::class,
        ]);
    }
}
