'use strict'

//1. imposta variabile costoKM = 0.21
const costoKM = 0.21;

//2. imposta variabile numeroKm con tipo output numero
let numeroKm = document.getElementById('inputKm').value;

//2a. scrivi output numeroKM in console.log
console.log ({numeroKm});

//3. imposta variabile etaUtente con tipo output numero
let etaUtente = document.getElementById('eta').value;

//3a. scrivi output etaUtente in console.log
console.log ({etaUtente});

//4. calcola e imposta variabile prezzo (numeroKM * costoKM)
let prezzo = document.getElementById('inputKm').value * costoKM;
function TicketPrice() {
    prezzo = document.getElementById('inputKm').value * costoKM;
    console.log (numeroKm);
    console.log (etaUtente);
    console.log (prezzo);
    alert(prezzo); 
}

//5. SE etaUtente < 18 calcola prezzo - 20% in forma umana
   //altrimenti SE etaUtente > 65 calcola prezzo - 40% in forma umana
   if (etaUtente = under) {
    prezzo = prezzo - prezzo * 0.2;
   } else if (etaUtente = senior) {
    prezzo = prezzo - prezzo * 0.4;
    }

//6. Al click sul bottone "Genera" in HTML questo invocherà una  funzione che visualizzerà una sezione HTML con i dettagli del biglietto
//7. Al click sul bottone "Annulla" in HTML questo invocherà una finzione che  svuoterà i campi input e farà sparire la sezione HTML con i dettagli del biglietto
