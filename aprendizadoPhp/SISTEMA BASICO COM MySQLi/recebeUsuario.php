<?php
include("conexao.php"); // inclui o arquivo de conexão com BD

$nomeuser = $_POST['nomeuser'];
$emailuser = $_POST['emailuser'];
$senhauser = $_POST['senhauser'];

$sql = "INSERT INTO users (nomeuser, emailuser, senhauser) 
        VALUES ('$nomeuser', '$emailuser', '$senhauser')"; //código sql de inserção do usuário

mysqli_query($conn, $sql); //query que executa o código sql de inserção do usuário

mysqli_close($conn); //fecha a conezçao com o banco de dados
echo "Usuário inserido com sucesso."; //mensagem de sucesso