<?php
require('config.php');
include('menu.php');


$lista = []; //array vazio para comportar os registros posteriormente
$sql = $pdo->query("SELECT * FROM ifguide.usuarios");
if ($sql->rowCount() > 0) { //se tiver mais de um registro
    $lista = $sql->fetchAll(PDO::FETCH_ASSOC); //seleciona todos os registros e associa uma matriz associativa ao array $lista
}

?>

<table border="1" width="100%">
    <tr>
        <th>ID</th>
        <th>NOME</th>
        <th>EMAIL</th>
        <th>AÇÕES</th>
    </tr>
    <?php
    //foreach, recebendo lista como $usuario e retornando os campos, id, nome e email do DB
    foreach ($lista as $usuario) : ?>
        <tr>
            <td><?php echo $usuario['id']; ?></td>
            <td><?php echo $usuario['nome']; ?></td>
            <td><?php echo $usuario['email']; ?></td>
            <td>
                <a href="editar.php?id=<?= $usuario['id']; ?>">[Editar]</a>
                <a href="excluir.php?id=<?= $usuario['id']; ?>">[Excluir]</a>
                <!-- Botões para editar e excluir o registro na tabela -->
            </td>
        </tr>
    <?php endforeach; ?>
</table>