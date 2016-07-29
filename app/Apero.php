<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Apero extends Model
{
    // apero belongsTo one aperos
    public function user(){
        return $this->belongsTo('App\User');
    }

    // hasMany aperos
    public function categories(){
        return $this->hasMany('App\Category');
    }

    // hasMany tag
    public function tags(){
        return $this->belongsToMany('App\Tag');
    }

    //   surchager a method
    public function getItems()
    {
        return $this;
        return array_map(function ($value) {
            return $value instanceof Arrayable ? $value->toArray() : $value;
        }, $this->items);
    }

}
