// Función que determina los números con dígitos del cual no hay tinta disponible
function dryNumber(dry, numbers) {
  return Array.from(
    { length: numbers },
    (_, i) => i + 1).filter(n => `${n}`.includes(dry));
}
          
// Lista de pruebas
// compuesta por el dígito del que no tenemos tinta y el número de códigos de barra a imprimir
const tests = [
    { dry: 1, numbers: 15 },
    { dry: 2, numbers: 20 },
    { dry: 3, numbers: 33 },
    { dry: 4, numbers: 45 },
    { dry: 5, numbers: 55 },
    { dry: 9, numbers: 8 }
  ];

tests.forEach(test => {
  // Llamada a la función
  const missingPrint = dryNumber(test.dry, test.numbers);
  // Resultado de la función
  console.log("Missing print ->", missingPrint);
});