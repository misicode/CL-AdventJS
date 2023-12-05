// Función que devuelve el nombre del mejor trineo para cubrir la distancia establecida
function selectSleigh(distance, sleighs) {
  const best = sleighs.filter(sleigh => sleigh.consumption * distance <= 20).at(-1);
  
  return best ? best.name : null;
}
    
// Lista de pruebas
// compuesta por la distancia a recorrer y los trineos ordenados de peor a mejor
const tests = [
    { distance: 1, sleighs: [
        { name: 'pheralb', consumption: 0.3 },
        { name: 'TMChein', consumption: 0.5 }
      ] },
    { distance: 10, sleighs: [
        { name: 'Pedrosillano', consumption: 1 },
        { name: 'SamarJaffal', consumption: 5 }
      ] },
    { distance: 10, sleighs: [
        { name: 'Pedrosillano', consumption: 1 },
        { name: 'SamarJaffal', consumption: 2 },
        { name: 'marcospage', consumption: 3 }
      ] },
    { distance: 50, sleighs: [
        { name: 'Pedrosillano', consumption: 1 },
        { name: 'SamarJaffal', consumption: 2 },
        { name: 'marcospage', consumption: 3 }
      ] },
    { distance: 30, sleighs: [
        { name: "Dasher", consumption: 0.3 },
        { name: "Dancer", consumption: 0.5 },
        { name: "Rudolph", consumption: 0.7 },
        { name: "Midu", consumption: 1 }
      ] }
  ];

tests.forEach(test => {
  // Llamada a la función
  const bestSleigh = selectSleigh(test.distance, test.sleighs);
  // Resultado de la función
  console.log("Best sleigh ->", bestSleigh);
});