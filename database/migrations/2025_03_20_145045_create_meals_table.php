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
        Schema::create('meals', function (Blueprint $table) {
            $table->id('idMeal');
            $table->string('title', 250);
            $table->string('meal_img', 250)->nullable();
            $table->time('duration')->nullable();
            $table->string('country', 60)->nullable();
            $table->text('description')->nullable();
            $table->json('ingredients')->nullable();
            $table->json('instructions')->nullable();
            $table->string('status', 60)->nullable();
            $table->integer('views')->default(0);
            $table->foreignId('idCategory')->constrained('categories', 'idCategory')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('meals');
    }
};
