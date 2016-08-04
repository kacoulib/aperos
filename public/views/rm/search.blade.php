@extends('rm.master')

@section('content')

    <h3>Search aperos</h3>
    <form action="{{route('search')}}" method="POST">
        {{csrf_field()}}
        <div class="form-group">
            <label for="exampleInputEmail1">Title</label>
            <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Keyword" name="keyword" value="{{Request::old('keyword')}}">
        </div>
        {{ method_field('PUT') }}
        <button type="submit" class="btn btn-default">Submit</button>
        <input type="hidden" name="_token" value="{{ Session::token() }}">
    </form>

    <ul>
        @if(!empty($aperos))
            @foreach($aperos as $apero)
                <li>
                    <a href="apero/{{$apero->id}}">{{$apero->title}}</a>
                </li>
            @endforeach
        @endif
    </ul>
@endsection
