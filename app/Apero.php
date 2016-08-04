<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Apero extends Model
{
    protected $fillable =  ['title', 'date', 'content', 'category_id', 'user_id', 'status', 'uri'];
    protected $table = 'aperos';

    // apero belongsTo one aperos
    public function user(){
        return $this->belongsTo('App\User');
    }

    // hasone apero
    public function category(){
        return $this->belongsTo('App\Category');
    }

    // hasMany tag
    public function tags(){
        return $this->belongsToMany('App\Tag');
    }

    //   surchager a method
    public function scopeFetchJson($query)
    {
        $r = $this::where('status', '=', 'publish')->orderBy('date', 'asc')->paginate(3);

        $aperos = [];

        for( $i = 0; $i < count($r); $i++){
            $aperos[$i]['aperoUser'] = $r[$i]->user;
            $aperos[$i]['aperoTags'] = $r[$i]->tags;

            array_push($aperos, $r[$i]);
        }
        return response()->json($aperos);
    }
}
