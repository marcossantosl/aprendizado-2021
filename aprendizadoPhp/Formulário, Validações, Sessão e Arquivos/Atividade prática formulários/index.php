<?php
session_start();

if (isset($_SESSION['nome'])) {
    echo $_SESSION['nome'] . '-' . '<a href="apagar.php">Sair</a>';
} else {
    header("Location: login.php");
};
