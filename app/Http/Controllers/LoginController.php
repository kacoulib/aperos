<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use Illuminate\Http\Request;
use Auth;

class LoginController extends Controller
{
    // injection de la request
    public function login(Request $request)
    {
        if ($request->isMethod('post')) {
            $this->validate($request, [
                'email' => 'required|email',
                'password' => 'required'
            ]);
            $credentials = $request->only('email', 'password');

            if (Auth::attempt($credentials)) {
                return redirect('admin/apero')->with(['message' => 'success']);
            } else {
                return back()
                    ->withInput($request->only('email'))
                    ->with(['message' => 'mon coco c pas bon !!!']);
            }
        }
        return view('rm.login');
    }

    public function logout()
    {
        Auth::logout();
        return redirect('/')->with(['message' => 'succes logout']);
    }
}
