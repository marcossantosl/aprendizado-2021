<?php

class Post
{
    public int $id;
    //public int $likes = 0;
    public array $comements = [];
    public string $author;

    //criando métodos
    /* public function __construct($qtdLikes = 0) //o construct é um método que executaa na criação de um novo objeto 
    {
        $this->likes = $qtdLikes;
    }*/
    public function __construct($postId) //o construct é um método que executaa na criação de um novo objeto 
    {
        $this->id = $postId;
        //consulta no banco de dados para pegar informações do $postId
        $this->likes = 12 * $postId;
    }


    public function aumentarLike()
    {
        echo 'abc';
        $this->likes++;
    }
}

$post1 = new Post(1); //passando o id do post 1
$post2 = new Post(5);

echo "Post 1:" . $post1->likes . "<br/>";
echo "Post 1:" . $post2->likes . "<br/>";
