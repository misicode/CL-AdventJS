function findFirstRepeated(gifts) {
  const newGifts = gifts.filter((g, i) => gifts.indexOf(g) !== i);
  
  newGifts.push(-1);
  
  return newGifts[0];
}

// Lista de pruebas
const tests = [
  [2, 1, 3, 5, 3, 2],
  [2, 2],
  [2, 4, 3, 5, 1],
  [1],
  [],
  [10, 20, 30],
  [5, 1, 2, 3, 2, 5, 1],
  [12, 20, 30, 11, 20, 12],
];

tests.forEach((test, i) => {
  console.log("Prueba", i+1, "->", findFirstRepeated(test));
});
