// Lascia che la pagina finisca di caricare tutti gli elementi
window.onload = function () {

// 1. Canvas
// --------------------------------

  // Prendi l'elemento HTML con l'id "canvas"
  const canvas = document.querySelector('#canvas');

  // Assegna le dimensioni della canvas (altrimenti il disegno viene deformato)
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Prendi il contesto di disegno 2d della canvas
  const ctx = canvas.getContext('2d');


  // TASK #1
  // --------------------------------

    // Assegna un colore di riempimento

    // Disegna un rettangolo con le dimensioni date

  // TASK #2
  // --------------------------------

    // Crea delle variabili che contengano le dimensioni del rettangolo

    // Assegna un colore di riempimento

    // Disegna un rettangolo con le dimensioni date

  // TASK #3
  // --------------------------------

    // Crea un loop che ti permetta di ripetere la stessa azione per N volte

      // Crea delle variabili che contengano le dimensioni del rettangolo

      // Assegna un colore di riempimento

      // Disegna un rettangolo con le dimensioni date


// 2. DOM
// --------------------------------

  // TASK #1
  // --------------------------------

      // Crea un elemento 'div'

      // Assegna una classe all'elemento

      // Crea una stringa con lo stile ed assegnala all'elemento

      // Aggiungi del contenuto testuale all'elemento

      // Aggiungi l'elemento come "figlio" di body

}


// function randomRGB () {
//   const r = Math.floor(Math.random() * 256);
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);

//   return `rgb(${r}, ${g}, ${b})`;
// }