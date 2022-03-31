<?php

if (isset($_SESSION['nome'])) {
    session_destroy();
}
header("Location: login.php");
