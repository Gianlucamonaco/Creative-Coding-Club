function randomGeneratorCanvas () {

  // Prendi l'elemento HTML con l'id "canvas"
  var canvas = document.querySelector('#canvas');

  // Assegna le dimensioni della canvas (altrimenti il disegno viene deformato)
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Prendi il contesto '2d' della canvas
  var ctx = canvas.getContext('2d');

  // TASK #1
  // --------------------------------

    // Assegna un colore di riempimento
    ctx.fillStyle = 'blue';

    // Disegna un rettangolo con le dimensioni date
    ctx.fillRect(100, 100, 100, 100);

  // TASK #2
  // --------------------------------

    // Crea delle variabili che contengano le dimensioni del rettangolo
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    var w = 100;
    var h = 100;

    // Assegna un colore di riempimento
    ctx.fillStyle = 'blue';

    // Disegna un rettangolo con le dimensioni date
    ctx.fillRect(x, y, w, h);

  // TASK #3
  // --------------------------------

    // Crea un loop che ti permetta di ripetere la stessa azione per N volte
    var numberOfElements = 10;
    for (var i = 0; i < numberOfElements; i++) {

      // Crea delle variabili che contengano le dimensioni del rettangolo
      var x = Math.random() * window.innerWidth;
      var y = Math.random() * window.innerHeight;
      var w = 300;
      var h = 300;

      // Assegna un colore di riempimento
      ctx.fillStyle = 'blue';

      // Disegna un rettangolo con le dimensioni date
      ctx.fillRect(x, y, w, h);

    }

}