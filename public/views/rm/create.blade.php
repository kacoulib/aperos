@extends('rm.master')

@section('content')

    <h3>Search aperos</h3>
    <form action="{{route('create')}}" method="POST">
        {{csrf_field()}}
        <div class="form-group">
            <label for="exampleInputEmail1">Title</label>
            <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Title" name="title" value="{{Request::old('title')}}">
        </div>
        {{ method_field('PUT') }}
        <div class="form-group">
            <label for="exampleInputPassword1">date</label>
            <input type="date" class="form-control" id="exampleInputPassword1" placeholder="date" name="date" value="value="{{Request::old('date')}}"">
        </div>
        <div class="form-group">
            <label for="exampleInputFile">File input</label>
            <input type="file" id="exampleInputFile" name="picture" value="{{Request::old('picture')}}">
            <p class="help-block">Example block-level help text here.</p>
        </div>
        <div class="checkbox">

            @foreach($categories as $category)
                <label><input type="radio" name="category_id" value="{{$category->id}}"> {{$category->title}}
                </label>
            @endforeach
        </div>
        <div class="checkbox">

            @foreach($tags as $tag)
                <label><input type="checkbox" name="tags[]"> {{$tag->name}}
                </label>
            @endforeach
        </div>
        <div class="form-group">
            <textarea name="content" class="form-control" value="{{Request::old('content')}}"></textarea>
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
        <input type="hidden" name="_token" value="{{ Session::token() }}">
        <input type="hidden" name="user_id" value="{{ Auth::id() }}">
    </form>

@endsection
