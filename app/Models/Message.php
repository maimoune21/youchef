<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    use HasFactory;

    protected $table = 'messages';
    protected $primaryKey = 'idMessage';

    protected $fillable = [
        'firstName',
        'lastName',
        'email',
        'phone',
        'subject',
        'content',
        'idUser',
    ];
}
