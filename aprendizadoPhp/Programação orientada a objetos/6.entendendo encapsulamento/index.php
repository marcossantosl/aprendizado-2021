<?php

class Post
{
    public int $likes = 0;
    public array $comements = [];
    public string $author;

    //métodos
    public function aumentarLike()
    {
        $this->likes++;
    }

    //ENCAPSULAMENTO
    public function setAuthor($n) //função para definir o autor
    {
        //verificação das propriedades, para controlar o acesso das propriedades
        if (strlen($n) > 2) { //se o nome for maior que 2 ele define o nome do author 
            $this->author = ucfirst($n); //definindo o primeiro caractere maíusculo
        }
    }
    public function getAuthor()  //função para pegar o autor
    {
        return $this->author ?? ''; //se tiver autor define, se não tiver defina como vazio (pra não dar erro)
    }
}
$post1 = new Post();
$post1->setAuthor('Marcos');

$post2 = new Post();
$post2->setAuthor('Fulano');

echo "Post 1:" . $post1->likes . " likes - " . $post1->getAuthor() . "<br/>";
echo "Post 1:" . $post2->likes . " likes - " . $post2->getAuthor() . "<br/>";
