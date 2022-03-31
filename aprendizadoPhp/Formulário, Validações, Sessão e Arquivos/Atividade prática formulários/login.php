<?php
session_start();

if (isset($_SESSION['aviso'])) {
    echo $_SESSION['aviso'];
    $_SESSION['aviso'] = '';
};

?>

<form method="POST" action="recebeDados.php">

    <label>
        Nome:
        <br />
        <input type="text" name="nome" />
    </label>
    <input type="submit" value="enviar" />
</form>