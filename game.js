const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const menu = document.getElementById('mainMenu');
const playBtn = document.getElementById('playBtn');
const nameInput = document.getElementById('playerName');

let player = {
  x: 0,
  y: 0,
  name: "Player",
  radius: 30
};

function startGame() {
  player.name = nameInput.value || "Player";
  player.x = canvas.width / 2;
  player.y = canvas.height / 2;

  menu.style.display = "none";
  canvas.style.display = "block";

  draw();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);


  ctx.fillStyle = "#44f";
  ctx.beginPath();
  ctx.arc(player.x, player.y, player.radius, 0, Math.PI * 2);
  ctx.fill();


  ctx.fillStyle = "#fff";
  ctx.font = "20px Arial";
  ctx.textAlign = "center";
  ctx.fillText(player.name, player.x, player.y - player.radius - 10);

  requestAnimationFrame(draw);
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

playBtn.addEventListener('click', startGame);