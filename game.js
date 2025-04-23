const canvas = document.getElementById('gameCanvas')
const ctx = canvas.getContext('2d');


canvas.width = window.innerWidth;
canvas.width = window.innerHeight;

function draw() {
    ctx.clearRect(0 ,0 , canvas.width, canvas.height);
    ctx.fillStyle = "#f04";
    ctx.beginPath();
    ctx.arc(canvas.width  / 2, canvas.height / 2, 50, 0, Math.PI * 2);
    requestAnimationFrame(draw);
}


draw();