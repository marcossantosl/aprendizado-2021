<?php

//classe
class Post
{
    public $likes = 0;
    public $comements = [];
    public $author;
}

//objeto
$post1 = new Post();
$post1->likes = 3;

$post2 = new Post();
$post2->likes = 5; //"executando" o objeto

echo "Post 1:" . $post1->likes . "<br/>";
echo "Post 1:" . $post2->likes . "<br/>";
