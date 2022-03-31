<html>

<?php

if (isset($_POST['btnEntrar'])) {
//   echo "Usuário pressionou botão!";

    $user = "braga";
    $pass = "senha123";
    
    $usuarioDigitado = $_POST['nomeUsuario'];
    $senhaDigitada = $_POST['senhaUsuario'];
    
    if (($usuarioDigitado == $user) && ($senhaDigitada == $pass)) {
        echo "Usuário e Senha OK";
        header("Location: acesso.php");
    }
}
?>
<head>
</head>
<body>
    <form method="POST" href="">
        <p>Nome de usuário: <input type="text" name="nomeUsuario"></p>
        <p>Senha: <input type="password" name="senhaUsuario"></p>
        <p><input type="submit" value="Entrar" name="btnEntrar">
            <input type="reset" value="Limpar campos">
        </p>
    </form>
</body>

</html>