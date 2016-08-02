@extends('rm.master')

@section('content')

    <h3>Search aperos</h3>
    <form action="{{route('createApero')}}" method="POST">
        {{csrf_field()}}
        <div class="form-group">
            <label for="exampleInputEmail1">Title</label>
            <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Title" name="title">
        </div>
        {{ method_field('PUT') }}
        <div class="form-group">
            <label for="exampleInputPassword1">date</label>
            <input type="date" class="form-control" id="exampleInputPassword1" placeholder="date" name="date">
        </div>
        <div class="form-group">
            <label for="exampleInputFile">File input</label>
            <input type="file" id="exampleInputFile">
            <p class="help-block">Example block-level help text here.</p>
        </div>
        <div class="checkbox">

            @foreach($tags as $tag)
                <label><input type="checkbox"> {{$tag->name}}
                </label>
            @endforeach
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
        <input type="hidden" name="_token" value="{{ Session::token() }}">
    </form>

@endsection
