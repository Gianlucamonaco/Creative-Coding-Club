const paddingX  = 50;     // Margine orizzontale
const paddingY  = 50;     // Margine verticale

const draw = () => {
  const { gui } = this;
  ctx.lineWidth   = 1;

  // TASK #1
  // --------------------------------

  // RIGA
  // Crea un array vuoto che conterrà tutti i punti da 0 a 15
  const rowPoints = [];

  for (let i = 0; i < gui.cols; i++) {
    // Crea un nuovo punto con x e y
    const x = paddingX + gui.gapX * i;
    const y = paddingY;
    const point = { x, y };

    // Aggiungi il punto all'array
    rowPoints.push(point);
  }

  // GRIGLIA
  // Crea un array vuoto che conterrà tutti i punti da 0 a 255
  const gridPoints = [];

  for (let r = 0; r < gui.rows; r++) {
    for (let c = 0; c < gui.cols; c++) {
      // Crea un nuovo punto con x e y
      const shiftX = gui.shiftX * Math.cos((frame/10 + c + r) / 10);
      const shiftY = gui.shiftY * Math.sin((frame/10 + c + r) / 10);
      const x = paddingX + gui.gapX * c + gui.gapX * shiftX;
      const y = paddingY + gui.gapY * r + gui.gapY * shiftY;
      const point = { x, y };

      // Aggiungi il punto all'array
      gridPoints.push(point);
    }
  }


  // TASK #2
  // --------------------------------

  // Per ogni punto
  gridPoints.forEach((point, index) => {
    if (gui.drawRect) drawRect(point, index);
    if (gui.drawPath) drawPath(point, index, rowPoints.length);
    if (gui.drawText) drawText(point, index);
  })

  rowPoints.forEach((point) => {
    // Disegna una linea verticale che passi per il punto
    if (gui.drawVert) drawVert(point);
  })

}

// ----------------------------------------------------------------
// Disegna un testo nel punto indicato
const drawText = (point, index) => {
  const { gui } = this;
  const size = gui.fontSize * (gui.fontShiftX
             ? 0.5 + Math.abs(Math.sin((frame * 0.1 + index) * 0.2))
             : 1);

  ctx.font      = `${size}px Helvetica`;
  ctx.fillStyle = 'black';

  ctx.fillText(index, point.x, point.y);
}

// ----------------------------------------------------------------
// Disegna un rettangolo nel punto indicato
const drawRect = (point, index) => {
  const { gui } = this;

  ctx.fillStyle = gui.rectColor;
  let width  = gui.gapX * gui.rectW +
               gui.gapX * gui.rectShiftW * (Math.abs(Math.sin((frame * 0.1 + index) * gui.rectSpeedW )));

  let height = gui.gapY * gui.rectH +
               gui.gapY * gui.rectShiftH * (Math.abs(Math.sin((frame * 0.1 + index) * gui.rectSpeedH )));

    ctx.fillRect(point.x, point.y, width, height)

  // ctx.fillStyle = 'red';
  // const size0 = Math.max(0, gap * (Math.abs(Math.sin((frame/10 + index) / 60))));
  // ctx.fillRect(point.x, point.y, gap, size0)

  // ctx.fillStyle = 'blue';
  // const size1 = gap * Math.cos((frame/5 + index) / 20);
  // ctx.fillRect(point.x, point.y - size1/2, gap, size1)

  // ctx.fillStyle = 'black';
  // const size2 = gap * Math.sin((frame/10 + index) / 7);
  // ctx.fillRect(point.x, point.y - size2/2, gap, size2)
}

// ----------------------------------------------------------------
// Disegna un tracciato che passi per il punto indicato
// Se il primo punto, inizia il tracciato
// Se l'ultimo punto, chiude il tracciato
const drawPath = (point, index, count) => {
  ctx.strokeStyle = 'black';
  ctx.lineWidth   = 2;

  if (index % count === 0) {
    ctx.beginPath();
    ctx.moveTo(point.x, point.y);
  }
  
  ctx.lineTo(point.x, point.y);

  if (index % count === count - 1) {
    ctx.stroke();
  }
}

// ----------------------------------------------------------------
// Disegna una linea verticale che passi per il punto indicato
const drawVert = (point) => {
  ctx.strokeStyle = 'black';
  ctx.beginPath();
  ctx.moveTo(point.x, 0);
  ctx.lineTo(point.x, window.innerHeight);
  ctx.stroke();
}