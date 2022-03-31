<?php
session_start();

$usuario = filter_input(INPUT_POST, 'usuario', FILTER_SANITIZE_SPECIAL_CHARS); //filtra o campo texto evitando caracters especiais como estruturas de códigos de rodarem e serem aceitas na página
$senha = filter_input(INPUT_POST, 'senha'); //seleciona o campo senha
$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL); //filter sanitize number int basicamente valida o formato do email
$idade = filter_input(INPUT_POST, 'idade', FILTER_SANITIZE_NUMBER_INT); //filter sanitize number int basicamente retira tudo o que não for número inteiro

if ($usuario && $senha) {
    echo 'Usuário:  ' . $usuario . '<br/>';
    echo 'Email: ' . $email . '<br/>';
    echo 'Senha: ' . $senha . '<br/>';
    echo 'Idade: ' . $idade . '<br/>';
} else {
    $_SESSION['aviso'] = 'Preencha os dados corretamente <br><br>';  //uma variável de seção será criada nesse array associativo e estará disponível para uso em qualquer página da aplicação;
    header("Location: index.php"); //redirecionamento de página
    exit; //para a execução do resto da página
}; //verifica o se os campos das condições são verdadeiros ou falsos, se forem ele mostra a senha e o usuário, e se não for ele redireciona com o header para a página index.php