@php
//NOTA BENE, ESEMPIO PAGINA DI LOGIN QUI
//https://docs.italia.it/accounts/login/
@endphp


<x-guest-layout>
    <x-authentication.card>
        <x-slot name="logo">
            <x-authentication.card-logo />
        </x-slot>

        <div class="card-body">

            {{-- <x-validation.errors class="mb-3 rounded-0" />

            @if (session('status'))
                <div class="alert alert-success mb-3 rounded-0" role="alert">
                    {{ session('status') }}
                </div>
            @endif --}}

            <x-input.errors></x-input.errors>
            <form method="POST" action="{{ route('login', ['referrer' => $referrer]) }}">
                @csrf
                {{-- <div class="form-group">
                    <x-input.label value="{{ __('Email') }}" />

                    <x-input class="{{ $errors->has('email') ? 'is-invalid' : '' }}" type="email" name="email"
                        :value="old('email')" required />
                    <x-input.error for="email"></x-input.error>
                </div>

                <div class="form-group">
                    <x-input.label value="{{ __('Password') }}" />

                    <x-input class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" type="password"
                        name="password" required autocomplete="current-password" />
                    <x-input.error for="password"></x-input.error>
                </div> --}}

                <x-input.group label="Email Address" type="email" name="email" colSize="4"></x-input.group>

                <x-input.group label="Password" type="password" name="password" colSize="4"></x-input.group>

                {{-- <div class="form-group">
                    <div class="form-check">
                        <x-forms.inputs.checkbox id="remember_me" name="remember" />

                        <label class="form-check-label" for="remember">
                            {{ __('Remember Me') }}
                        </label>
                    </div>
                </div> --}}

                <div class="form-group">
                    <div class="form-check">
                        <x-theme::checkbox id="remember_me" name="remember" />

                        <label class="form-check-label" for="remember">
                            {{ __('Remember Me') }}
                        </label>
                    </div>
                </div>

                <div class="mb-0">
                    <div class="d-flex justify-content-end align-items-baseline">
                        @if (Route::has('password.request'))
                            <a class="text-muted mr-3" href="{{ route('password.request') }}">
                                {{ __('Forgot your password?') }}
                            </a>
                        @endif

                        <!-- Submit-->
                        <div class="d-grid">
                            <button class="btn btn-primary">Sign in</button>
                        </div>
                        {{-- <x-button title="Login">
                            {{ __('Login') }}
                        </x-button> --}}
                    </div>
                </div>
                <p class="text-center">
                    <small class="text-muted text-center">Don't have an account yet?
                        <a href="{{ url('it/register') }}">Sign Up </a></small>
                </p>
            </form>
        </div>
    </x-authentication.card>
    </x-layouts.guest>
