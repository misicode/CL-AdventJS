// Función para envolver los regalos
function wrapping(gifts) {
  return gifts.map(gift => {
    const wrap = ('*').repeat(gift.length+2);
    return `${wrap}\n*${gift}*\n${wrap}`;
  });
}

// Lista de pruebas
// Compuesta por la lista de regalos
const tests = [
    { gifts: ['cat', 'game', 'socks'] },
    { gifts: ['midu'] },
    { gifts: ['a'] },
    { gifts: [] }
  ];

tests.forEach(test => {
  // Llamada a la función
  const wrapGifts = wrapping(test.gifts);
  // Resultado de la función
  console.log(wrapGifts);
});