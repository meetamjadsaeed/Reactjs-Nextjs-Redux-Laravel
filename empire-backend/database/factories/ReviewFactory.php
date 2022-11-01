<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
// use App\Models\Product;
use App\Models\User;

class ReviewFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'review' => $this->faker->paragraph,
        'rating' => $this->faker->numberBetween(0, 5),
        'user_id' => function() {
            return User::all()->random();
        },
        ];
    }
}
