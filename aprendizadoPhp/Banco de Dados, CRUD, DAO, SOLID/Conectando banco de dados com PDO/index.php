<?php
$pdo = new PDO("mysql:dbname=ifguide;host=localhost", "root", ""); //(conecta ao banco)seleciona o nome do banco e o local onde ele está, seleciona o nome 

$sql = $pdo->query('SELECT * FROM ifguide.usuarios'); //(o query consulta o banco de dados) a variável sql vai conter tudo o que há dentro da tabela usuários

echo "total de registros: " . $sql->rowCount(); //rowCount vai contar a quantidade de registros existentes na tabela e retornar

$dados = $sql->fetchAll(PDO::FETCH_ASSOC); //fetchAll seleciona todos os registros da tabela usuarios e PDO::FETCH_ASSOC é uma constante que retorna um array indexado pelo nome da coluna conforme retornado em seu conjunto de resultados, e não pelos índices dentro dos registros.

echo "<pre>";
print_r($dados);
