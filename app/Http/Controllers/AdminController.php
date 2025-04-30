<?php

namespace App\Http\Controllers;

use App\Models\Meal;
use App\Models\Message;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function userAccounts($location = 'reportedMeals')
    {
        $users = User::where('idRole', '!=', 1)->get();
        $usersMessages = DB::table('messages')
            ->leftJoin('users', 'messages.idUser', '=', 'users.idUser')
            ->select(
                'messages.*',
                'users.profile_img'
            )
            ->get()
            ->map(function ($message) {
                return (array) $message;
            });
        $meals = DB::table('meals')
            ->leftJoin('users', 'meals.idUser', '=', 'users.idUser')
            ->select(
                'meals.*',
                'users.firstName',
                'users.lastName',
                'users.profile_img',
            )
            ->get()
            ->map(function ($meal) {
                $meal->views = DB::table('user_meal_views')
                    ->where('idMeal', $meal->idMeal)
                    ->count();
                return (array) $meal;
            });

        return Inertia::render('admin/Dashboard', compact('location', 'users', 'usersMessages', 'meals'));
    }

    public function updateUser(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $debug = [
            'initial_profile_img' => $user->profile_img,
            'has_file' => $request->hasFile('profile_img'),
        ];

        $validated = $request->validate([
            'firstName' => 'required|string|max:255',
            'lastName' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,' . $id . ',idUser',
            'bio' => 'nullable|string|max:500',
            'profile_img' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048'
        ]);

        if ($request->hasFile('profile_img')) {
            $oldImage = public_path('uploads/users/' . $user->profile_img);
            if ($user->profile_img && file_exists($oldImage)) {
                unlink($oldImage);
            }
            $extension = $request->file('profile_img')->getClientOriginalExtension();
            $filename = 'User' . $user->idUser . '.' . $extension;
            $debug['new_filename'] = $filename;
            $request->file('profile_img')->move(public_path('uploads/users'), $filename);
            $validated['profile_img'] = $filename;
        }

        $user->update($validated);
        $debug['updated_profile_img'] = $user->fresh()->profile_img;
        $debug['validated_data'] = $validated;

        return back()->with([
            'success' => 'User updated successfully',
            'user' => $user->fresh(),
            'debug' => $debug
        ]);
    }


    public function deleteMeal($idMeal)
    {
        Meal::where('idMeal', $idMeal)->delete();
        return redirect()->back();
    }
    public function deleteUser($id)
    {
        try {
            $user = User::findOrFail($id);
            if ($user->profile_img) {
                $imagePath = public_path('uploads/users/' . $user->profile_img);
                if (file_exists($imagePath)) {
                    unlink($imagePath);
                }
            }
            $user->delete();
            return back()->with('success', 'User and their profile image deleted successfully.');
        } catch (\Exception $e) {
            return back()->with('error', 'Failed to delete user: ' . $e->getMessage());
        }
    }

    public function deleteMessage($id)
    {
        Message::where('idMessage', $id)->delete();
        return redirect()->back();
    }
}
