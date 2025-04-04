<?php

namespace App\Http\Middleware;

use App\Models\Meal;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user() ? [
                    'id' => $request->user()->idUser,
                    'firstName' => $request->user()->firstName,
                    'lastName' => $request->user()->lastName,
                    'email' => $request->user()->email,
                    'profile_img' => $request->user()->profile_img,
                    'bio' => $request->user()->bio,
                    'idRole' => $request->user()->idRole,
                ] : null,
            ],
            'searchedMeals' => Meal::latest()->get(),
            'errors' => fn() => $request->session()->get('errors')
                ? $request->session()->get('errors')->getBag('default')->getMessages()
                : (object) [],
            'flash' => [
                'success' => fn() => $request->session()->get('success'),
                'failed' => fn() => $request->session()->get('failed'),
            ],
        ]);
    }
}
