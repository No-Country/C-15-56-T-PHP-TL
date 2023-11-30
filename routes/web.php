<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/mostrar-fecha', function(){
    $titulo = "Estoy pasando un valor";
    return view('mostrar-fecha', array(
        'titulo' => $titulo
    ));
});

Route::get('/pelicula/{titulo}', function($titulo){
    return view('pelicula', array(
        'titulo' => $titulo
    ));
});

Route::get('/inicio', 'App\Http\Controllers\InicioController@Home');