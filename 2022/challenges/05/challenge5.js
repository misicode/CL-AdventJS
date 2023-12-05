// Función para determinar la suma más alta de regalos que se pueden repartir
function getMaxGifts(giftsCities, maxGifts, maxCities) {
  return Math.max(...giftsCities
    .reduce((arr, n) => arr.concat(arr.map(a => [n].concat(a))), [[]])
    .filter(arr => arr.length <= maxCities)
    .map(arr => arr.reduce((t, a) => t + a, 0))
    .filter(sum => sum <= maxGifts));
}

// Lista de pruebas
// compuesta por el número de regalos por ciudad, el máximo de regalos y el máximo de ciudades
const tests = [
    { giftsCities: [12, 3, 11, 5, 7], maxGifts: 20, maxCities: 3 },
    { giftsCities: [50], maxGifts: 15, maxCities: 1 },
    { giftsCities: [50], maxGifts: 100, maxCities: 1 },
    { giftsCities: [50, 70], maxGifts: 100, maxCities: 1 },
    { giftsCities: [50, 70, 30], maxGifts: 100, maxCities: 2 },
    { giftsCities: [50, 70, 30], maxGifts: 100, maxCities: 3 },
    { giftsCities: [50, 70, 30], maxGifts: 100, maxCities: 4 },
    { giftsCities: [50, 10, 40, 1000, 500, 200], maxGifts: 199, maxCities: 4 },
    { giftsCities: [50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], maxGifts: 1000, maxCities: 1000 }
  ];

tests.forEach(test => {
  // Llamada a la función
  const maxSumGifts = getMaxGifts(test.giftsCities, test.maxGifts, test.maxCities);
  // Resultado de la función
  console.log("Maximun sum of gifts ->", maxSumGifts);
});