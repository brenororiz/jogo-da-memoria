document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("game-board");
    const message = document.getElementById("message");
    const scoreElement = document.getElementById("score");
    const restartButton = document.getElementById("restart-button");
    const scoreForm = document.getElementById("score-form");
    const finalScoreInput = document.getElementById("final-score");

    let cards = [];
    let flippedCards = [];
    let matchedPairs = 0;
    let score = 0;

    const cardValues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const deck = [...cardValues, ...cardValues];

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function createBoard() {
        shuffle(deck);
        board.innerHTML = "";
        cards = [];
        flippedCards = [];
        matchedPairs = 0;
        score = 0;
        scoreElement.textContent = score;

        deck.forEach((value, index) => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.dataset.value = value;
            card.addEventListener("click", flipCard);
            board.appendChild(card);
            cards.push(card);
        });
    }

    function flipCard() {
        if (flippedCards.length < 2 && !this.classList.contains("flipped")) {
            this.classList.add("flipped");
            this.textContent = this.dataset.value;
            flippedCards.push(this);

            if (flippedCards.length === 2) {
                checkForMatch();
            }
        }
    }

    function checkForMatch() {
        const [card1, card2] = flippedCards;

        if (card1.dataset.value === card2.dataset.value) {
            // Cartas correspondem (acerto)
            card1.classList.add("matched", "correct");
            card2.classList.add("matched", "correct");
            matchedPairs++;
            score += 10;
            scoreElement.textContent = score;

            if (matchedPairs === cardValues.length) {
                message.textContent = "Parabéns! Você venceu!";
                finalScoreInput.value = score;
                scoreForm.style.display = "block";
            }
        } else {
            // Cartas não correspondem (erro)
            card1.classList.add("wrong");
            card2.classList.add("wrong");

            setTimeout(() => {
                // Remover os estilos de erro após 1 segundo
                card1.classList.remove("flipped", "wrong");
                card2.classList.remove("flipped", "wrong");
                card1.textContent = "";
                card2.textContent = "";
            }, 1000);
        }

        flippedCards = [];
    }

    restartButton.addEventListener("click", () => {
        message.textContent = "";
        scoreForm.style.display = "none";
        createBoard();
    });

    createBoard();
});