<?php

class Post
{
    public $likes = 0;
    public $comements = [];
    public $author;

    //criando um método
    public function aumentarLike()
    {
        $this->likes++;
    } //os likes do ítem que eu for usar vão ser incrementados
}

$post1 = new Post();
$post1->aumentarLike(); //executando o método estruturado na classe no objeto $post1

$post2 = new Post();
$post2->likes = 5;

echo "Post 1:" . $post1->likes . "<br/>";
echo "Post 1:" . $post2->likes . "<br/>";
