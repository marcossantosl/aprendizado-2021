<?php
session_start();
require('header.php');

if ($_SESSION['aviso']) {
    echo $_SESSION['aviso'];
    $_SESSION['aviso'] = '';
};

?>

<a href="apagar.php">Apagar cookie</a>

<form method="POST" action="recebeDados.php">

    <label>
        Usuário:
        <br />
        <input type="text" name="usuario" />
    </label>
    <br />
    <br />

    <label>
        Email:
        <br />
        <input type="email" name="email" />
    </label>
    <br />
    <br />

    <label>
        Senha:
        <br />
        <input type="password" name="senha">
    </label>
    <br />
    <br />

    <label>
        Idade:
        <br />
        <input type="text" name="idade">
    </label>
    <br />
    <br />

    <input type="submit" value="Enviar">

</form>