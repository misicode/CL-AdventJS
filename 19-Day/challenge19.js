// Función que ordena los juguetes según sus posiciones
function sortToys(toys, positions) {
  return [...toys]
      .sort((a, b) => positions[toys.indexOf(a)] - positions[toys.indexOf(b)]);
}
          
// Lista de pruebas
// compuesta por la lista de juguetes y la lista de posiciones reales
const tests = [
    { toys: ['ball', 'doll', 'car', 'puzzle'], positions: [2, 3, 1, 0] },
    { toys: ['pc', 'xbox', 'ps4', 'switch', 'nintendo'], positions: [3, 1, 0, 2, 4] },
    { toys: ['pc', 'xbox', 'ps4', 'switch', 'nintendo'], positions: [8, 6, 5, 7, 9] },
    { toys: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l'], positions: [1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1111] }
  ];

tests.forEach(test => {
  // Llamada a la función
  const orderedToys = sortToys(test.toys, test.positions);
  // Resultado de la función
  console.log("Ordered toys ->", orderedToys);
});