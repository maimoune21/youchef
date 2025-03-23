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
            ],
            [
                'name' => 'Japan',
                'picture' => 'japan.png',
            ],
            [
                'name' => 'Italie',
                'picture' => 'italie.png',
            ],
            [
                'name' => 'Usa',
                'picture' => 'usa.png',
            ],
            [
                'name' => 'France',
                'picture' => 'france.png',
            ],
            [
                'name' => 'India',
                'picture' => 'india.png',
            ],
            [
                'name' => 'Mexico',
                'picture' => 'mexico.png',
            ]
        ];

        DB::table('kitches')->insert($kitchens);
    }
}
