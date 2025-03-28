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
        Schema::create('messages', function (Blueprint $table) {
            $table->id('idMessage');
            $table->string('firstName', 80);
            $table->string('lastName', 80);
            $table->string('email', 80);
            $table->string('phone', 80);
            $table->string('subject', 80);
            $table->text('content');
            $table->foreignId('idUser')->nullable()->constrained('users', 'idUser')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('messages');
    }
};
