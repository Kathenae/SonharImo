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
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->timestamps();

            $table->string('province');
            $table->string('city');
            $table->string('address');

            $table->double('price')->default(0);
            $table->enum('deal_type', ['rent', 'sale']);
            $table->enum('negotiation_type', ['external', 'internal'])
                ->default('external');
            $table->boolean('include_convenience')->default(false);


            $table->enum('property_type', ['condo', 'apartment', 'house', 'comercial', 'plot']);
            $table->double('plot_square_footage')->default(0);
            $table->integer('total_bedrooms')->default(0);
            $table->integer('total_showers')->default(0);
            $table->integer('total_parking_spaces')->default(0);
            $table->text('description')->nullable()->default('');

            $table->boolean('is_approved')->default(false);
            $table->boolean('is_featured')->default(false);
            $table->boolean('is_published')->default(false);
            $table->timestamp('publish_at')->useCurrent();

            $table->string('owner_name')->nullable();
            $table->string('owner_phone_number')->nullable();
            $table->string('owner_secondary_phone_number')->nullable();
            $table->string('owner_personal_id_number')->nullable();
            $table->string('owner_address')->nullable();
            $table->string('owner_email_address')->nullable();
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
