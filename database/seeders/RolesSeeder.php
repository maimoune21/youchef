<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Insert the 'admin' role
        Role::create([
            'name' => 'admin',
        ]);
        // Insert the 'user' role
        Role::create([
            'name' => 'user',
        ]);

    }
}
