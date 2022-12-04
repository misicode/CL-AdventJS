// Función para contar las horas extras a trabajar
function countHours(year, holidays) {
  return hours = holidays.reduce((totalHours, holiday) => {
    const day = (new Date(`${holiday}/${year}`)).getDay();
    return (day == 6 || day == 0) ? totalHours : totalHours + 2;
  }, 0);
}

// Año y días festivos
const year = 2022;
const holidays = ['01/06', '04/01', '12/25'];
// Llamada y resultado de la función
console.log(countHours(year, holidays));