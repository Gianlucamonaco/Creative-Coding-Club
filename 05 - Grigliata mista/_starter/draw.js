const draw = () => {
  const rows      = 16;
  const cols      = 16;
  const paddingX  = 50;     // Margine orizzontale
  const paddingY  = 50;     // Margine verticale
  const gap       = 50;     // Spazio tra gli elementi
  ctx.font        = "15px Helvetica";
  ctx.lineWidth   = 1;


  // TASK #1
  // CREA UNA RIGA DI PUNTI
  // --------------------------------

  // Crea un array vuoto
  const rowPoints = [];

  // Crea 16 punti disposti in fila ed aggiungili all'array

    // Un punto è un oggetto che contiene le proprietà "x" e "y"
    // La "x" del punto varierà in base all'indice dell'elemento
    // La "y" del punto rimarrà fissa


  // TASK #2
  // CREA UNA GRIGLIA DI PUNTI
  // --------------------------------

  // Crea un array vuoto
  const gridPoints = [];

  // Crea una griglia di 16x16 punti ed aggiungili all'array

    // Un punto è un oggetto che contiene le proprietà "x" e "y"
    // La "x" del punto varierà in base all'indice della colonna
    // La "y" del punto varierà in base all'indice della riga


  // TASK #3
  // DISEGNA ELEMENTI IN OGNI PUNTO DELLA GRIGLIA
  // --------------------------------

  // Crea un loop per ogni punto della griglia

    // Scrivi la funzione in basso per disegnare un testo

    // Scrivi la funzione in basso per disegnare un rettangolo

    // Scrivi la funzione in basso per disegnare un tracciato
  
}


// ----------------------------------------------------------------
// Disegna un testo nel punto indicato
const drawText = (point, index) => {
  // Definisci il colore del testo

  // Disegna il rettangolo usando i parametri (text, x, y, w, h)
}

// ----------------------------------------------------------------
// Disegna un rettangolo nel punto indicato
const drawRect = (point, index, gap) => {
  // Definisci il colore di riempimento

  // Disegna il rettangolo usando i parametri (x, y, w, h)

}

// ----------------------------------------------------------------
// Disegna un tracciato che passi per il punto indicato
const drawPath = (point, index, count) => {
  // Definisci il colore del tracciato

  // Inizio: muovi il punto alle coordinate (x, y)

  // Traccia la linea usando le coordinate (x, y)

  // Fine: disegna la linea
}