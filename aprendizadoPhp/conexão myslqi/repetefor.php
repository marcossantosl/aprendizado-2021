<html>
<?php
if (isset($_POST['btnGerar'])) {
    $repeticoes = $_POST['repeticoes'];
    $texto = $_POST['texto'];

    for ($i = 0 ; $i < $repeticoes ; $i++ ) {
        echo $texto;
        echo "<br>";
    }
}
?>

<head></head>

<body>
    <form method="POST">
        <p>Texto: <input type="text" name="texto"></p>
        <p>Repetições: <input type="number" name="repeticoes"></p>
        <p><input type="submit" value="Gerar" name="btnGerar"></p>
    </form>
</body>

</html>