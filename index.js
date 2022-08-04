const imageNumber = Math.floor(Math.random() * 6) + 1;

document
  .querySelector(".img1")
  .setAttribute("src", `./images/dice${imageNumber}.png`);

const secondImageNumber = Math.floor(Math.random() * 6) + 1;

document
  .querySelector(".img2")
  .setAttribute("src", `./images/dice${secondImageNumber}.png`);

if (imageNumber > secondImageNumber) {
  document.querySelector("h1").textContent = "🚩 Player 1 win!";
} else if (imageNumber < secondImageNumber) {
  document.querySelector("h1").textContent = "Player 2 win🚩!";
} else {
  document.querySelector("h1").textContent = "🚩both win🚩";
}
