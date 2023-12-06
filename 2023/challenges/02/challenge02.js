function manufacture(gifts, materials) {
  return gifts.filter(g => g.split('').every(l => materials.includes(l)));
}

// Lista de pruebas
const tests = [
  { gifts: ['tren', 'oso', 'pelota'], materials: 'tronesa' },
  { gifts: ['juego', 'puzzle'], materials: 'jlepuz' },
  { gifts: ['libro', 'ps5'], materials: 'psli' },
  { gifts: ['patineta', 'robot', 'libro'], materials: 'nopor' },
  { gifts: ['coche', 'muñeca', 'balon'], materials: 'ocmuñalb' },
  { gifts: [], materials: 'letras' },
];

tests.forEach((test, i) => {
  console.log("Prueba", i+1, "->", manufacture(test.gifts, test.materials));
});
