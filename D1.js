/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
 */ /* SCRIVI QUI LA TUA RISPOSTA */
/* Le variabili possono avere diversi tipi di valori:
Valore numerico espresso quindi da cifre , numeri interi, decimali e numeri sia positivi che negativi ex( let num=10.5-let num2=-4 let num3 = 0)
Valore di stringa , ovvero di singoli caratteri o il susseguirsi finito di carattari ex(let nome="Umberto" ) le stringhe nella sintassi devono essere espresse con degli apici.
Valori Booleani, che hanno solo due valori true e false  utili a far prendere decisoni al codice 


/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA  */
let myname = "Lorenzo";
/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 12;
let num2 = 20;
let sum = num1 + num2;
console.log("somma di num 1 + num 2 ", sum);
/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x = 12;
console.log("valore della variabile x", x);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/ myname = "DiLorenzo";
console.log(" il  valore di my name sarà DiLorenzo", myname);
const myname2 = "Lorenzo";
myname2 = "DiLorenzo";
console.log(
  myname2
); /* dalla console si evince che c'è un errore di assegnazione alla variabile myname2 poiché non può differire dal suo valore originario espresso con la keyword constant*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let minus = x - 4;
console.log("riusltato di x-4", minus);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (
*/

/* SCRIVI QUI LA TUA RIsuggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).SPOSTA */
let name1;
name1 = "john";
let name2;
name2 = "John";
console.log(name1 !== name2);
