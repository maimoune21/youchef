<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class KitchensTableSeeder extends Seeder
{
    public function run(): void
    {
        $kitchens = ['Italy', 'USA', 'France', 'Russia', 'India', 'Spain', 'Global', 'Belgium'];

        foreach ($kitchens as $kitchen) {
            DB::table('kitchens')->insert([
                'name' => $kitchen,
            ]);
        }
    }
}
