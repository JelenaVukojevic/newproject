@extends('layout.master')

@section('title')
    Sign up
@endsection   

@section('content')
<h1>Register</h1>

<form method="POST" action="/register">

{{ csrf_field() }}

    <div class="form-group">
        <label for="first_name">First name</label>
        <input type="text" class="form-control" id="first_name" name="first_name">
    </div>
    <div class="form-group">
        <label for="last_name">Last name</label>
        <input type="text" class="form-control" id="last_name" name="last_name">
    </div>
    <div class="form-group">
        <label for="company">Company</label>
        <input type="text" class="form-control" id="company" name="company">
    </div>
    <div class="form-group">
        <label for="country">Country</label>
        <select name="country" id="country">
            @foreach ($countries as $country)
                <option >{{ $country }}</option>
            @endforeach  
        </select>
    </div>
    <div class="form-group">
        <label for="email">Email</label>
        <input type="text" class="form-control" id="email" name="email">
    </div>
    <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" name="password">
    </div>
    <div class="form-group">
        <label for="password_confirmation">Confirm password</label>
        <input type="password" class="form-control" id="password_confirmation" name="password_confirmation">
    </div>
    <div class="form-group">
        <button type="submit" class="btn btn-primary">Submit</button>
    </div>

</form>

@if (count($errors->all()) > 0)
    @foreach($errors->all() as $error)
        <div class="form-group">
            <div class="alert alert-danger">
                <li>{{ $error }}</li>
            </div>
        </div>
    @endforeach
@endif

@endsection