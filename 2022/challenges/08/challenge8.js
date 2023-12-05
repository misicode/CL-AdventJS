// Función para determinar si la pieza es un palíndromo
function checkPart(part) {
  return [...part].some((_, i) => {
    const newPart = [...part];
    newPart.splice(i, 1);

    const partReverse = [...newPart].reverse().join('');
    return newPart.join('') === partReverse;
  });
}
    
// Lista de pruebas
// compuesta por el nombre de las piezas de repuesto
const tests = [
    { part: "uwu" },
    { part: "miidim" },
    { part: "midu" },
    { part: "lolol" },
    { part: "yolooloy" },
    { part: "zzzoonzzz" }
  ];

tests.forEach(test => {
  // Llamada a la función
  const validPart = checkPart(test.part);
  // Resultado de la función
  console.log("Valid piece? ->", validPart);
});