<html>

<?php

include('conexao.php');
$coduser = $_GET['codUsuario'];

if (isset($_POST['btnSalvar'])){
    echo 'Botão pressionado';
    $nomeuser = $_POST['nomeuser'];
    $emailuser = $_POST['emailuser'];
    $senhauser = $_POST['senhauser'];

    $sql = "UPDATE users set
                nomeuser='$nomeuser',
                emailuser='$emailuser',
                senhauser='$senhauser'
            WHERE coduser ='$coduser'";
        
    mysqli_query($conn, $sql);

    echo "<script> alert('Usuário alterado com sucesso') </script>"
}
$sql = "SELECT * FROM users WHERE coduser = $coduser";
$rs = mysqli_query($conn, $sql);
$linha = mysqli_fetch_array($rs);
?>

<head></head>

<body>
    <?php include('menu.php') ?>
    <h2>Edição de usuário</h2>
    
    <form method="post">
        <p>Nome: <input  value=" <?php echo $linha['nomeuser']?>" type="text" name="nomeUsuario">Nome Completo </p>
        
        <p>Email: <input  value=" <?php echo $linha['emailuser']?>"type="email" name="emailUsuario">E-mail</p>
       
       <p>Senha: <input value=" <?php echo $linha['senhauser']?>" type="password" name="senhaUsuario">Senha</p>
   
       <p><input type="submit" value="Salvar dados" name="btnSalvar"><p>
    </form>

</body>

</html>