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

Route::get('/', 'FrontController@index');
Route::get('apero/{id}', 'FrontController@single');
Route::get('/search', 'FrontController@search');

Route::group(['prefix' => 'admin'], function (){

    Route::get('/', 'AdminController@index');
    Route::match(['get', 'post'], '/create', 'AdminController@create');
    Route::match(['get', 'post'], '/update/{id}', 'AdminController@update');
    Route::post('/delete', 'AdminController@destroy');

});
