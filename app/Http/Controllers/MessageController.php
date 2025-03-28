<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Message;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class MessageController extends Controller
{
    public function store(Request $request)
    {
        Log::info('Contact form submission:', $request->all());
        $validated = $request->validate([
            'fname' => 'required|string|max:80',
            'lname' => 'required|string|max:80',
            'email' => 'required|email|max:80',
            'phone' => 'required|string|max:20',
            'subject' => 'required|string|max:100',
            'content' => 'required|string',
        ]);

        Message::create([
            'firstName' => $validated['fname'],
            'lastName' => $validated['lname'],
            'email' => $validated['email'],
            'phone' => $validated['phone'],
            'subject' => $validated['subject'],
            'content' => $validated['content'],
            'idUser' => Auth::id() ?? null,
        ]);

        return redirect()->back()->with('success', 'Your message has been sent successfully!');
    }
}
