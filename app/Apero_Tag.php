<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Apero_Tag extends Model
{

    // has many tags
    public function aperos(){
        return $this->morphMany('App\Apero_Tag');
    }
}
