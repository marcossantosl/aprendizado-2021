<?php
require('config.php');
$info = [];
$id = filter_input(INPUT_GET, 'id', FILTER_VALIDATE_INT); //capturando o id 

if ($id) { //se o id tiver correto
    $sql = $pdo->prepare('SELECT * FROM ifguide.usuarios WHERE id = :id'); //seleciona na tabela onde o campo for id
    $sql->bindValue('id', $id); //e associa com a variável id
    $sql->execute();

    if ($sql->rowCount() > 0) { // se existir um registro com o id(for maior que 0)

        $info = $sql->fetch(PDO::FETCH_ASSOC); //associa ele a variável info e grava a linha com o conjunto de resultados dos valores do campo id  
    } else {
        header('Location: index.php');
        exit;
    }
} else {
    header('Location: index.php');
    exit;
}

?>

<form method='POST' action='editar_action.php'>
    <h1>Adicionar usuário</h1>

    <label>
        <input type="hidden" name="id" value="<?= $info['id']; ?>">
        Nome:<br />
        <input type="text" name="name" value="<?= $info['nome']; ?>">
        <!-- Mostra nos campos os valores já definidos no adicionar nos campos -->
    </label> <br /><br />
    <label>
        Email:<br />
        <input type="email" name="email" value="<?= $info['email']; ?>">
    </label> <br /><br />

    <input type="submit" value="Salvar">

</form>