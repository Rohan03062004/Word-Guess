const words = ['apple', 'bench', 'crisp', 'dream', 'eagle', 'frame', 'ghost', 'horse', 'ideal', 'jolly', 'knock', 'light', 'money', 'niche', 'ocean', 'paint', 'quiet', 'royal', 'spice', 'train', 'block', 'grape', 'smart', 'bring', 'chase', 'cloud', 'dance', 'earth', 'fancy', 'giant', 'heart', 'intro', 'juice', 'kites', 'laugh', 'magic', 'novel', 'olive', 'place', 'quest', 'raise', 'shine', 'tower', 'unite', 'voice', 'windy', 'xenon', 'yield', 'zebra', 'snack', 'trend'];
const correctWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
let attempts = 0;
const maxAttempts = 6;

document.addEventListener('DOMContentLoaded', () => {
    createGrid();
});

document.getElementById('guess-button').addEventListener('click', function () {
  const inputWord = document.getElementById('input-word').value.toLowerCase();
  if (inputWord.length !== 5) {
    document.getElementById('result').innerText = 'Please enter a word.';
    return;
  }

  if (attempts < maxAttempts) {
    checkGuess(inputWord);
    attempts++;
  }

  if (inputWord === correctWord) {
    document.getElementById("result").innerText = "Congratulations! You guessed the word.";
    document.getElementById("guess-button").disabled = true;
    document.getElementById("input-word").disabled = true;
  } else if (attempts === maxAttempts) {
    document.getElementById("result").innerText = "Game Over! The correct word was '${correctWord)'";
    document.getElementById("guess-button").disabled = true;
    document.getElementById("input-word").disabled = true;
  }

  document.getElementById("input-word").value = '';
});

function createGrid() {
  const grid = document.getElementById("grid");
  for (let row = 0; row < 6; row++) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("grid-row");
    for (let col = 0; col < 5; col++) {
      const cell = document.createElement("div");
      cell.classList.add("grid-cell");
      gridRow.appendChild(cell);
    }
    grid.appendChild(gridRow);
  }
}

function checkGuess(guess) {
  const row = document.getElementsByClassName("grid-row")[attempts];
  for (let i = 0; i < 5; i++) {
    const cell = row.children[i];
    cell.innerText = guess[i];

    if (guess[i] === correctWord[i]) {
      cell.classList.add("correct");
    } else if (correctWord.includes(guess[i])) {
      cell.classList.add("present");
    } else {
      cell.classList.add("absent");
    }
  }
}
