const draw = () => {
  const rows      = 16;
  const cols      = 32;
  const paddingX  = 50;     // Margine orizzontale
  const paddingY  = 50;     // Margine verticale
  const gap       = 50;     // Spazio tra gli elementi
  const isShiftY  = true;  // Modifica la posizione verticale dei punti (true | false)
  ctx.font        = "15px Helvetica";
  ctx.lineWidth   = 1;

  // TASK #1
  // --------------------------------

  // RIGA
  // Crea un array vuoto che conterrà tutti i punti da 0 a 15
  const rowPoints = [];

  for (let i = 0; i < cols; i++) {
    // Crea un nuovo punto con x e y
    const x = paddingX + gap * i;
    const y = paddingY;
    const point = { x, y };

    // Aggiungi il punto all'array
    rowPoints.push(point);
  }

  // GRIGLIA
  // Crea un array vuoto che conterrà tutti i punti da 0 a 255
  const gridPoints = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // Crea un nuovo punto con x e y
      const shiftY = isShiftY ? Math.sin((frame/10 + c + r) / 10) : 0;
      const x = paddingX + gap * c;
      const y = paddingY + gap * r + gap * shiftY;
      const point = { x, y };

      // Aggiungi il punto all'array
      gridPoints.push(point);
    }
  }


  // TASK #2
  // --------------------------------

  // Per ogni punto
  gridPoints.forEach((point, index) => {
    // drawRect(point, index, gap);
    // drawPath(point, index, rowPoints.length);
    drawText(point, index);
  })

  rowPoints.forEach((point) => {
    // Disegna una linea verticale che passi per il punto
    drawVert(point);
  })

}

// ----------------------------------------------------------------
// Disegna un testo nel punto indicato
const drawText = (point, index) => {
  ctx.fillStyle = 'black';
  ctx.fillText(index, point.x, point.y);
}

// ----------------------------------------------------------------
// Disegna un rettangolo nel punto indicato
const drawRect = (point, index, gap) => {
  // ctx.fillStyle = 'black';
  // const size = 20;
  // ctx.fillRect(point.x, point.y, gap, size)

  // ctx.fillStyle = 'red';
  // const size0 = Math.max(0, gap * (Math.abs(Math.sin((frame/10 + index) / 60))));
  // ctx.fillRect(point.x, point.y, gap, size0)

  // ctx.fillStyle = 'blue';
  // const size1 = gap * Math.cos((frame/5 + index) / 20);
  // ctx.fillRect(point.x, point.y - size1/2, gap, size1)

  ctx.fillStyle = 'black';
  const size2 = gap * Math.sin((frame/10 + index) / 7);
  ctx.fillRect(point.x, point.y - size2/2, gap, size2)
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