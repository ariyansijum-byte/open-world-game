const player = document.getElementById("player");
const world = document.getElementById("world");
const npc = document.querySelector(".npc");

let px = 150, py = 150;
let speed = 5;

// Player movement
document.addEventListener("keydown", e => {
  if (e.key === "ArrowUp") py -= speed;
  if (e.key === "ArrowDown") py += speed;
  if (e.key === "ArrowLeft") px -= speed;
  if (e.key === "ArrowRight") px += speed;

  player.style.left = px + "px";
  player.style.top = py + "px";

  // Camera follow
  world.style.transform =
    `translate(${-px + window.innerWidth/2}px, ${-py + window.innerHeight/2}px)`;
});

// NPC random move
let npcX = 500, npcY = 500;
setInterval(() => {
  npcX += Math.random() * 40 - 20;
  npcY += Math.random() * 40 - 20;
  npc.style.left = npcX + "px";
  npc.style.top = npcY + "px";
}, 500);
