// Función para buscar un producto en un almacén
function contains(store, product) {
  let validator = false
  const items = Object.values(store)

  items.forEach(item => {
    if (item === product)
      validator = true
    if (typeof item === 'object')
      validator = contains(item, product)
  });

  return validator
}

// Objeto almacén 1
const almacen = {
  'estanteria1': {
      'cajon1': {
          'producto1': 'coca-cola',
          'producto2': 'fanta',
          'producto3': 'sprite'
      }
  },
  'estanteria2': {
      'cajon1': 'vacio',
      'cajon2': {
          'producto1': 'pantalones',
          'producto2': 'camiseta' // <- ¡Está aquí!
      }
  }
}

// Llamada a la función y resultado
console.log(contains(almacen, 'camiseta')) // true

// Objeto almacén 2
const otroAlmacen = {
  'baul': {
      'fondo': {
      'objeto': 'cd-rom',
      'otro-objeto': 'disquette',
      'otra-cosa': 'mando'
      }
  }
}

// Llamada a la función y resultado
console.log(contains(otroAlmacen, 'gameboy')) // false
