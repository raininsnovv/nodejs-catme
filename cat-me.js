const catMe = require("cat-me");

function randomCats() {
  for (let i = 0; i < 3; i++) {
    let randNum = Math.floor(Math.random() * catMe.catNames.length);
    console.log(catMe(catMe.catNames[randNum]));
  }
}
randomCats();
