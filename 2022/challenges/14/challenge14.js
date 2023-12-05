// Función para determinar el camino con el menor tiempo posible
function getOptimalPath(path) {
  return path.reduceRight((times, arr) => {
    return arr.map((item, i) => item + Math.min(times[i], times[i + 1]));
  })[0];
}
    
// Lista de pruebas
// compuesta por la lista de tiempos de cada camino
const tests = [
    { path: [ [0], [7, 4], [2, 4, 6] ] },
    { path: [ [0], [2, 3] ] },
    { path: [ [0], [3, 4], [9, 8, 1] ] },
    { path: [ [1], [1, 5], [7, 5, 8], [9, 4, 1, 3] ] },
    { path: [ [1], [1, 5], [7, 5, 8], [9, 4, 1, 3], [-1, -1, -1, -1, -1] ]}
  ];

tests.forEach(test => {
  // Llamada a la función
  const optimalPath = getOptimalPath(test.path);
  // Resultado de la función
  console.log("Optimal path ->", optimalPath);
});