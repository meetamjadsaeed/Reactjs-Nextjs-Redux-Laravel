<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Laravel\Jetstream\HasProfilePhoto;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens;
    use HasFactory;
    use HasProfilePhoto;
    use Notifiable;
    use TwoFactorAuthenticatable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'password',
        'liked_posts',
        'disliked_posts',
        'favourite_posts',
        'favourite_categories',
        'preferences',
        'remember_token',
    ];

    public function comments(){
        return $this->hasMany(Comment::class, 'author_id', 'id');
    }

    public function posts(){
        return $this->hasMany(Post::class, 'author_id', 'id');
    }

    /**
    * Get the products the user has added.
    */
    public function products()
    {
        return $this->hasMany('App\Models\Product');
    }

    /**
    * Get the reviews the user has made.
    */
    public function reviews()
    {
   return $this->hasMany('App\Models\Review');
    }



    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
        'two_factor_recovery_codes',
        'two_factor_secret',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'profile_photo_url',
    ];
}
