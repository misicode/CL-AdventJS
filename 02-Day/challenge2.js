// Función para contar las horas extras a trabajar
function countHours(year, holidays) {
  return holidays.reduce((totalHours, holiday) => {
    const day = (new Date(`${holiday}/${year}`)).getDay();
    return (day == 6 || day == 0) ? totalHours : totalHours + 2;
  }, 0);
}

// Lista de pruebas
// compuesta por el año y los días festivos
const tests = [
  { year: 2023, holidays: ['01/06', '04/01', '12/25'] },
  { year: 2022, holidays: ['01/06', '04/01', '12/25'] },
  { year: 1985, holidays: ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25'] },
  { year: 2000, holidays: ['01/01'] }
];

tests.forEach(test => {
  // Llamada a la función
  const extraHours = countHours(test.year, test.holidays);
  // Resultado de la función
  console.log("Extra Hours ->", extraHours);
});