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
            $sql = "SELECT * FROM users"; //seleciona a tabela usuários
            $rs = mysqli_query($conn, $sql); //a váriavel $rs vai receber uma query aonde vai executar a a seleção da tabela user
            while ($linha = mysqli_fetch_array($rs)) { //enquanto houver registros dentro da matriz associativa definido dentro de $linha( o mysqli_fetch_array($rs) vai criar uma matriz associativa da tabela users )
            ?>
                <tr>
                    <td><?php echo $linha['nomeuser'] ?></td> <!-- ele escreve os campos na tabela dentro da estrutura de repetição -->
                    <td><?php echo $linha['emailuser'] ?></td>
                    <td><?php echo $linha['senhauser'] ?></td>
                    <td>Editar
                        Excluir
                    </td>
                </tr>
            <?php } ?>
        </tbody>
    </table>

</body>

</html>