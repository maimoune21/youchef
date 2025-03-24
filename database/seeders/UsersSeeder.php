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
                'idRole' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'firstName' => 'Imrane',
                'lastName' => 'Mejouate',
                'email' => 'mejouate.imrane@gmail.com',
                'password' => Hash::make('Imr123'),
                'profile_img' => 'Imr.png',
                'bio' => 'This is a sample bio for Imrane Mejouate.',
                'idRole' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'firstName' => 'Fatima',
                'lastName' => 'El Amrani',
                'email' => 'fatima.elamrani@gmail.com',
                'password' => Hash::make('password123'),
                'profile_img' => '',
                'bio' => 'This is a sample bio for Fatima El Amrani.',
                'idRole' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'firstName' => 'Youssef',
                'lastName' => 'Benali',
                'email' => 'youssef.benali@gmail.com',
                'password' => Hash::make('password123'),
                'profile_img' => '',
                'bio' => 'This is a sample bio for Youssef Benali.',
                'idRole' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'firstName' => 'Amina',
                'lastName' => 'Zouhair',
                'email' => 'amina.zouhair@gmail.com',
                'password' => Hash::make('password123'),
                'profile_img' => '',
                'bio' => 'This is a sample bio for Amina Zouhair.',
                'idRole' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'firstName' => 'Karim',
                'lastName' => 'Chraibi',
                'email' => 'karim.chraibi@gmail.com',
                'password' => Hash::make('password123'),
                'profile_img' => '',
                'bio' => 'This is a sample bio for Karim Chraibi.',
                'idRole' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'firstName' => 'Leila',
                'lastName' => 'Mourad',
                'email' => 'leila.mourad@gmail.com',
                'password' => Hash::make('password123'),
                'profile_img' => '',
                'bio' => 'This is a sample bio for Leila Mourad.',
                'idRole' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'firstName' => 'Hassan',
                'lastName' => 'El Fassi',
                'email' => 'hassan.elfassi@gmail.com',
                'password' => Hash::make('password123'),
                'profile_img' => '',
                'bio' => 'This is a sample bio for Hassan El Fassi.',
                'idRole' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}