<!DOCTYPE html>
<html>
    <head>
        <title>Laravel</title>

        <link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">

        <style>
            html, body {
                height: 100%;
            }

            body {
                margin: 0;
                padding: 0;
                width: 100%;
                display: table;
                font-weight: 100;
                font-family: 'Lato';
            }

            .container {
                text-align: center;
                display: table-cell;
                vertical-align: middle;
            }

            .content {
                text-align: center;
                display: inline-block;
            }

            .title {
                font-size: 96px;
            }
        </style>
    </head>
    <body>
                <ul>
                <div class="container">
                <div class="content">
                    @if(!empty($aperos))
                        @foreach ($aperos as $apero)
                            <li>
                                <img src="{{$apero->uri}}"/>
                                <h2><a href="{{url($apero->title)}}">{{$apero->title}}</a></h2>
                                <p>{{$apero->abstract}}</p>
                                @if(!empty($apero->tags))
                                    <p>tags :
                                        @foreach($apero->tags as $tag)
                                            <span>{{$tag->name}}</span>
                                        @endforeach
                                    </p>
                                @endif
                                <p>category : {{$apero->category}}</p>
                            </li>
                        @endforeach
                    </ul>
                    @endif
            </div>
        </div>
    </body>
</html>
