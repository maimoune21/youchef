<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class CommentsSeeder extends Seeder
{
    public function run(): void
    {
        $comments = [];
        $commentTemplates = [
            'good recipe',
            'Great recipe! I loved it',
            'This was amazing, will make again',
            'Perfect instructions, worked well',
            'My family enjoyed this meal',
            'Delicious and easy to make',
            'The flavors were incredible',
            'Added my own twist and it turned out great',
            'Followed exactly and it was perfect',
            'Will definitely be making this regularly',
            'The presentation was beautiful',
            'Tasted even better than expected',
            'Simple ingredients but fantastic result',
            'My new favorite dish!',
            'The cooking time was just right',
            'Made this for guests and they loved it',
            'Perfect balance of flavors',
            'The sauce was incredible',
            'Kids loved it too!',
            'Great for meal prep',
            'Added some extra spice and it was perfect',
            'The aroma while cooking was wonderful',
            'Restaurant-quality at home',
            'So comforting and delicious',
            'The texture was perfect',
            'Will bookmark this recipe',
            'Even better the next day',
            'The instructions were very clear',
            'Perfect for special occasions',
            'Healthy and tasty combination',
            'My go-to recipe now'
        ];

        for ($i = 0; $i < 100; $i++) {
            $comments[] = [
                'content' => $commentTemplates[array_rand($commentTemplates)],
                'idUser' => rand(1, 10),
                'idMeal' => rand(1, 30),
                'created_at' => now()->subDays(rand(0, 30)),
                'updated_at' => now(),
            ];
        }

        DB::table('comments')->insert($comments);
    }
}