<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>App Student</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="{{url('views/rm/admin/master.css')}}">
</head>
<body>
<nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                    aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">hello {{Auth::user()->username}}</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-right">
                <a href="{{url('/')}}" class="blog-nav-item">Home</a>
                <a href="{{url('search')}}" class="blog-nav-item">Search</a>
                <a href="{{url('create')}}" class="blog-nav-item">Create</a>
                <a href="{{url('logout')}}" class="blog-nav-item">logout</a>
            </ul>
            <form class="navbar-form navbar-right">
                <input type="text" class="form-control" placeholder="Search...">
            </form>
        </div>
    </div>
</nav>
<section class="col-sm-8 blog-main">
    @yield('content')
</section>
<aside class="col-sm-3 col-sm-offset-1 blog-sidebar">
    @include('rm.sidebar')
</aside>
</div>
</body>
</html>