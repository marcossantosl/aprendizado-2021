<html>
<head></head>
<body>
    <?php include ('menu.php'); ?>
    
    <form action="recebeUsuario.php" method="POST">
        <h2>Cadastro de usuário</h2>
        <p>Nome completo: <input type="text" name="nomeuser"></p>
        <p>E-mail: <input type="email" name="emailuser"></p>
        <p>Senha: <input type="password" name="senhauser"></p>
        <input type="submit" value="Cadastrar">
    </form>
</body>
</html>