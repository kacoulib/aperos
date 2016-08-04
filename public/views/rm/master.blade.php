<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>App Student</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="{{url('views/rm/style.css')}}">
</head>
<body>
<div class="blog-masthead">
    <div class="container">
        <nav class="blog-nav">
            <a href="{{url('/')}}" class="blog-nav-item">Home</a>
            <a href="{{url('search')}}" class="blog-nav-item">Search</a>
            <a href="{{url('create')}}" class="blog-nav-item">Create</a>
            @if(Auth::check())
                <a href="{{Route('admin.apero.index')}}" class="blog-nav-item">Dashbord</a>
            @else
                <a href="{{url('login')}}" class="blog-nav-item">Sign in</a>
            @endif
        </nav>
    </div>
</div>

<div class="row">
    <section class="col-sm-8 blog-main">
        @yield('content')
    </section>
    <aside class="col-sm-3 col-sm-offset-1 blog-sidebar">
        @include('rm.sidebar')
    </aside>
</div>
</body>
</html>