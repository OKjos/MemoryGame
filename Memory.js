//const symbols in []
//const deck math.random where the symbols will go
//if statement to check if they match
//when button is clicked it will show the emoji 
//check to see if emojis match
//if they dont match turn the back around
//if they do match keep them showing and allow 2 more clicks
const symbols = ["☁", "💻", "🌎", "🔌", "⚙", "🔒", "📦", "🔧"]

let emojiSet;
let board = [];

window.onload = function() {
  shuffleEmojis();

}

function shuffleEmojis() {
  emojiSet = symbols.concat(emojiList);

  for (let i = 0; i < emojiSet.length; i++) {
    let j = Math.floor(Math.random() * emojiSet.length)
  }
}