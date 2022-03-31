<?php
echo "<pre>"; //pré formata o texto
print_r($_FILES); //exibe informações sobre a variável global $_FILES, que representa o conjunto de arquivos upados na página

if (in_array($_FILES['arquivo']['type'], array('image/jpeg', 'image/jpg', 'image/png'))) { //Checa se o no array criado existe no tipo de arquivo(extensão) do $_FILES, e executa o bloco, com o objetivo de filtrar a extensão só aceitando imagens 
    //$nome = $_FILES['arquivo']['name']; //pegando o nome do arquivo que foi enviado
    $nome = md5(time() . rand(0, 1000)) . '.jpg'; //gerando um nome diferente para cada arquivo para não repetir e sobreescrever o mesmo nome

    echo 'Arquivo salvo com sucesso';
    move_uploaded_file($_FILES['arquivo']['tmp_name'], 'arquivos/' . $nome); //selecionando o lugar de onde o arquivo é movido temporariamente, e o movendo depois para a pasta arquivos 
} else {
    echo "Extensão de arquivo não permitida";
}; // se o arquivo tiver a extensão correta, ele é enviado, nomeia corretamente, e é movido da pasta temporária para a pasta desejada. 
