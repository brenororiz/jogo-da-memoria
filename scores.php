<?php
echo "<h1>Pontuações Anteriores</h1>";
if (file_exists("scores.txt")) {
    $scores = file("scores.txt", FILE_IGNORE_NEW_LINES);
    echo "<ul>";
    foreach ($scores as $score) {
        echo "<li>$score</li>";
    }
    echo "</ul>";
} else {
    echo "<p>Nenhuma pontuação registrada ainda.</p>";
}
?>