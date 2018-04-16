@extends('master')

@section('title')
    Home
@endsection    

@section('content')
@if (Auth::check())
<h1>Welcome</h1>
<a href="/logout">Logout</a>
@endif

@if (!Auth::check())
<h1>You have to <a href="/login">login</a>.</h1>
@endif
