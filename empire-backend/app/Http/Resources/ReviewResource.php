<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ReviewResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        // return parent::toArray($request);

        return [
            'review_id' => $this->id,
            'user_id' => $this->user_id,
            'product_id' => $this->product_id,
            'review' => $this->review,
            'product_rating' => $this->rating,
        ];
    }
}
