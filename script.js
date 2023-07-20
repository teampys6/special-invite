function display_alert_yes() {
  alert("Você aceitou a transar comigo, muita fé amor!");

  window.location.href = "https://www.youtube.com/watch?v=izGwDsrQ1eQ";
}

function getRandomPosition(element) {
  var container = document.querySelector('.container');
  var containerRect = container.getBoundingClientRect();
  var elementRect = element.getBoundingClientRect();

  var maxX = containerRect.width - elementRect.width;
  var maxY = containerRect.height - elementRect.height;

  var randomX = Math.floor(Math.random() * maxX);
  var randomY = Math.floor(Math.random() * maxY);

  return { x: randomX, y: randomY };
}

function moveButtonRandomly() {
  var noButton = document.getElementById("no-button");
  var newPosition = getRandomPosition(noButton);

  noButton.style.left = newPosition.x + "px";
  noButton.style.top = newPosition.y + "px";
}

document.getElementById("no-button").addEventListener("click", moveButtonRandomly);
