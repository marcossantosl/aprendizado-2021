<!-- Como vou exibir o conteúdo do lista.txt na lista -->
<?php
session_start();

if (isset($_SESSION['Adicionou!'])) {
    echo $_SESSION['Adicionou!'];
    session_destroy();
}
if (isset($_SESSION['Aviso!'])) {
    echo $_SESSION['Aviso!'];
    session_destroy();
}

$lists = file_get_contents('lista.txt'); //le todo o conteúdo de um arquivo para uma string,
$lists = explode("\n", $lists); //transforma cada nome na lista em um ítem de um array
?>

<hr />
<form method="POST" action="add.php">
    <label>
        New Name:
        <input type="text" name="name" />
    </label>
    <input type="submit" value="To Add" />
</form>
<h1>Lista de nomes</h1>
<ul>
    <?php foreach ($lists as $list) : ?>
        <?php if (!empty($list)) : ?>
            <!-- se a lista não estiver vazia -->
            <li><?= $list ?></li> <!-- adiciona o registro na linha -->

        <?php endif; ?>
    <?php endforeach; ?>
</ul>