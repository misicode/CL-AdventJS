// Función para obtener el nombre de cada regalo y las veces que aparece
function listGifts(letter) {
  const gifts = letter.split(' ')
                    .filter(gift => gift !== '' && !gift.startsWith('_'));
  const objGifts = {};
  
  gifts.forEach(gift => {
      if (objGifts[gift])
          objGifts[gift] += 1;
      else
          objGifts[gift] = 1; 
  });
  
  return objGifts;
}

// Cadena de regalos
const carta = 'bici coche balón _playstation bici coche peluche';

// Llamada a la función
const regalos = listGifts(carta);

// Resultado de la función
console.log(regalos);
