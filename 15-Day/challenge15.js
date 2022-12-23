// Función para determinar el orden de los adornos del árbol de navidad
function decorateTree(base) {
  const combinations = new Map([
    ['BB', 'B'],
    ['RR', 'R'],
    ['PP', 'P'],
    ['BR', 'P'],
    ['RB', 'P'],
    ['BP', 'R'],
    ['PB', 'R'],
    ['RP', 'B'],
    ['PR', 'B']
  ]);
  const baseTree = base.split(' ');
  let tree = [];

  baseTree
    .slice(0, -1)
    .reduce((line, _) => (
        (line = line.slice(1)
                    .map((l, i) => combinations.get(line[i] + l))),
        tree.unshift(line.join(' ')),
        line
      ), baseTree);

  return [...tree, base];
}
      
// Lista de pruebas
// compuesta por la base del árbol de navidad
const tests = [
    { base: 'B P R P' },
    { base: 'B B' },
    { base: 'B B P R P R R' },
    { base: 'R R P R R' }
  ];

tests.forEach(test => {
  // Llamada a la función
  const tree = decorateTree(test.base);
  // Resultado de la función
  console.log("Christmas tree ->", tree);
});