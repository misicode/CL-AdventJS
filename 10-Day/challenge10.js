// Función que evalua que el recorrido entre ciudades forme una parábola
function checkJump(heights) {
  const maxIndex = heights.indexOf(Math.max(...heights));
  const leftHeights = heights.slice(0, maxIndex);
  const rightHeights = heights.slice(maxIndex + 1);
  const jumpUp = leftHeights.slice(1).every((height, i) => height >= leftHeights[i]);
  const jumpDown = rightHeights.slice(1).every((height, i) => height <= rightHeights[i]);
  
  return leftHeights.length > 0 && rightHeights.length > 0 && jumpUp && jumpDown;
}

// Lista de pruebas
// compuesta por las alturas de las ciudades visitadas
const tests = [
    { heights: [1, 2, 1] },
    { heights: [1, 3, 8, 5, 2] },
    { heights: [1, 7, 3, 5] },
    { heights: [1, 2, 3, 2, 1] },
    { heights: [1, 2, 2, 2, 1] },
    { heights: [0, 1, 0] },
    { heights: [2, 2, 2, 2] },
    { heights: [1, 2, 3] },
    { heights: [1, 2, 3, 2, 1, 2, 3] },
    { heights: [1, 1000, 900, 800] },
    { heights: [1, 1000, 100, 800] },
    { heights: [1, 1, 1, 1, 1, 1, 1, 1, 2, 1] },
    { heights: [1, 2, 3, 1, 3, 1] },
    { heights: [1, 3, 2, 5, 4, 3, 2, 1] }
  ];

tests.forEach(test => {
  // Llamada a la función
  const checkParabola = checkJump(test.heights);
  // Resultado de la función
  console.log("Form a parabola ->", checkParabola);
});