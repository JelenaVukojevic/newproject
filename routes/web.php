<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\TodoController;


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



Route::get('/home', 'HomeController@index')->middleware('auth');

Route::get('/login', ['as' => 'login', 'uses' => 'Auth\LoginController@create']);

Route::post('/login', ['as' => 'login', 'uses' => 'Auth\LoginController@store']);

Route::get('/logout', 'Auth\LoginController@logout')->middleware('auth');

Route::get('/register', 'Auth\RegisterController@create');

Route::post('/register', 'Auth\RegisterController@store');
