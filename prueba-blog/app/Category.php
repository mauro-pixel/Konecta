<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    /**
     * agregado las relaciones entre post y categorias
     */
    public function posts()
    {
        return $this->hasMany(Post::class, 'category_id');
    }
}
