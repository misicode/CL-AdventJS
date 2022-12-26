// Función para agrupar los regalos en sacos según el peso máximo de cada saco
function carryGifts(gifts, maxWeight) {
  let sack = [];
  let weight = 0;

  return Array.from(gifts
      .filter(gift => gift.length <= maxWeight)
      .reduce((sackGifts, gift) => {
        if(weight + gift.length > maxWeight) {
          sack = [];
          weight = 0;
        }
        sack.push(gift);
        weight += gift.length;
        return sackGifts.add(sack);
      }, new Set())).map(sack => sack.join(' '));
}
          
// Lista de pruebas
// compuesta por los regalos y el paso máximo del saco
const tests = [
    { gifts: ['game', 'bike', 'book', 'toy'], maxWeight: 10 },
    { gifts: ['game', 'bike', 'book', 'toy'], maxWeight: 7 },
    { gifts: ['game', 'bike', 'book', 'toy'], maxWeight: 4 },
    { gifts: ['toy', 'gamme', 'toy', 'bike'], maxWeight: 6 },
    { gifts: ['toy', 'toy', 'toy', 'toy'], maxWeight: 2 },
    { gifts: ['toy', 'toy', 'disk', 'disk', 'toy', 'toy'], maxWeight: 7 }
  ];

tests.forEach(test => {
  // Llamada a la función
  const sackGifts = carryGifts(test.gifts, test.maxWeight);
  // Resultado de la función
  console.log("Sack of gifts ->", sackGifts);
});