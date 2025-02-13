<?php session_start(); ?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jogo da Memória</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Jogo da Memória</h1>
        <p id="message"></p>
        <div id="game-board" class="board"></div>
        <button id="restart-button">Reiniciar Jogo</button>
        <p>Pontuação: <span id="score">0</span></p>
        <form action="save_score.php" method="POST" id="score-form" style="display: none;">
            <input type="hidden" id="final-score" name="score">
            <button type="submit">Salvar Pontuação</button>
        </form>
    </div>
    <script src="script.js"></script>
</body>
</html>