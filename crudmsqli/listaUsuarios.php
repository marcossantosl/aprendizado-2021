<html>
<?php include('conexao.php'); ?>

<head></head>

<body>
    <?php include('menu.php'); ?>

    <h2>Listagem de usuários</h2>

    <table border='1'>
        <thead>
            <th>Nome do usuário</th>
            <th>E-mail do usuário</th>
            <th>Senha do usuário</th>
            <th>Ação</th>
        </thead>
        <tbody>
            <?php
            $sql = "SELECT * FROM users";
            $rs = mysqli_query($conn, $sql);
            while ($linha = mysqli_fetch_array($rs)) {
            ?>
            <tr>
                <td><?php echo $linha['nomeuser'] ?></td>
                <td><?php echo $linha['emailuser'] ?></td>
                <td><?php echo $linha['senhauser'] ?></td>
                <td><a href="editaUsuario.php?codUsuario=<?php echo $linha['coduser']
                    Excluir
                </td>
            </tr>
            <?php } ?>
        </tbody>
    </table>

</body>

</html>