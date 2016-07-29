<?php

namespace App\Http\Controllers;

use App\Apero;
use App\User;
use Illuminate\Http\Request;

use App\Http\Requests;

class FrontController extends Controller
{
    public function index(){
        $r = Apero::all()->sortBy('date')->take(3)->sort();

        $aperos = [
            'aperos' =>[],
            'user'  =>[],
            'tags'   =>[]
        ];

        for( $i = 0; $i < count($r); $i++){
            array_push($aperos['aperos'], $r[$i]);
            array_push($aperos['user'], $r[$i]->user);
            array_push($aperos['tags'], $r[$i]->tags);
        }

        return response()->json($aperos);
        return view('views/index.html', ['aperos' => json_encode($aperos)]);
    }

    public function search(){
        dd('uoi');
        return view('search');
    }

    public function single($id){
        dd('uoi');
        return view('search');
    }
}
