<?php

namespace App\Http\Controllers;

use App\Apero;
use App\Category;
use App\Http\Requests;
use App\Tag;
use Auth;
use Illuminate\Http\Request;
use Validator;



class FrontController extends Controller
{
    public function index()
    {
//        for angular 2
        return  Apero::fetchJson()->withCookie(cookie('csrf', csrf_field()));


        
////        for blade
//        $r = Apero::where('status', '=', 'publish')->orderBy('date', 'asc')->paginate(3);
//
//        return view('rm.index', ['aperos' => $r]);
    }

    public function create(Request $request)
    {

        if ($request->isMethod('put')) {
            $validator = Validator::make($request->all(), [
                'title' => 'required',
                'date' => 'required',
                'category_id' => 'required',
                'user_id' => 'required',
                'content' => 'required'
            ]);

            if ($validator->fails()){
                return back()->withInput();
            }

            Apero::create($request->all());

            $r = Apero::where('status', '=', 'publish')->orderBy('date', 'asc')->paginate(3);
            $request = null;

            return redirect()->route('home',  ['aperos' => $r]);
        }

        $tags = Tag::all();
        $categories = Category::all();
        return view('rm.create', ['tags' => $tags, 'categories' => $categories]);
    }

    public function search(Request $request)
    {

        if ($request->isMethod('put')) {

            $validator = Validator::make($request->all(), [
                'keyword' => 'required'
            ]);

            if (!$validator->fails()) {
                $aperos = Apero::where('title', 'like', '%' . $request->keyword . '%')->get();
                return view('rm.search', ['aperos' => $aperos]);
            }
        }
        $aperos = Apero::all();

        return view('rm.search', ['aperos' => $aperos]);
    }

    public function single($id)
    {
        $apero = Apero::where('id', $id)->get();

        return view('rm.single', ['apero' => $apero[0]]);
    }
}
