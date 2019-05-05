// REPO: js-censuratore
// DESCRIZIONE:
// CENSURATORE
// - Il software riceve in input un lungo testo e una serie di parole da censurare.
// - Restituisce il testo con xxx al posto delle parole censurate.
// - Stampa un “badword index” calcolato come il numero di parole censurate su il numero di parole totali


//TESTO DI CONTROLLO
//Sulla collina guardavo il sorgere del nazismo nella sua crudeltà, al mio fianco un albero incurante delle ingiurie dell'uomo mi faceva da palo, improvvisamente iniziò piovere l'acqua mi scorreva sul volto, già rigato dalla sofferenza, avrei dovuto abituarmi a essere chiamato negro di merda, bastardo, stronzo... Da una voce o dall'altra senza alcuna pietà per ciò che io sono soltanto un essere umano.

//chiedo un input all'utente tramite prompt di un testo lungo
var testo = prompt('Inserisci il testo da controllare');

//genero dal testo inserito un array di parole
var re = ( /[\s,.!?]+/ );
var testoArray = testo.split(re);

//creo un array con delle parole da censuratore
var censored = ['casa','palo','albero','acqua','vento','cane','pioggia','felice','nazismo','crudeltà','stronzo','negro','bastardo','merda'];

var censurateTot =0;

//tramite un ciclo scorro il testo inserito e se trovo qualche parola da censurare la sostituisco con // XXX:
function censuratore(arrayA, arrayB){
  var i=0;
  var j=0;
  var censurate = 0;
  var arrayC = [];
 //scorro l'array e sostituisco xxx se trovo un elemento dell'array generato con il testo inserito dall'utente
  while(i<testoArray.length){
    if(arrayA.includes(arrayB[j])){
      censurate=arrayB[j];
      censurate='xxx';
      censurateTot ++;
      //inserisco le parole vietate in un terzo array
      arrayC.push(censurate);
    }else {
      word = arrayB[j];
      arrayC.push(word);
    }
    i++;
    j++;
  }
  return arrayC.join(' ');
}


console.log(censuratore(censored, testoArray));

//infine stampo quante parole sono state censurate sul totale
document.writeln('Il numero di parole censurate è ' + censurateTot + ' su un numero totale di parole di ' + testoArray.length);
document.writeln(' </br> Il testo è pronto per la pubblicazione: </br> ');
document.writeln(censuratore(censored, testoArray));
