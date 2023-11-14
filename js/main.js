document.addEventListener("DOMContentLoaded", () => {
  const question = document.getElementById("question");
  const contentQuestion = document.querySelector(".question");
  const answersContainer = document.getElementById("answers");
  const title = document.getElementById("title");
  const board = document.getElementById("board");
  const squares = []; // Tableau pour stocker les cases du plateau
  const player = document.createElement("div");
  player.classList.add("player");
  let playerPosition = 0;

  // Création du plateau de jeu avec 10 cases
  for (let i = 0; i < 15; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    squares.push(square);
    board.appendChild(square);
  }
  console.log(squares[0].appendChild(player));

  // Fonction pour déplacer le joueur sur le plateau
  function movePlayer(position) {
    if (position >= 0 && position < squares.length) {
      const currentSquare = squares[playerPosition];
      currentSquare.innerHTML = ""; // Efface le contenu de la case actuelle

      const targetSquare = squares[position];
      targetSquare.appendChild(player); // Place le joueur dans la nouvelle case
      playerPosition = position;
    }
  }

  // Fonction pour simuler le lancer de dé
  function rollDice() {
    return Math.ceil(Math.random() * 6);
  }

  // Gestion du déplacement du joueur en fonction du lancer de dé
  function playTurn() {
    const diceResult = rollDice();
    console.log(`Vous avez obtenu un ${diceResult} !`);

    // Déplacement du joueur en fonction du résultat du dé
    movePlayer(playerPosition + diceResult);

    // Exemple : Actions spéciales pour certaines cases (modifiable selon le jeu)
    // switch (playerPosition) {
    //   case 3:
    //     alert("Case 3 : Avance de 3 cases supplémentaires !");
    //     movePlayer(playerPosition + 3);
    //     break;
    //   // Ajoutez d'autres cases spéciales ici si nécessaire
    //   default:
    //     break;
    // }

    if (playerPosition >= squares.length - 1) {
      alert("Félicitations, vous avez gagné !");
      // Vous pouvez ajouter d'autres actions à effectuer quand le joueur gagne
    }
  }

  // Écouteur d'événement pour le bouton de lancer de dé
  const diceButton = document.createElement("button");
  diceButton.textContent = "Lancer le dé";
  diceButton.addEventListener("click", () => {
    playTurn();
    contentQuestion.style.display = "block";
  });
  document.body.appendChild(diceButton);

  let question_test = [
    {
      titre: "Present perfect",
      question: "Last summer, i _____ to NewYork",
      reponse: [
        { text: "been", isCorrect: false },
        { text: "have been", isCorrect: false },
        { text: "went", isCorrect: true },
      ],
    },
    {
      titre: "Present perfect",
      question: "You have bought some bread. ____",
      reponse: [
        { text: "Have you bought some bread?", isCorrect: true },
        { text: "Have bought you some bread?", isCorrect: false },
      ],
    },
    {
      titre: "Present perfect",
      question: "They have lost their dog.",
      reponse: [
        { text: "Have they lost their dog?", isCorrect: true },
        { text: "Have they lose their dog?", isCorrect: false },
      ],
    },
  ];

  function displayQuestion(question_obj) {
    question.textContent = question_obj.question;
    title.textContent = question_obj.titre;

    question_obj.reponse.forEach((answer) => {
      const answerElement = document.createElement("button");
      answerElement.textContent = answer.text;
      answerElement.addEventListener("click", () => {
        if (answer.isCorrect) {
          alert("Bonne réponse !"); // Afficher un message de succès pour la bonne réponse
        } else {
          alert("Mauvaise réponse."); // Afficher un message d'échec pour les mauvaises réponses
        }
      });
      answersContainer.appendChild(answerElement);
    });
  }

  displayQuestion(question_test[0]);
});
