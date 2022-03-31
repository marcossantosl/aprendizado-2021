<?php
require('header.php');
?>

<form method="POST" action="recebeDados.php">

    <label>
        Usuário:
        <br />
        <input type="text" name="nome" />
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

    <input type="submit" value="Enviar">

</form>