let canvas, ctx;
let frame = 0;
const FRAME_INTERVAL = 2;

// ----------------------------------------------------------------
// Questa funzione viene eseguita al caricamento del file HTML,
// Ovvero quando gli elementi del DOM sono presenti nella pagina.
window.onload = () => {
  this.gui       = new GuiView();
  this.isPlaying = true;

  initCanvas();
  resizeCanvas();
  animateCanvas();

  window.addEventListener('resize', resizeCanvas, false);
  window.addEventListener('keypress', handleKey, false);
}

// ----------------------------------------------------------------
// Questa funzione inizializza le seguenti variabili:
// canvas > l'elemento HTML di tipo canvas
// ctx    > il contesto di disegno 2d della canvas
const initCanvas = () => {
  canvas = document.querySelector('#canvas');
  ctx    = canvas.getContext('2d');
}

// ----------------------------------------------------------------
// Questa funzione ridimensiona la canvas in base alla pixel-ratio,
// necessario affinché appaia con la risoluzione corretta su schermi retina.
const resizeCanvas = () => {
  const ratio = window.devicePixelRatio;

  canvas.width  = window.innerWidth * ratio;
  canvas.height = window.innerHeight * ratio;

  ctx.scale(ratio, ratio);
}

// ----------------------------------------------------------------
// Questa funzione ripulisce l'intera area della canvas.
// Viene utilizzata prima di ogni ciclo di disegno.
const resetCanvas = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// ----------------------------------------------------------------
// Questa è una funzione ricorsiva, richiama se stessa ad ogni frame
// per poter ridisegnare la canvas ed animarla.
const animateCanvas = () => {
  if (this.isPlaying && frame % FRAME_INTERVAL === 0) {
    resetCanvas();
    draw();
  }
  
  requestAnimationFrame(animateCanvas);
  if (this.isPlaying) frame++;
}

const handleKey = (e) => {
  switch (e.code) {
    // Pause animation
    case 'Space':
      this.isPlaying = !this.isPlaying;
      break;
  }
}