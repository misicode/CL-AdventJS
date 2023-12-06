// Función para verificar si una carta es válida o no
function isValid(letter) {
  const characterValid = ['(',')'];
  const characterInvalid = ['(',')','{','}','[',']'];
  const gifts = letter.split(' ');

  for(let gift of gifts) {
    if (characterValid.some(cv => gift.includes(cv))) {
      const begin = gift.indexOf('(');
      const final = gift.lastIndexOf(')');
      if (begin < final && begin >= 0 && final >= 0) {
        const sentence = gift.substring(begin+1, final);
        if (sentence.length == 0 || characterInvalid.some(ci => sentence.includes(ci))) {
          return false;
        }
      } else {
        return false;
      }
    }
  }

  return true;
}

// Arreglo de cartas
const cartas = [
    "bici coche (balón) bici coche peluche", // -> ✅
    "(muñeca) consola bici", // ✅
    "(a) (b) (c)", // ✅
    "bici consola", // ✅

    "bici coche)", // -> ❌
    "bici coche (balón bici coche", // -> ❌
    "peluche (bici [coche) bici coche balón", // -> ❌
    "(peluche {) bici", // -> ❌
    "() bici", // -> ❌
    "(()) bici", // -> ❌
    "(a() bici (a)", // -> ❌
    "bici (balón bici coche" // -> ❌
  ];

cartas.forEach(carta => {
    // Llamada a la función
    const regalos = isValid(carta);
    // Resultado de la función
    console.log(carta, "->", regalos);
});
