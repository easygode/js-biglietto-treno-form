'use strict';

//1. importa e crea variabile inputName
const inputName = document.querySelector('#name');

//2. importa e crea variabile inputKm
const inputKm = document.getElementById('km');

//3. importa e crea variabile inputAge
const inputAge = document.getElementById('age');

//4. importa e crea variabile buttonAge
const buttonGenerate = document.getElementById('generate');

//5. Crea evento al click per ottenere i valori dgli input e calcolare il prezzo del biglietto

buttonGenerate.addEventListener('click', 
function() {

    //5.1 crea variabili per i valore degli input
    const inputNameValue = inputName.value;
    const inputKmValue = Number(inputKm.value);
    const inputAgeValue = inputAge.value;

console.log ({inputNameValue, inputKmValue, inputAgeValue});
    
    //5.2 crea e assegna variabile ticketPrice
    let ticketPrice = 0.21 * inputKmValue;

    //5.3 crea condizioni di ticketPrice con sconto
    if(inputAgeValue === 'underage') {
        ticketPrice = ticketPrice * 0.8;
    } else if(inputAgeValue === 'over') {
        ticketPrice = ticketPrice * 0.6;
    }

ticketPrice = ticketPrice.toFixed(2);

console.log(ticketPrice);
}
)

//const costoKM = 0.21;

//2. imposta variabile numeroKm con tipo output numero
//let numeroKm = document.getElementById('inputKm').value;

//2a. scrivi output numeroKM in console.log
//console.log ({numeroKm});

//3. imposta variabile etaUtente con tipo output numero
//let etaUtente = document.getElementById('eta').value;

//3a. scrivi output etaUtente in console.log
//console.log (document.getElementById("eta").value);





buttonGenerate.addEventListener('click', 
function() {

    const inputNameValue = inputName.value;
    const inputKmValue = Number(inputKm.value);
    const inputAgeValue = inputAge.value;

console.log ({inputNameValue, inputKmValue, inputAgeValue});

    let ticketPrice = 0.21 * inputKmValue;

    if(inputAgeValue === 'underage') {
        ticketPrice = ticketPrice * 0.8;
    } else if(inputAgeValue === 'over') {
        ticketPrice = ticketPrice * 0.6;
    }

ticketPrice = ticketPrice.toFixed(2);

console.log(ticketPrice);
}
)


//console.log (under);
//1. imposta variabile costoKM = 0.21
//const costoKM = 0.21;

//2. imposta variabile numeroKm con tipo output numero
//let numeroKm = document.getElementById('inputKm').value;

//2a. scrivi output numeroKM in console.log
//console.log ({numeroKm});

//3. imposta variabile etaUtente con tipo output numero
//let etaUtente = document.getElementById('eta').value;

//3a. scrivi output etaUtente in console.log
//console.log (document.getElementById("eta").value);

//4. calcola e imposta variabile prezzo (numeroKM * costoKM)
//let prezzo = document.getElementById('inputKm').value * costoKM;
//function TicketPrice() {
    //prezzo = document.getElementById('inputKm').value * costoKM;
    //console.log (numeroKm);
    //console.log (etaUtente);
    //console.log (prezzo);
    //alert(prezzo); 
//}

//5. SE etaUtente < 18 calcola prezzo - 20% in forma umana
   //altrimenti SE etaUtente > 65 calcola prezzo - 40% in forma umana
   //if (etaUtente = under) {
    //prezzo = prezzo - prezzo * 0.2;
   //} else if (etaUtente = senior) {
    //prezzo = prezzo - prezzo * 0.4;
    //}

//6. Al click sul bottone "Genera" in HTML questo invocherà una  funzione che visualizzerà una sezione HTML con i dettagli del biglietto

//7. Al click sul bottone "Annulla" in HTML questo invocherà una finzione che  svuoterà i campi input e farà sparire la sezione HTML con i dettagli del biglietto
