<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class KitchensSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $kitchens = [
            [
                'name' => 'Morocco',
                'picture' => 'morroco.png',
                'created_at'   => now(),
                'updated_at'   => now(),
            ],
            [
                'name' => 'Japan',
                'picture' => 'japan.png',
                'created_at'   => now(),
                'updated_at'   => now(),
            ],
            [
                'name' => 'Italy',
                'picture' => 'italie.png',
                'created_at'   => now(),
                'updated_at'   => now(),
            ],
            [
                'name' => 'Usa',
                'picture' => 'usa.png',
                'created_at'   => now(),
                'updated_at'   => now(),
            ],
            [
                'name' => 'France',
                'picture' => 'france.png',
                'created_at'   => now(),
                'updated_at'   => now(),
            ],
            [
                'name' => 'India',
                'picture' => 'india.png',
                'created_at'   => now(),
                'updated_at'   => now(),
            ],
            [
                'name' => 'Mexico',
                'picture' => 'mexico.png',
                'created_at'   => now(),
                'updated_at'   => now(),
            ]
        ];

        DB::table('kitchens')->insert($kitchens);
    }
}
