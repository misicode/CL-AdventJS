// Función para filtrar los regalos que se deben reponer
function getGiftsToRefill(a1, a2, a3) {
  const nA1 = Array.from(new Set(a1));
  const nA2 = Array.from(new Set(a2));
  const nA3 = Array.from(new Set(a3));

  return [...nA1, ...nA2, ...nA3].filter(gift => (nA1.includes(gift) + nA2.includes(gift) + nA3.includes(gift)) === 1);
}
  
// Lista de pruebas
// compuesta por los tres almacenes con los regalos que poseen
const tests = [
    { a1: ['bici', 'coche', 'bici', 'bici'], a2: ['coche', 'bici', 'muñeca', 'coche'], a3: ['bici', 'pc', 'pc'] },
    { a1: [], a2: [], a3: [] },
    { a1: ['a', 'a'], a2: ['a', 'a'], a3: ['a', 'a'] },
    { a1: ['a', 'a'], a2: ['b', 'b'], a3: ['c', 'c'] },
    { a1: ['a', 'b'], a2: ['c', 'd'], a3: ['e', 'f'] }
  ];

tests.forEach(test => {
  // Llamada a la función
  const giftsToRefill = getGiftsToRefill(test.a1, test.a2, test.a3);
  // Resultado de la función
  console.log("Gifts to refill ->", giftsToRefill);
});