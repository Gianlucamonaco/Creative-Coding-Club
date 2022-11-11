function randomGeneratorDom () {

  // Prendi l'elemento "body" dal DOM
  var body = document.querySelector('body');

  // TASK #1
  // --------------------------------

    // Crea un elemento 'div'
    var block = document.createElement('div');

    // Assegna una classe all'elemento
    block.classList.add('block');

    // Crea una stringa con lo stile ed assegnala all'elemento
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    var style = `left: ${x}px; top: ${y}px`;

    block.setAttribute('style', style);

    // Aggiungi del contenuto testuale all'elemento
    block.innerHTML = 'CIAO';

    // Aggiungi l'elemnto come "figlio" di body
    body.appendChild(block);

  // TASK #2
  // --------------------------------

    // Crea un loop che ti permetta di ripetere la stessa azione per N volte
    var numberOfElements = 5;
    for (var i = 0; i < numberOfElements; i++) {

      // Chiama la funzione per create un blocco con classe e stile applicati
      var block = createBlock();

      // Aggiungi l'elemento come "figlio" di body
      body.appendChild(block);
    }

}

function createBlock () {
  var block = document.createElement('div');

  // Assegna una classe all'elemento
  block.classList.add('block');

  // Crea una stringa con lo stile ed assegnala all'elemento
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  var style = `left: ${x}px; top: ${y}px`;

  block.setAttribute('style', style);

  // Aggiungi del contenuto testuale all'elemento
  block.innerHTML = 'CIAO';

  return block;
}