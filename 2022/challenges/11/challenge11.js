// Función para conocer la proporción de trabajo completado
function getCompleted(part, total) {
  const a = part.split(':')
              .reduce((t, n, i) => t + n * 60 ** (2-i), 0);
  const b = total.split(':')
              .reduce((t, n, i) => t + n * 60 ** (2-i), 0);

  let div = a, res = b, temp;
  while (res) {
    temp = res;
    res = div % res;
    div = temp;
  }

  return `${a/div}/${b/div}`;
}
  
// Lista de pruebas
// compuesta por el tiempo que llevan trabajando y el tiempo de duración total
const tests = [
    { part: '01:00:00', total: '03:00:00' },
    { part: '02:00:00', total: '04:00:00' },
    { part: '01:00:00', total: '01:00:00' },
    { part: '00:10:00', total: '01:00:00' },
    { part: '01:10:10', total: '03:30:30' },
    { part: '02:20:20', total: '03:30:30' },
    { part: '03:30:30', total: '05:50:50' }
  ];

tests.forEach(test => {
  // Llamada a la función
  const completed = getCompleted(test.part, test.total);
  // Resultado de la función
  console.log("Proportion completed ->", completed);
});