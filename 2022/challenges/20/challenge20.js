// Función que formatea las cartas según los criterios establecidos
function howManyReindeers(reindeerTypes, gifts) {
  return []
}
        
// Lista de pruebas
// compuesta por las cartas con problemas de formato
const tests = [
    { reindeerTypes: [
        { type: 'Nuclear', weightCapacity: 50 },
        { type: 'Electric', weightCapacity: 10 },
        { type: 'Gasoline', weightCapacity: 5 },
        { type: 'Diesel', weightCapacity: 1 }
      ], gifts: [
        { country: 'Spain', weight: 30 },
        { country: 'France', weight: 17 },
        { country: 'Italy', weight: 50 }
      ]
    }
  ];

tests.forEach(test => {
  // Llamada a la función
  const letter = howManyReindeers(test.reindeerTypes, test.gifts);
  // Resultado de la función
  console.log("Christmas letter ->", letter);
});