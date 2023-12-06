// Función para contar los días que faltan para Navidad
function daysToXmas(date) {
  const dateXmas = new Date('Dec 25, 2021')
  const days = Math.ceil((dateXmas - date) / (1000 * 60 * 60 * 24))
  return days
}

// Arreglo de días
const dates = [
    new Date('Dec 1, 2021'), // 24
    new Date('Dec 24, 2021 00:00:01'), // 1
    new Date('Dec 24, 2021 23:59:59'), // 1
    new Date("December 20, 2021 03:24:00"), // 5
    new Date('Dec 25, 2021'), // 0
    new Date('Dec 26, 2021'), // -1
    new Date('Dec 31, 2021'), // -6
    new Date('Jan 1, 2022 00:00:01'), // -7
    new Date('Jan 1, 2022 23:59:59') // -7
  ]

dates.forEach(date => {
    // Llamada a la función
    const daysXmas = daysToXmas(date)
    // Resultado de la función
    console.log(date,"->",daysXmas)
});
