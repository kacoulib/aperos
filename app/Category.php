<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    public $timestamps = true;
    
    // belongsTo many aperos
    public function aperos(){
        return $this->hasMany('App\Apero');
    }
}
