<?php

class Matematica
{

    public static string $nome = 'Marcos';

    public static function somar($x, $y)
    {
        return $x + $y;
    }
}


echo Matematica::$nome . "<br>";
echo Matematica::somar(20, 30);
