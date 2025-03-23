<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Seeder;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            [
                'firstName' => 'John',
                'lastName' => 'Doe',
                'email' => 'admin@gmail.com',
                'password' => Hash::make('admin123'),
                'profile_img' => 'admin.png',
                'bio' => 'This is a sample bio for John Doe.',
                'idMeal' => null,
                'idRole' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'firstName' => 'Mohamed',
                'lastName' => 'Maimoune',
                'email' => 'mohamadmaimoune1@gmail.com',
                'password' => Hash::make('123456'),
                'profile_img' => 'user1.png',
                'bio' => 'This is a sample bio for Mohamed Maimoune.',
                'idMeal' => null,
                'idRole' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
