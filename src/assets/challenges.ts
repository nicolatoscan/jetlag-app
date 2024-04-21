export type Challenge = {
  id: number;
  title: string;
  text: string;
  stars: number;
  moreText?: string;
  moreStars?: number;
  random?: boolean;
};
export default [{
  id: 1,
  title: "Settimana Enigmistica",
  text: "Compra una rivista contenente sudoku (e.g. Mondo Sudoku). Risolvi 2 giochi di fronte ad un POI diverso per ogni gioco, senza usare le soluzioni o il telefono per cercare info.",
  stars: 1,
  moreText: "Risolvi un gioco difficile o due sudoku a scelta, con le stesse regole descritte in precedenza.",
  moreStars: 1
},{
  id: 2,
  title: "Cucina Tipica",
  text: "Entrambi i membri devono mangiare qualcosa che non hanno mai mangiato.",
  stars: 1,
  moreText: "Mangaire qualcosa di tipico, è tipico se alla domanda “<Nome Cibo> è un cibo tipico di <Nome Provincia>?” ChatGPT risponde Si.",
  moreStars: 1
},{
  id: 3,
  title: "Vessillologia",
  text: "Disegna la bandiera della provincia in cui sei prendendo spunto da una vera bandiera che trovi in città. L’altro team deve riuscire ad identificare la bandiera da una lista delle bandiere di tutte le province. Deve essere almeno 10x10cm",
  stars: 1,
  moreText: "Sventola la bandiera di fronte ad un POI",
  moreStars: 1
},{
  id: 4,
  title: "Incrociare i flussi",
  text: "Trova una fontana, raccogli almeno 50ml di acqua e portali ad un altra fontana. Non puoi usare google maps per trovare la posizione delle fontane.\nLe due fontane non possono essere in line of sight",
  stars: 2
},{
  id: 5,
  title: "Battesimo",
  text: "Raccogli dell’acqua da una fontana e portala usando le sole mani di fronte ad una chiesa. Il teammate che non porta l’acqua deve usare l’acqua per ungersi la fronte con il pollice, immergendolo almeno tutta l’unghia in orizzontale. Non puoi usare Google per trovare fontane o chiese.",
  stars: 2,
},{
  id: 6,
  title: "Trending",
  text: "Cerca su Google immagini il nome della città, individua le prime 5 foto che sono state fatte da una strada accessibile, segline una e senza controllare ulteriori informazioni dal sito dell’imagine, trova la posizione e scatta una foto con inquadratura simile.",
  stars: 1,
  moreText: "Manda la foto al team nemico, se sbagliano ad individuare la tua provincia vinci una stella",
  moreStars: 1,
  random: true
},{
  id: 7,
  title: "Guida turistica",
  text: "Visita 3 POI, scatta una foto e postala su google con una review dove poni una critica costruttiva.",
  stars: 1
}] as Challenge[];