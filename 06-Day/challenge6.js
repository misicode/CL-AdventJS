// Función para crear un cubo de 3x3x3
function createCube(size) {
  const cubeTop = Array.from(
      {length: size}, 
      (_, i) => (' ').repeat(size-i-1) + ('/\\').repeat(i+1) + ('_\\').repeat(size)
    );
  const cubeBottom = Array.from(
      {length: size}, 
      (_, i) => (' ').repeat(i) + ('\\/').repeat(size-i) + ('_/').repeat(size)
    );

  return [...cubeTop, ...cubeBottom].join('\n');
}

// Lista de pruebas
// compuesta por el tamaño del cubo
const tests = [
    { size: 1 },
    { size: 2 },
    { size: 3 },
    { size: 10 }
  ];

tests.forEach(test => {
  // Llamada a la función
  const cube = createCube(test.size);
  // Resultado de la función
  console.log(cube);
});