// Función para verificar si es posible empaquetar todas las cajas
function fitsInOneBox(boxes) {
  const ordBoxes = [...boxes];

  return ordBoxes
    .sort((boxA, boxB) => (boxA.l * boxA.w * boxA.h) - (boxB.l * boxB.w * boxB.h))
    .every((box, index) => {
      if(index === ordBoxes.length - 1) return true;
      const next = ordBoxes[index + 1];
      return box.l < next.l && box.w < next.w && box.h < next.h;
    });
}

// Lista de pruebas
// compuesta por las cajas con sus dimensiones
const tests = [
    { boxes: [{ l: 1, w: 1, h: 1 }, { l: 2, w: 2, h: 2 }] },
    { boxes: [{ l: 1, w: 1, h: 1 }, { l: 2, w: 2, h: 2 }, { l: 3, w: 1, h: 3 }] },
    { boxes: [{ l: 1, w: 1, h: 1 }, { l: 2, w: 2, h: 2 }, { l: 2, w: 10, h: 2}] },
    { boxes: [{ l: 1, w: 1, h: 1 }, { l: 3, w: 3, h: 3 }, { l: 2, w: 2, h: 2 }] }
  ];

tests.forEach(test => {
  // Llamada a la función
  const maxBoxGifts = fitsInOneBox(test.boxes);
  // Resultado de la función
  console.log("Can be packaged? ->", maxBoxGifts);
});