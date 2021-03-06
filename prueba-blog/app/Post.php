<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $appends = ["image_url", "date_formatted", "excerpt"];
    /**
     * Devolver la URL de la imagen para que se muestre en las plantillas
     */
    public function getImageUrlAttribute()
    {
        return $this->image != "" ? url("uploads/" . $this->image) : "";
    }
    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function comments()
    {
        return $this->hasMany(Comment::class, 'post_id')->with('user', 'post');
    }
    /**
     * comentarios aprobados que se mostrarán en el sitio web
     */
    public function approvedComments()
    {
        return $this->hasMany(Comment::class, 'post_id')->with('user', 'post')->where('approved', 1);
    }
    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'post_tag', 'post_id', 'tag_id');
    }
    public function getDateFormattedAttribute()
    {
        return \Carbon\Carbon::parse($this->created_at)->format('F d, Y');
    }
    public function getExcerptAttribute()
    {
        // strip_tags — Retira las etiquetas HTML y PHP de un string
        return substr(strip_tags($this->short_text), 0, 100);
        return substr(strip_tags($this->long_text), 0, 100);
    }
}
