<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('profile_img_url')->nullable();
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('phone_number')->nullable();
            $table->string('secondary_phone_number')->nullable();
            $table->string('personal_id_number')->nullable();
            $table->string('address')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->removeColumn('profile_img_url');
            $table->removeColumn('first_name');
            $table->removeColumn('last_name');
            $table->removeColumn('phone_number');
            $table->removeColumn('secondary_phone_number');
            $table->removeColumn('personal_id_number');
            $table->removeColumn('address');
        });
    }
};
