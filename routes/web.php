<?php

use Illuminate\Support\Facades\Route;
// use App\Http\Controllers\Api\DataController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::group(['prefix' => 'article', 'as' => 'article.'], function () {
//     // 全ての商品データ取得
//     Route::post('/all', [DataController::class, 'index']);
// });
// Route::get('/api/data', 'DataController@index');

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');

// Route::get('/', function () {
//     return view('welcome');
// });
