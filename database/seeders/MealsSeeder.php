<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MealsSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('meals')->insert([
            [
                'title'        => 'Garlic Bread',
                'meal_img'     => 'garlic_bread.jpg',
                'duration'     => '00:07:30',
                'country'      => 'Italy',
                'description'  => 'Crispy garlic bread with butter and herbs.',
                'ingredients'  => json_encode(["Bread", "Garlic", "Butter", "Parsley", "Salt"]),
                'instructions' => json_encode(["Spread garlic butter on bread", "Bake for 7 minutes"]),
                'status'       => 'published',
                'views'        => 220,
                'idCategory'   => 2,
                'created_at'   => now(),
                'updated_at'   => now(),
            ],
            [
                'title'        => 'Fruit Salad',
                'meal_img'     => 'fruit_salad.jpg',
                'duration'     => '00:05:20',
                'country'      => 'USA',
                'description'  => 'Fresh mixed fruit salad with honey dressing.',
                'ingredients'  => json_encode(["Apples", "Bananas", "Berries", "Honey", "Lemon Juice"]),
                'instructions' => json_encode(["Chop fruits", "Drizzle with honey and lemon", "Mix well"]),
                'status'       => 'published',
                'views'        => 180,
                'idCategory'   => 5,
                'created_at'   => now(),
                'updated_at'   => now(),
            ],
            [
                'title'        => 'Grilled Cheese',
                'meal_img'     => 'grilled_cheese.jpg',
                'duration'     => '00:08:15',
                'country'      => 'USA',
                'description'  => 'Golden crispy grilled cheese sandwich.',
                'ingredients'  => json_encode(["Bread", "Cheese", "Butter"]),
                'instructions' => json_encode(["Butter bread", "Grill with cheese inside", "Flip until golden brown"]),
                'status'       => 'published',
                'views'        => 300,
                'idCategory'   => 3,
                'created_at'   => now(),
                'updated_at'   => now(),
            ],
            [
                'title'        => 'Scrambled Eggs',
                'meal_img'     => 'scrambled_eggs.jpg',
                'duration'     => '00:06:45',
                'country'      => 'France',
                'description'  => 'Creamy and fluffy scrambled eggs.',
                'ingredients'  => json_encode(["Eggs", "Butter", "Salt", "Pepper"]),
                'instructions' => json_encode(["Whisk eggs", "Cook in butter on low heat", "Stir until creamy"]),
                'status'       => 'published',
                'views'        => 260,
                'idCategory'   => 4,
                'created_at'   => now(),
                'updated_at'   => now(),
            ],
            [
                'title'        => 'Espresso',
                'meal_img'     => 'espresso.jpg',
                'duration'     => '00:02:30',
                'country'      => 'Italy',
                'description'  => 'Strong and rich espresso shot.',
                'ingredients'  => json_encode(["Coffee Beans", "Water"]),
                'instructions' => json_encode(["Grind beans", "Brew under pressure", "Serve immediately"]),
                'status'       => 'published',
                'views'        => 400,
                'idCategory'   => 1,
                'created_at'   => now(),
                'updated_at'   => now(),
            ],
            [
              'title'        => 'Beef Stroganoff',
              'meal_img'     => 'tajine.jpg',
              'duration'     => '00:32:10',
              'country'      => 'Russia',
              'description'  => 'Classic beef stroganoff with creamy mushroom sauce.',
              'ingredients'  => json_encode(["Beef", "Mushrooms", "Onion", "Sour Cream", "Garlic"]),
              'instructions' => json_encode(["Sauté beef and onions", "Add mushrooms and sour cream", "Simmer and serve"]),
              'status'       => 'published',
              'views'        => 300,
              'idCategory'   => 4,
              'created_at'   => now(),
              'updated_at'   => now(),
          ],
          [
              'title'        => 'Butter Chicken',
              'meal_img'     => 'tajine.jpg',
              'duration'     => '00:45:30',
              'country'      => 'India',
              'description'  => 'Rich and creamy butter chicken with spices.',
              'ingredients'  => json_encode(["Chicken", "Tomato", "Butter", "Cream", "Spices"]),
              'instructions' => json_encode(["Cook chicken in spices", "Add tomato and butter", "Simmer with cream"]),
              'status'       => 'published',
              'views'        => 450,
              'idCategory'   => 6,
              'created_at'   => now(),
              'updated_at'   => now(),
          ],
          [
              'title'        => 'Vegetable Curry',
              'meal_img'     => 'tajine.jpg',
              'duration'     => '00:27:15',
              'country'      => 'India',
              'description'  => 'Aromatic vegetable curry with coconut milk.',
              'ingredients'  => json_encode(["Carrots", "Potatoes", "Peppers", "Coconut Milk", "Spices"]),
              'instructions' => json_encode(["Sauté vegetables", "Add spices and coconut milk", "Simmer until tender"]),
              'status'       => 'published',
              'views'        => 280,
              'idCategory'   => 5,
              'created_at'   => now(),
              'updated_at'   => now(),
          ],
          [
              'title'        => 'Seafood Paella',
              'meal_img'     => 'tajine.jpg',
              'duration'     => '00:50:40',
              'country'      => 'Spain',
              'description'  => 'Traditional Spanish seafood paella with saffron rice.',
              'ingredients'  => json_encode(["Rice", "Shrimp", "Mussels", "Peppers", "Saffron"]),
              'instructions' => json_encode(["Cook rice with saffron", "Add seafood and simmer"]),
              'status'       => 'published',
              'views'        => 380,
              'idCategory'   => 3,
              'created_at'   => now(),
              'updated_at'   => now(),
          ],
          [
              'title'        => 'Roast Chicken',
              'meal_img'     => 'tajine.jpg',
              'duration'     => '01:10:25',
              'country'      => 'France',
              'description'  => 'Tender roast chicken with herbs and garlic.',
              'ingredients'  => json_encode(["Chicken", "Garlic", "Rosemary", "Butter", "Salt"]),
              'instructions' => json_encode(["Season chicken", "Roast at 180°C for 1 hour", "Baste with butter"]),
              'status'       => 'published',
              'views'        => 500,
              'idCategory'   => 4,
              'created_at'   => now(),
              'updated_at'   => now(),
          ],
          [
              'title'        => 'Avocado Toast',
              'meal_img'     => 'tajine.jpg',
              'duration'     => '00:14:10',
              'country'      => 'USA',
              'description'  => 'Simple and delicious avocado toast.',
              'ingredients'  => json_encode(["Bread", "Avocado", "Salt", "Pepper", "Lemon Juice"]),
              'instructions' => json_encode(["Toast bread", "Mash avocado", "Spread on toast and season"]),
              'status'       => 'published',
              'views'        => 80,
              'idCategory'   => 2,
              'created_at'   => now(),
              'updated_at'   => now(),
          ],
          [
              'title'        => 'Fruit Smoothie',
              'meal_img'     => 'tajine.jpg',
              'duration'     => '00:15:30',
              'country'      => 'Global',
              'description'  => 'Refreshing fruit smoothie.',
              'ingredients'  => json_encode(["Banana", "Strawberries", "Milk", "Honey", "Ice Cubes"]),
              'instructions' => json_encode(["Blend all ingredients until smooth"]),
              'status'       => 'published',
              'views'        => 90,
              'idCategory'   => 5,
              'created_at'   => now(),
              'updated_at'   => now(),
          ],
          [
              'title'        => 'Garlic Bread',
              'meal_img'     => 'tajine.jpg',
              'duration'     => '00:13:45',
              'country'      => 'Italy',
              'description'  => 'Crispy garlic bread with butter and herbs.',
              'ingredients'  => json_encode(["Bread", "Garlic", "Butter", "Parsley", "Salt"]),
              'instructions' => json_encode(["Spread butter and garlic on bread", "Bake until crispy"]),
              'status'       => 'published',
              'views'        => 110,
              'idCategory'   => 6,
              'created_at'   => now(),
              'updated_at'   => now(),
          ],
          [
              'title'        => 'Chocolate Milkshake',
              'meal_img'     => 'tajine.jpg',
              'duration'     => '00:11:20',
              'country'      => 'USA',
              'description'  => 'Thick and creamy chocolate milkshake.',
              'ingredients'  => json_encode(["Milk", "Cocoa", "Sugar", "Ice Cream"]),
              'instructions' => json_encode(["Blend all ingredients", "Serve chilled"]),
              'status'       => 'published',
              'views'        => 150,
              'idCategory'   => 5,
              'created_at'   => now(),
              'updated_at'   => now(),
          ],
          [
              'title'        => 'French Fries',
              'meal_img'     => 'tajine.jpg',
              'duration'     => '00:19:30',
              'country'      => 'Belgium',
              'description'  => 'Crispy golden French fries.',
              'ingredients'  => json_encode(["Potatoes", "Oil", "Salt"]),
              'instructions' => json_encode(["Slice potatoes", "Fry until golden and crispy"]),
              'status'       => 'published',
              'views'        => 400,
              'idCategory'   => 7,
              'created_at'   => now(),
              'updated_at'   => now(),
          ],
          [
              'title'        => 'Lasagna',
              'meal_img'     => 'tajine.jpg',
              'duration'     => '00:45:15',
              'country'      => 'Italy',
              'description'  => 'Classic Italian layered pasta dish.',
              'ingredients'  => json_encode(["Lasagna Sheets", "Tomato Sauce", "Cheese", "Ground Beef", "Herbs"]),
              'instructions' => json_encode(["Layer ingredients", "Bake at 180°C for 40 minutes"]),
              'status'       => 'published',
              'views'        => 500,
              'idCategory'   => 3,
              'created_at'   => now(),
              'updated_at'   => now(),
          ],
        ]);
    }
}
