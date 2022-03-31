<html>

<?php
include('conexao.php');

$coduser = $_GET['codUsuario']; //recebe o id por get (barra de navegação)

if (isset($_POST['btnSalvar'])) { //se o botão no campo edita usuário for pressionado
    $nomeuser = $_POST['nomeuser'];
    $emailuser = $_POST['emailuser'];
    $senhauser = $_POST['senhauser']; //associa os valores dos campos as variáveis

    $sql = "UPDATE users SET  
                nomeuser='$nomeuser', 
                emailuser='$emailuser', 
                senhauser='$senhauser' 
            WHERE coduser='$coduser'";  //cria uma variável com o código sql de update dos campos 

    mysqli_query($conn, $sql); //e executa o update dentro de uma query
    echo "<script> alert('Usuário alterado com sucesso') </script>"; //exibe mensagem de sucesso
}

//exibir os valores nos campos

$sql = "SELECT * FROM users WHERE coduser=$coduser"; //seleciona o registro no banco onde o id for o id passado pelo get
$rs = mysqli_query($conn, $sql); //realiza a consulta na tabela pelo query
$linha = mysqli_fetch_array($rs); //grava os registros da tabela dentro da variável linha

?>

<head></head>

<body>
    <?php include('menu.php'); ?>

    <h2>Edição de usuário</h2>

    <form method="POST">
        <p>Nome completo: <input type="text" name="nomeuser" value="<?php echo $linha['nomeuser'] ?>"> </p> <!-- exibe os valores nos campos -->

        <p>E-mail: <input type="email" name="emailuser" value="<?php echo $linha['emailuser'] ?>"></p>

        <p>Senha: <input type="password" name="senhauser" value="<?php echo $linha['senhauser'] ?>"></p>

        <p> <input type="submit" value="Salvar dados" name="btnSalvar"> </p>
    </form>
</body>

</html>