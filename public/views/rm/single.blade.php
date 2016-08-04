@extends('rm.master')

@section('content')
    <h2>{{$apero->title}}</h2>
    <ul>
        <li>
            <p><a href="edit/{{$apero->id}}">{{$apero->title}}</a></p>
            <img src="../views/app/assets/imgs/{{$apero->uri}}" alt="" style="float: left">
            <p>{{$apero->abstract}}</p>
            <div style="clear: both;"></div>
            <p>Author : <a href="user/{{$apero->user->id}}">{{$apero->user->username}}</a></p>
            <p>Category : <a href="category/{{$apero->category->id}}">{{$apero->category->title}}</a></p>
            <ul>
                @foreach($apero->tags as $tag)
                    <li>{{$tag->name}}</li>
                @endforeach
            </ul>
            <p>Date : {{$apero->date}}</p>
        </li>
    </ul>

@endsection