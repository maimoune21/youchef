<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('user_meal_views', function (Blueprint $table) {
            $table->foreignId('idUser')->constrained('users', 'idUser')->onDelete('cascade');
            $table->foreignId('idMeal')->constrained('meals', 'idMeal')->onDelete('cascade');
            $table->primary(['idUser', 'idMeal']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_meal_views');
    }
};
