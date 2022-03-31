<!-- Como vou adicionar o conteúdo do campo formulário na lista -->
<?php
session_start();
$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_SPECIAL_CHARS);

if ($name) {
    $newUser = file_get_contents('lista.txt'); //pega a lista
    $newUser .= "\n" . $name; //quebra a linha antes de adiciona o conteúdo de $name
    file_put_contents('lista.txt', $newUser); //adiciona o campo new user no lista.txt

    $_SESSION['Adicionou!'] = 'Novo usuário Adicionato com sucesso!';
} else {
    $_SESSION['Aviso!'] = 'Preencha o campo!';
}

header("Location: index.php");
exit;
