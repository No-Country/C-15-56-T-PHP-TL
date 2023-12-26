<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Categorias;
use Illuminate\Http\Request;

class CategoriaController extends Controller
{
     
    public function index()
    {
        $categorias = Categorias::all();
        return $categorias;
    }
}
