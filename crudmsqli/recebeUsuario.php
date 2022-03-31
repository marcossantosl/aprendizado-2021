<?php
include("conexao.php"); // inclui o arquivo de conexão com BD

$nomeuser = $_POST['nomeuser'];
$emailuser = $_POST['emailuser'];
$senhauser = $_POST['senhauser'];

$sql = "INSERT INTO users (nomeuser, emailuser, senhauser) 
        VALUES ('$nomeuser', '$emailuser', '$senhauser')";

mysqli_query($conn, $sql);

mysqli_close($conn);
echo "Usuário inserido com sucesso.";