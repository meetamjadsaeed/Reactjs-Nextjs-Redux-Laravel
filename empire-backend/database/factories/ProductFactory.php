<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Product;
use App\Models\User;

class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
             'name' => $this->faker->word,
        'description' => $this->faker->paragraph,
        'price' => $this->faker->numberBetween(1000, 20000),
        'user_id' => function() {
            return User::all()->random();
        },
        ];
    }
}
