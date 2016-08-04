<?php

namespace App\Http\Controllers;

use App\Apero;
use App\Category;
use App\Http\Requests;
use App\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use File;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $r = Apero::where('status', '=', 'unpublish')->orderBy('date', 'asc')->paginate(5);

        return view('rm.admin.index', ['aperos' => $r]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        //
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        if (empty($request->action) && $request->action != "update_all") {
            $apero = Apero::find($id);
            $apero->status = 'publish';
            $apero->save();
            return redirect('admin/apero');
        }
        $this->validate($request, [
            'title' => 'required',
            'content' => 'required',
            'date' => 'required',
            'category_id' => 'required',
            'status' => 'required'
        ]);

//        dd($request->thumbnail);
        $uri = str_random(12) . '.jpg';
        

        $uploads = public_path(env('UPLOADS'));
        File::put(
            $uploads . DIRECTORY_SEPARATOR . uri, $request->uri
        );

        $apero = Apero::find($id);
        $apero->update($request->all());
        return redirect('admin/apero');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public
    function destroy($id)
    {
        Apero::destroy($id);
        return back()->with(['message' => 'success destroy']);
    }

    public
    function show($id)
    {
        $apero = Apero::find($id);
        $categories = Category::all();
        $tags = Tag::all();

        return view('rm..admin.edit', ['apero' => $apero, 'categories' => $categories, 'tags' => $tags]);
    }
}
