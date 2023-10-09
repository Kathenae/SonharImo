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
        Schema::create('house_listings', function (Blueprint $table) {
            $table->id();
            $table->string('province');
            $table->string('city');
            $table->string('address');
            $table->string('property_type');
            $table->enum('deal_type', ['rent', 'sale']);
            $table->double('price');
            $table->text('description');
            $table->integer('total_bedrooms');
            $table->integer('total_showers');
            $table->integer('total_garages');

            $table->string('owner_first_name')->nullable();
            $table->string('owner_last_name')->nullable();
            $table->string('owner_phone_number')->nullable();
            $table->string('owner_secondary_phone_number')->nullable();
            $table->string('owner_personal_id_number')->nullable();
            $table->string('owner_address')->nullable();
            $table->string('owner_email_address')->nullable();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('house_listings');
    }
};
