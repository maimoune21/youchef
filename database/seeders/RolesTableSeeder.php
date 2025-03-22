<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Insert the 'admin' role
        Role::create([
            'nom' => 'admin',
        ]);
        // Insert the 'user' role
        Role::create([
            'nom' => 'user',
        ]);

    }
}
