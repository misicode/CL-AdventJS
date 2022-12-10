// Función para determinar el número máximo de cajas de regalo que se pueden entregar
function distributeGifts(packOfGifts, reindeers) {
  return Math.floor(
    reindeers.map(reindeer => 2*(reindeer.length))
      .reduce((totalWeight, weight) => totalWeight + weight) / 
    packOfGifts.map(gift => gift.length)
      .reduce((totalWeight, weight) => totalWeight + weight)
  );
}

// Lista de pruebas
// compuesta por los paquetes de regalo y los renos disponibles
const tests = [
    { packOfGifts: ["book", "doll", "ball"], reindeers: ["dasher", "dancer"] },
    { packOfGifts: ['a', 'b', 'c'], reindeers: ['d', 'e'] },
    { packOfGifts: ['videogames', 'console'], reindeers: ['midu'] },
    { packOfGifts: ['game', 'videoconsole', 'computer'], reindeers: ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'] },
    { packOfGifts: ['music'], reindeers: ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'] }
  ];

tests.forEach(test => {
  // Llamada a la función
  const maxBoxGifts = distributeGifts(test.packOfGifts, test.reindeers);
  // Resultado de la función
  console.log("Max Boxes of Gifts ->", maxBoxGifts);
});