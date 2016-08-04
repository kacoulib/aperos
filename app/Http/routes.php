<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controllers to call when that URI is requested.
|
*/

Route::get('/', ['as' => 'home', 'uses' => 'FrontController@index']);
Route::any('create', [
    'as' => 'create',
    'middleware' => 'auth',
    'uses' => 'FrontController@create']);
Route::post('createApero', 'FrontController@createApero');
Route::get('apero/{id}', 'FrontController@single');
Route::any('/search', [
    'as' => 'search',
    'uses' => 'FrontController@search']);

// any get post ...
Route::any('login','LoginController@login');
Route::get('logout', 'LoginController@logout');


Route::group(['prefix' => 'admin', 'middleware' => 'auth'], function () {
//    Route::get('',[
//        'as' => 'admin.apero.index',
//        'uses' => 'AdminController@index']);
//    Route::get('update/?action={action}&param={id}', 'AdminController@update');

    Route::resource('apero', 'AdminController');
});