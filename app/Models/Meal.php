<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Meal extends Model
{
    use HasFactory;

    protected $primaryKey = 'idMeal';
    
    protected $fillable = [
        'title',
        'meal_img',
        'duration',
        'description',
        'ingredients',
        'instructions',
        'views',
        'likes',
        'idCategory',
        'idKitchen',
        'idUser'
    ];

    // Your existing relationships...
    public function category()
    {
        return $this->belongsTo(Category::class, 'idCategory');
    }

    public function kitchen()
    {
        return $this->belongsTo(Kitchen::class, 'idKitchen');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'idUser');
    }
}