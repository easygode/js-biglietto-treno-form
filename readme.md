Esercizio di oggi 22.02.2023: calcolo del prezzo del biglietto del treno
Cartella / Repo: js-biglietto-treno-form

Descrizione:
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo, come da screenshot allegato. Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
Ricordate: il primo push dovrà essere un file README.md (potete scrivere testo senza concentrarvi sullo stile markdown) contenente la risoluzione dell’esercizio in linguaggio naturale!

A. STEPS JS

1. imposta variabile costoKM = 0.21
2. imposta variabile numeroKM con tipo output numero
2a. scrivi output numeroKM in console.log
3. imposta variabile etaUtente con tipo output numero
3a. scrivi output etaUtente in console.log
4. calcola e imposta variabile prezzo (numeroKM * costoKM)
5. SE etaUtente < 18 calcola prezzo - 20% in forma umana
   altrimenti SE etaUtente > 65 calcola prezzo - 40% in forma umana
6. Al click sul bottone "Genera" in HTML questo invocherà una  funzione che visualizzerà una sezione HTML con i dettagli del biglietto
7. Al click sul bottone "Annulla" in HTML questo invocherà una finzione che  svuoterà i campi input e farà sparire la sezione HTML con i dettagli del biglietto

B. STEPS HTML
---MILESTONE 1----
1. Crea campo input per numeroKM
2. Crea campo input per etaUtente
3. Scrivi il prezzo finale

---MILESTONE 2----
4. Crea la pagina HTML come da bozza
5. Crea un form per gli input
6. Crea il bottone "Genera" che calcolerà il prezzo e mostrerà una sezione HTML con i dettagli del biglietto
7. Crea il bottone "Annulla" che svuoterâ i campi input e farà sparire la sezione HTML con i dettagli del biglietto
8. Mostra la sezione HTML con i dettagli del biglietto al click sul bottone "Genera"
9. Nascondi la sezione HTML con i dettagli del biglietto al click sul bottone "Annulla"

C. STEPS CSS
1. Applica lo sfondo al body come da bozza
2. Stilizza il form per l'input dell'utente
3. Stilizza la sezione con i dettagli del biglietto
4. Crea una o più classi per mostrare o nascondere i dettagli del biglietto