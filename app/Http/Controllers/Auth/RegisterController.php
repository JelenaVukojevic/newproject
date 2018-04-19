<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use App\Country;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    protected function create()
    {
        $countries = Country::all();
        return view('register.signup', compact('countries'));
    }

    public function store()
    {
        $this->validate(request(),[
            'first_name' => 'required',
            'last_name' => 'required',
            'company' => 'required',
            'country' => 'required | exists:countries',
            'email' => 'email | required | unique:users',
            'password' => 'required | min:6 | confirmed'
        ]);

        $user =  new User();

        $user->first_name = request('first_name');
        $user->last_name = request('last_name');
        $user->company = request('company');
        $user->country = request('country');
        $user->email = request('email');
        $user->password = bcrypt(request('password'));

        $user->save();

        auth()->login($user);

        return redirect('/home');
    }
}
