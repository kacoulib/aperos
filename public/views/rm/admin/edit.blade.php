@extends('.rm.admin.admin')

@section('content')
    <form action="{{route('admin.apero.update', [$apero->id])}}" method="POST">
        {{csrf_field()}}
        {{method_field('PUT')}}
        <div class="form-group">

            <label for="title">Nom:</label>
            <input id="title" type="text" name="title" class="form-control" value="{{$apero->title}}">
            @if($errors->has('title'))
                <span class="admin__error">{{$errors->first('title')}}</span>
            @endif

        </div>
        <div class="form-group">

            <label for="content">Content:</label>
            <textarea name="content" id="content" cols="30" rows="10"
                      class="form-control">{{$apero->content}}</textarea>
            @if($errors->has('content'))
                <span class="admin__error">{{$errors->first('content')}}</span>
            @endif
        </div>
        <img src="views/app/assets/imgs/{{$apero->uri}}" alt="" style="float: left">
        <div class="form-group">
            <label for="uri">Thumbnail:</label>
            <input id="uri" type="file" name="uri" class="form-control">
            @if($errors->has('title'))
                <span class="admin__error">{{$errors->first('title')}}</span>
            @endif

        </div>
        <div class="form-group">

            <label for="status">Statut:</label>
            <input {{$apero->status=='publish'? 'checked' : ''}} type="radio" name="status" value="publish">
            publié
            <input {{$apero->status=='unpublish'? 'checked' : ''}}  type="radio" name="status"
                   value="unpublish">
            dépublié
        </div>
        <h2>Date</h2>
        <div class="form-group">
            <label for="exampleInputPassword1">date</label>
            <input type="date" class="form-control" id="exampleInputPassword1" placeholder="date" name="date" value="value="{{$apero->date}}"">
        </div>
        <h2>Catégorie</h2>
        <div class="form-group">

            <select name="category_id" id="category">
                @forelse($categories as $id => $title)
                    <option {{ (!is_null($apero->category) && $apero->category->id == $id)? 'selected' : ''}} value="{{$id}}">{{$title->title}}</option>
                @empty
                    aucune catégorie
                @endforelse
            </select>
        </div>
        <h2>Mots clés</h2>

        <div class="form-group checkbox">
            <ul class="admin__tags ">
                @forelse($tags as $id => $name)
                    <li style="display: inline-block">
                        <label for="{{$id}}">{{$name->name}}</label>
                        <input style="position: initial; margin: 0;"
                                @foreach($apero->tags as $tag)
                                {{$tag->id==$id? 'checked' : ''}}
                                @endforeach
                                id="{{$id}}" type="checkbox" name="tags[]" value="{{$id}}">
                    </li>
                @empty
                    aucun mot clé
                @endforelse
                @if (count($errors) > 0)
                    <div class="alert alert-danger">
                        <ul>
                            @foreach ($errors->all() as $error)
                                <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    </div>
                @endif
            </ul>
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
        <input type="hidden" name="action" value="update_all">


    </form>
@endsection