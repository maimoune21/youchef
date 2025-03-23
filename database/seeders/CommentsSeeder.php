<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class CommentsSeeder extends Seeder
{
    public function run(): void
    {
        $comments = [
            [
                'content' => 'nice recipe',
                'idUser' => 2,
                'idMeal' => 1,
                'created_at'   => now(),
                'updated_at'   => now(),
            ],
            [
                'content' => 'good joob',
                'idUser' => 1,
                'idMeal' => 1,
                'created_at'   => now(),
                'updated_at'   => now(),
            ],
            [
                'content' => 'hello',
                'idUser' => 4,
                'idMeal' => 2,
                'created_at'   => now(),
                'updated_at'   => now(),
            ]
        ];
        
        DB::table('comments')->insert($comments);
    }
}
