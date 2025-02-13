<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $score = intval($_POST['score']);

    // Salvar a pontuação em um arquivo de texto (ou banco de dados)
    $file = fopen("scores.txt", "a");
    fwrite($file, "Pontuação: $score\n");
    fclose($file);

    header("Location: scores.php");
    exit();
}
?>