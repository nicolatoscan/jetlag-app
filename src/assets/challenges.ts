export type Challenge = {
  id: number;
  title: string;
  text: string;
  stars: number;
  moreText?: string;
  moreStars?: number;
  random?: boolean;
};
const challenges: Challenge[] = [{
  id: 1,
  title: "Settimana Enigmistica",
  text: "Compra una rivista contenente sudoku (e.g. Mondo Sudoku). Risolvi 2 giochi di fronte ad un POI diverso per ogni gioco, senza usare le soluzioni o il telefono per cercare info.",
  stars: 1,
  moreText: "Risolvi un gioco difficile o due sudoku a scelta, con le stesse regole descritte in precedenza.",
  moreStars: 1
}, {
  id: 2,
  title: "Cucina Tipica",
  text: "Entrambi i membri devono mangiare qualcosa che non hanno mai mangiato.",
  stars: 1,
  moreText: "Mangaire qualcosa di tipico, è tipico se alla domanda “<Nome Cibo> è un cibo tipico di <Nome Provincia>?” ChatGPT risponde Si.",
  moreStars: 1
}, {
  id: 3,
  title: "Vessillologia",
  text: "Disegna la bandiera della provincia in cui sei prendendo spunto da una vera bandiera che trovi in città. L’altro team deve riuscire ad identificare la bandiera da una lista delle bandiere di tutte le province. Deve essere almeno 10x10cm",
  stars: 1,
  moreText: "Sventola la bandiera di fronte ad un POI",
  moreStars: 1
}, {
  id: 4,
  title: "Incrociare i flussi",
  text: "Trova una fontana, raccogli almeno 50ml di acqua e portali ad un altra fontana. Non puoi usare google maps per trovare la posizione delle fontane.\nLe due fontane non possono essere in line of sight",
  stars: 2
}, {
  id: 5,
  title: "Battesimo",
  text: "Raccogli dell’acqua da una fontana e portala usando le sole mani di fronte ad una chiesa. Il teammate che non porta l’acqua deve usare l’acqua per ungersi la fronte con il pollice, immergendolo almeno tutta l’unghia in orizzontale. Non puoi usare Google per trovare fontane o chiese.",
  stars: 2,
}, {
  id: 6,
  title: "Trending",
  text: "Cerca su Google immagini il nome della città, individua le prime 5 foto che sono state fatte da una strada accessibile, segline una e senza controllare ulteriori informazioni dal sito dell’imagine, trova la posizione e scatta una foto con inquadratura simile.",
  stars: 1,
  moreText: "Manda la foto al team nemico, se sbagliano ad individuare la tua provincia vinci una stella",
  moreStars: 1,
  random: true
}, {
  id: 7,
  title: "Guida turistica",
  text: "Visita 3 POI, scatta una foto e postala su google con una review dove poni una critica costruttiva.",
  stars: 1
}, {
  id: 8,
  title: "Telefoto",
  text: "Fai una foto da più di 500m al tuo teammate, la foto non può essere scattata con membri del team nella stazione ferroviaria.\nNessun membro del team può essere all’interno della stazione",
  stars: 1,
  moreText: "Nella foto è presente un POI",
  moreStars: 1
}, {
  id: 9,
  title: "Postcard",
  text: "Manda una cartoline a casa di entrambi i membri del team avversario e fatti una foto davanti a uno dei soggetti delle cartolina.",
  stars: 2
}, {
  id: 10,
  title: "VacanzAI",
  text: "Chiedi alla tua AI di fiducia:\n  Ho ho 30 minuti da spendere a <Nome Città>, sono alla stazione dei treni in questo momento, cosa posso fare nel poco tempo che ho? Non ho un'auto o soldi da spendere, voglio visitare il centro storico.\n  Generami 5 idee diverse e consigliami quanto tempo spendere per ogni attività\n  Scegli 2 delle risposte e segui i consigli il più fedelmente possibile",
  stars: 2,
  random: true
}, {
  id: 11,
  title: "Geocaching",
  text: "Trova almeno una Geocache\n  Usa il sito https://www.geocaching.com/ e aiutati con la precisa coordinata GPS",
  stars: 1,
  moreText: "Non usare il suggeriemento",
  moreStars: 1
}, {
  id: 12,
  title: "Consiglio del locale",
  text: "Chiedi ad una persona che non conosci un suggerimento per qualcosa da visitare e poi visitalo per almeno 10 minuti",
  stars: 1,
  random: true
}, {
  id: 13,
  title: "Freccette",
  text: "Vai ad un info-point e recupera una cartina della città, o se non la trovi puoi usare una piantina in qualche stazione.\n  Lancia una pallina di scotch da più di 2m di distanza e vai dove si appiccica.",
  stars: 1,
  moreText: "Dal punto selezionato vedi uno dei POI della citta.",
  moreStars: 1
}, {
  id: 14,
  title: "Pirati!",
  text: "Crea una barca di carta, dalle un nome e falla salpare in acqua presente naturalmente (stagno, lago, fiume o mare), scattati una foto con la barca.",
  stars: 1
}, {
  id: 15,
  title: "Imita 3 statue",
  text: "Trova 3 statue diverse ad almeno 500m di distanza dalla precedente, imitane la posa e scatta una foto all’imitatore e alla statua. Entrambi i membri devono imitare le statue",
  stars: 1
}, {
  id: 16,
  title: "Alberto Angela",
  text: "Filma un documentario di almeno 2 minuto dove racconti i lati più interessanti della città e mostri almeno 2 POI.\n  Entrambi i membri del team devo essere nel documentario,\n  Il documentario deve essere formato da almeno 5 clip di scene diverse, e 1 minuto di parlato.\n  Non puoi cercare informazioni online, le informazioni non devono essere veritiere",
  stars: 1
}, {
  id: 17,
  title: "Knighted",
  text: "Trova un castello ed procurati un bastone. Performa una cerimonia di knighting di fronte al castello in cui entrambi i membri diventano cavalieri ",
  stars: 1
}, {
  id: 18,
  title: "Blind Guide",
  text: "Se decidi di fare questa challenge non usare google maps per controllare i punti di interesse della citta.\n  Un membro del team definito guida, rimane fermo dal punto di inizio della challenge. L’altro membro definito turista deve raggiungere un POI.\n  Il turista si allontana per 2 minuti a piedi dalla guida in direzione a sua scelta, senza consultare mappe.\n  La guida, al termine dei due minuti, seleziona un POI randomico, chiama il turista e lo guida in chiamata vocale, senza video, fino alla destinazione. Il turista non può condividere la sua posizione con la guida.\n  Al raggiungimento del POI dal turista i ruoli si invertono e la nuova guida, guiderà il nuovo turista ad un diverso POI seleziona casualmente.",
  stars: 2,
  random: true
}, {
  id: 19,
  title: "Street art",
  text: "Fare lo spelling del nome della città usando lettere leggibili in graffiti trovati nella città. Ogni lettera trovata può essere usata quante volte si vuole.",
  stars: 1,
  moreText: "Almeno una lettera deve essere in line of sight da un POI.",
  moreStars: 1
}, {
  id: 20,
  title: "Caccia al Tesoro Nazionale",
  text: "Scegli un POI e una volta arrivato al POI costruisci una piccola caccia al tesoro da 3 “indizi” che ti porta ad un altro POI. Ogni indizio deve puntare a qualcosa di chiaramente riconoscibile o indicare una direzione di viaggio finchè non si trova qualcosa. Dopo aver creato il primo indizio devi andare nel luogo indicato e in quel luogo creare il secondo indizio. Stessa cosa con il terzo, e il terzo indizio deve puntare al secondo POI. Un’indizio è composto da qualche frase e deve essere un minimo “misterioso”. \n  Al completamento della challenge manda i 3 indizi al team nemico, in modo tale da verificare che non siano stati fatti in maniera errata.",
  stars: 2
}, {
  id: 21,
  title: "Briscoletta",
  text: "Compra il mazzo di carte della regione, completa 2 partite a carte a 2 giochi diversi in 2 POI diversi",
  stars: 1
}, {
  id: 22,
  title: "Memoria mappografica",
  text: "Scegli un POI randomico, osserva come arrivarci dal punto in cui sei per 15 secondi sulla mappa. Raggiungi il POI senza controllare più google maps.",
  stars: 1,
  random: true
}, {
  id: 23,
  title: "Art Attack",
  text: "Scegli casualmente un POI, raggiungilo e facci un disegno a colori di almeno 15x15cm. Successivamente invia una foto del POI e del disegno al team nemico, il disegno deve essere dichiarato riconoscibile dal team nemico.",
  stars: 1,
  random: true
}, {
  id: 24,
  title: "Cream of the crop",
  text: "Visita i due POI più importanti della città (secondo Tripadvisor), spendici almeno 10 minuti.",
  stars: 1
}, {
  id: 25,
  title: "Gradient descent",
  text: "Devi raggiungi un POI randomico. Puoi muoverti solo seguendo una persona che non conosci e non ci hai interazioni. Devi cambiare persona ogni 3 minuti.",
  stars: 1,
  random: true
}, {
  id: 26,
  title: "Low Effort",
  text: "Visita la città per almeno 45 minuti visitando almeno 3 POI",
  stars: 1
}, {
  id: 27,
  title: "Relax",
  text: "Idratati e rilassati, compra una bevanda, vai al parco o POI più vicino e spendi almeno 30 minuti là",
  stars: 1
}, {
  id: 28,
  title: "È il pensiero che conta",
  text: "Compra un piccolo souvenir (non cartolina) per il team nemico, deve essere chiaramente del capoluogo e più schifoso è meglio è (stai budget insomma).\n  Visita uno degli elementi rappresentati dal souvenier.",
  stars: 1
}, {
  id: 29,
  title: "Support your LGS",
  text: "Acquista una bustina di carte ad un LGS della città. Spacchetta le carte di fronte ad un POI.",
  stars: 1
}, {
  id: 30,
  title: "Tiger",
  text: "Trova un negozio Tiger, compra un accessorio per fare un cosplay e fai un foto di fronte ad un POI e mantieni il costume finche non esci dalla città",
  stars: 1
}, {
  id: 31,
  title: "Influencer",
  text: "Crea due reels su due POI casuali e condividi il risultato con l’altro team.\n  I due video devono essere di almeno 30 secondi. Deve avere almeno 5 riprese diverse con movimenti di macchina diversi. Scegli una canzone di sottofondo e aggiungi almeno 3 testi.",
  stars: 1,
  random: true
}, {
  id: 32,
  title: "Haiku Urbano",
  text: "Componi due haiku (poesia giapponese di 3 versi di 5, 7 e 5 sillabe) ispirato a due POI randomici diversi. Recita ogni haiku di fronte al POI e registra un video.\n  Non puoi usare AI in nessuna fase della challenge.",
  stars: 1,
  random: true
}, {
  id: 33,
  title: "Naturalista",
  text: "Identifica 10 piante diverse con iNaturalist.",
  stars: 1
}, {
  id: 34,
  title: "Qualcosa di interessante",
  text: "Senza cercare su YouTube, vai in qualche posto a cui è dedicato un video su YouTube di almeno 10,000 visualizzazioni.\n  Una volta che sei sul posto, controlla YouTube per confermare se esiste tale video. Se non esiste la challenge non è completata e puoi ripeterla.\n  Il titolo deve includere il nome del posto o deve chiaramente riferirsi ad esso.",
  stars: 1
}, {
  id: 35,
  title: "I wanna be the very best",
  text: "Ogni membro del team deve piazzare 3 pokemon in palestre del proprio team su pokemon go. Le palestre non possono essere sconfitte per fare cambiare team. \n  Entrambi i membri del team non possono mettere un pokemon nella stessa palestra",
  stars: 1
}];

const challengesMap: { [id: number]: Challenge } = {};
challenges.forEach(c => {
  challengesMap[c.id] = c;
});
export default challengesMap;

