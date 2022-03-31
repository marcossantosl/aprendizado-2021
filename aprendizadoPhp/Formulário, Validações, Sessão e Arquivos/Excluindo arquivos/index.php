<?php

unlink('lista.txt'); //excluindo arquivo
echo ('arquivo exluido com sucesso');

rename('mover/arquivo1.txt', 'arquivo1rename.txt'); //renomeando arquivo e ao mesmo tempo movendo ele 

copy('mover/arquivo2.txt', 'arquivo2rename.txt');//copiando o arquivo para a pasta raiz 
