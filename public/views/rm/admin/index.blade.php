@extends('rm.admin.admin')

@section('content')
    <h2 class="sub-header">Liste des Aperos</h2>
    <div class="table-responsive">
        <table class="table table-striped">
            <thead>
            <tr>
                <th>Publier</th>
                <th>Title</th>
                <th>User name</th>
                <th>Date de publication</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            @if (!empty($aperos))
                @foreach ($aperos as $apero)
                    <tr>
                        <td>
                            <form action="{{route('admin.apero.update', $apero->id)}}" method="post">
                                {{csrf_field()}}
                                {{ method_field('PUT') }}
                                <button type="submit" class="btn btn-default">Publié</button>
                            </form>
                        </td>
                        <td><a href="{{route('admin.apero.show', $apero->id)}}">{{$apero->title}}</a></td>
                        <td>{{$apero->user->username}}</td>
                        <td>{{$apero->date}}</td>
                        <td>
                            <form action="{{route('admin.apero.destroy', $apero->id)}}" method="post">
                                {{csrf_field()}}
                                {{ method_field('DELETE') }}
                                <button type="submit" class="btn btn-default">Suprimé</button>
                            </form>
                        </td>
                    </tr>

                @endforeach
            @endif

            </tbody>
        </table>
    </div>
    {!! $aperos->render() !!}

@endsection