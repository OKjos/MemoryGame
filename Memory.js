//const symbols in []
//const deck math.random where the symbols will go
//if statement to check if they match
//when button is clicked it will show the emoji 
//check to see if emojis match
//if they dont match turn the back around
//if they do match keep them showing and allow 2 more clicks
const symbols = ["☁", "☁", "💻", "💻", "🌎", "🌎", "🔌", "🔌", "⚙", "⚙", "🔒", "🔒", "📦", "📦","🔧", "🔧"]

// cards, moves, restart, result query
const cards = document.querySelector('.card');
const moves = document.querySelector('.moves');
const restart = document.querySelector('.restart');
const result = document.querySelector('.result');


function createCardGrid() {
  const cardGrid = document.querySelector('.button-grid');
  emojiSet.forEach((emoji, index) => {
    const card = document.querySelector('div');
    card.classList.add('card');
    card.dataset.index = index;
    card.addEventListener('click', flipCard);
    card.innerHTML = `<div class="front"><div class="emoji">${emoji}</div></div>`;
    cardGrid.appendChild(card);
  })
}

createCardGrid();

function shuffleEmojis() {
  emojiSet = symbols.concat(symbols);
  for (let i = emojiSet.length - 1; i > 0; i--) {    
    let j = Math.floor(Math.random() * (i - 1));
    [emojiSet[i], emojiSet[j]] = [emojiSet[j], emojiSet[i]];
  }
}

shuffleEmojis();


let firstCard, secondCard;
let  board = [];

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flipped');

  if (!fistCard) {
    firstCard = this;
    return;
  }

  secondCard = this;

  checkForMatch();
}

function checkForMatch() {

}

function disableCards() {

}

function resetBoard() {

}

function restartGame() {

}

function shuffle() {

}