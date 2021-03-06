<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Str;


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

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'mobile_number' => ['string', 'max:255'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'mobile_number' => $data['mobile_number'],
            'password' => Hash::make($data['password']),
        ]);
    }


    public function register(Request $request)
    {
        /**
         * se valida la solicitud.
         */
        $this->validator($request->all())->validate();
        $user = $this->create($request->all());
        // Una vez creado el usuario
        $this->guard()->login($user);
        // Y finalmente método registrado () o devuelve nulo, redirigirlo a
        // alguna otra URL. En nuestro caso, solo necesitamos implementar
        // ese método para devolver la respuesta correcta.
        return $this->registered($request, $user)
            ?: redirect($this->redirectPath());
    }
    protected function registered(Request $request, $user)
    {
        $user->api_token = Str::random(60);
        $user->save();
        return response()->json(['user' => $user->toArray()], 201);
    }
}
