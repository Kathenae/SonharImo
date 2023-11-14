<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\HouseListing>
 */
class HouseListingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'province' => $this->faker->state(),
            'city' => $this->faker->city(),
            'address' => $this->faker->address(),
            'property_type' => $this->faker->randomElement(['house', 'apartment', 'comercial', 'condo', 'plot']),
            'deal_type' => $this->faker->randomElement(['rent', 'sale']),
            'price' => $this->faker->numberBetween(10000, 10000000),
            'is_approved' => $this->faker->boolean(),
            'is_published' => $this->faker->boolean(),
            'is_featured' => $this->faker->boolean(),
            'publish_at' => $this->faker->dateTime(),
            'description' => $this->faker->text(),
            'plot_square_footage' => $this->faker->numberBetween(100, 10000),
            'total_bedrooms' => $this->faker->numberBetween(1, 10),
            'total_showers' => $this->faker->numberBetween(1, 10),
            'total_parking_spaces' => $this->faker->numberBetween(1, 10),
            'owner_name' => $this->faker->name(),
            'owner_phone_number' => $this->faker->phoneNumber(),
            'owner_secondary_phone_number' => $this->faker->phoneNumber(),
            'owner_personal_id_number' => $this->faker->randomNumber(),
            'owner_address' => $this->faker->address(),
            'owner_email_address' => $this->faker->email(),
            'user_id' => $this->faker->numberBetween(1, 10),
        ];
    }
}
