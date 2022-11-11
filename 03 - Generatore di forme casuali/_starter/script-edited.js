// Lascia che la pagina finisca di caricare tutti gli elementi
window.onload = function () {

  // Prendi l'elemento HTML con l'id "canvas"
  const canvas = document.querySelector('#canvas');

  // Assegna le dimensioni della canvas (altrimenti il disegno viene deformato)
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Prendi il contesto di disegno 2d della canvas
  const ctx = canvas.getContext('2d');


  setInterval(function () {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const numberOfElements = 1 + Math.floor(Math.random() * 20);

    // Ripeti n volte l'operazione
    for (let i = 0; i < numberOfElements; i++) {

      ctx.fillStyle = randomRGB();

      // Assegna delle variabili
      const x = Math.random() * window.innerWidth; 
      const y = Math.random() * window.innerHeight;
      const w = 200;
      const h = 200;

      // Disegna un rettangolo con dimensioni date
      ctx.fillRect(x, y, w, h);

    }

  }, 200);

}

function randomRGB () {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // return 'rgb('+ r +', '+ g +', '+ b +')';
  return `rgb(${r}, ${g}, ${b})`;
}



/*
  dimensioni del rettangolo

  cambia colore ogni volta che si ricarica

  ogni rettangolo ha un colore casuale

  assegnare un colore random da una palette

  cambiare le forme
*/
