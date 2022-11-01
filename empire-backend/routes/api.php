<?php

use App\Http\Controllers\Api\CategoryApiController;
use App\Http\Controllers\Api\CommentApiController;
use App\Http\Controllers\Api\PostApiController;
use App\Http\Controllers\Api\TagApiController;
use App\Http\Controllers\Api\UserApiController;
use App\Http\Controllers\Api\ProductController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// https://documenter.getpostman.com/view/8942795/TVmJhJv2

Route::post('registration', [UserApiController::class, 'store']);
Route::post('login', [UserApiController::class, 'login']);
Route::post('forgot-password', [UserApiController::class, 'forgotPassword']);
// Route::get('show/{id}', [UserApiController::class, 'show']);

Route::get('authors', [UserApiController::class, 'index']);
Route::get('authors/{id}', [UserApiController::class, 'show']);
Route::get('authors/{id}/posts', [UserApiController::class, 'posts']);
Route::get('authors/{id}/comments', [UserApiController::class, 'comments']);

Route::get('categories', [CategoryApiController::class, 'index']);
Route::get('categories/{id}/posts', [CategoryApiController::class, 'posts']);

Route::get('posts', [PostApiController::class, 'index']);
Route::get('postssearch/{searchTerm}/{categoryId}', [PostApiController::class, 'search']); // search posts by tittle, send searchTerm as string
Route::get('searchbycity/{searchcity}', [PostApiController::class, 'searchcity']); // search posts by city, send searchcity as string
Route::get('posts/{id}', [PostApiController::class, 'show']);
Route::get('posts/{id}/comments', [PostApiController::class, 'comments']);

Route::get('tags/{id}/posts', [TagApiController::class, 'posts']);

Route::get('products', [ProductController::class, 'index']); //Fetch all products
Route::get('products/{id}', [ProductController::class, 'show']); //Fetch a single product and its reviews
Route::post('products', [ProductController::class, 'store']); //Create a product
Route::put('products/{id}', [ProductController::class, 'update']); //Update a product
Route::delete('products/{id}', [ProductController::class, 'destroy']); //Delete a product



Route::post('/products/{id}/reviews', [ProductController::class, 'store']); //Create a review for a product
Route::put('/products/{id}/reviews/{id}', [ProductController::class, 'update']); //Update a product review
Route::delete('/products/{id}/reviews/{id}', [ProductController::class, 'destroy']); //Delete a product review


Route::middleware('auth:sanctum')->group(function () {
    Route::post('comments/posts', [CommentApiController::class, 'store']);
    Route::post('logout', [UserApiController::class, 'logout']);
    Route::post('update-password',[UserApiController::class, 'updatePassword']);
});
