// Función para envolver los regalos
function wrapping(gifts) {
  return gifts.map(gift => {
    const wrap = ('*').repeat(gift.length+2);
    return `${wrap}\n*${gift}*\n${wrap}`;
  });
}

// Lista de regalos
const gifts = ['cat', 'game', 'socks'];
// Llamada y resultado de la función
console.log(wrapping(gifts));