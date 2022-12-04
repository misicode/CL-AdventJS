// Función para contar las horas extras a trabajar
function countHours(year, holidays) {
  return hours = holidays.reduce((totalHours, holiday) => {
    const day = (new Date(`${holiday}/${year}`)).getDay();
    return (day == 6 || day == 0) ? totalHours : totalHours + 2;
  }, 0);
}

// Llamada y resultado de la función
// con diferentes años y días festivos
console.log("Hours -> ", countHours(2023, ['01/06', '04/01', '12/25']));
console.log("Hours -> ", countHours(2022, ['01/06', '04/01', '12/25']));
console.log("Hours -> ", countHours(1985, ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25']));
console.log("Hours -> ", countHours(2000, ['01/01']));