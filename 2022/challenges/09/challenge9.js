// Función que calcula los segundos transcurridos para encender todos los leds
function countTime(leds) {
  const ledsOff = leds.join('').split('1');
  ledsOff[0] += ledsOff.pop();
  
  return Math.max(...ledsOff.map(l => l.length)) * 7;
}
    
// Lista de pruebas
// compuesta por las posiciones de los leds encendidos o apagados
const tests = [
    { leds: [0, 1, 1, 0, 1] },
    { leds: [0, 0, 0, 1] },
    { leds: [0, 0, 1, 0, 0] },
    { leds: [1, 0, 0, 1, 0, 0] },
    { leds: [1, 1, 0, 0, 0, 0] },
    { leds: [1, 1, 1] }
  ];

tests.forEach(test => {
  // Llamada a la función
  const countSeconds = countTime(test.leds);
  // Resultado de la función
  console.log("Seconds elapsed ->", countSeconds);
});