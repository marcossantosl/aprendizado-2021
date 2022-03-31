<!DOCTYPE html>
<html lang="pt">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <header class="header">
        <h1>Cabeçalho</h1>
        <?php
        if (isset($_COOKIE['nome'])) { //se o $_COOKIE estiver setado ele entra, se não ele não da erro de variável indefinida
            $nome = $_COOKIE['nome'];
            echo '<h2>' . $nome . '<h2>';
        } //cookie que mostra o usuário que está acessando no cabeçalho
        ?>
    </header>

    <style>
        .header {
            margin: 20px;
            font-size: 20px;
            border-bottom: 2px solid black;
        }
    </style>

</body>

</html>