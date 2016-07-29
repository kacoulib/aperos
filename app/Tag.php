<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    // belongsTo many tags
    public function tags(){
        return $this->morphMany('App\Apero_Tag');
    }
}
