EX - Animali Preferiti
===
## Consegna:
Utilizzando React direttamente all’interno del documento HTML, segui le milestone e completa l'esercizio.

<hr>

### Milestone 1:
1. Montare un componente React all'interno dell'elemento con classe ".lista-animali".
2. Il componente deve includere:
- Un elemento <'details'> con titolo "Animali", che contiene:
- Una lista <'ul'> statica, che viene creata a partire da un array di stringhe (animals) dove ciascuna stringa rappresenta il nome di un animale.

Obiettivo: Mostrare la struttura base della lista di animali con una <'details'> che può essere espansa o contratta.

<hr>

### Milestone 2:
1. Trasforma l'array animals usando lo useState (l'arrray di default è vuoto).

2. Aggiungi un bottone "aggiunig animale" sopra a <'details'>.

3. Cliccando il bottone, un animale casuale viene aggiunto alla lista.

4. Usa un array predefinito per scegliere casualmente:
["Cane", "Gatto", "Pappagallo", "Cavallo", "Panda"].

5. L’animale selezionato deve essere aggiunto all’interno della lista <'ul'> come <'li'>.

Obiettivo: L’utente può vedere gli animali aggiunti dinamicamente nella lista.

<hr>

### Milestone 3:
Partendo da un componente modal fornito:
1. Espanderlo affinché:
- La vecchia prop content può essere usata per passare un componente qualsiasi.
- Un nuovo div in fondo alla modale contiene il bottone Annulla e un nuovo bottone Conferma.
- Una nuova prop onConfirm si aspetta una funzione per gestire l’azione di conferma.

2. Sostituisci l'aggiunta casuale dell'animale con una modale interattiva:
- Cliccando il bottone "Aggiungi Animale," si apre una modale.
- La modale include un input di testo (passato al prop content) per inserire il nome di un animale.
- Conferma: Aggiunge l’animale alla lista e chiude la modale.
- Annulla: Chiude la modale senza modificare la lista.

Obiettivo: L’utente può aggiungere animali specifici utilizzando la modale.

### Bonus: 
Utilizza l'API:
"https://boolean-spec-frontend.vercel.app/freetestapi/animals?search=animalName", per effettuare una ricerca dell'animale basata sul contenuto dell'input: 

- Sostituisci"animalName" con il valore inserito dall'utente.
- Assicurati di gestire lo stato di caricamento mentre l'API è in fase di risposta (mostra un messaggio come "Caricamento...").

1. Dal primo risultato restituito dall'array (se presente), crea un oggetto che abbia queste proprietà:
- name: Il nome dell'animale.
- description: La descrizione dell'animale (o un messaggio predefinito come "Descrizione non disponibile" se manca).
- image: L'immagine dell'animale (usa un'immagine di default se non è disponibile).

2. Aggiungi l'oggetto alla lista degli animali e visualizzalo come una card, con:
- Titolo: Il nome dell'animale.
- Immagine (se presente).
- Descrizione.

3. Gestione degli errori: 
- Se la ricerca non restituisce risultati, informa l'utente con un messaggio di errore. (es.: "Nessun animale trovato").
- Mostra un messaggio in caso di problemi di rete o altri errori. (es.: "Errore durante la ricerca dell'animale").

Obiettivo: Permetti agli utenti di aggiungere animali specifici utilizzando l'API per ottenere informazioni, mostrando eventuali errori in modo chiaro.