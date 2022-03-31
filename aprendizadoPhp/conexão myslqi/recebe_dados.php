<?php
$categorias = $_GET['categorias'];

echo "As categorias selecionadas foram: <br>";

foreach ($categorias as $categoria) {
    echo $categoria;
    echo "<br>";
}
