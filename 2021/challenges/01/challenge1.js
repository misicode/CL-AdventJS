// Función para filtrar ovejas de color rojo y que contengan la 'n' o 'a' en su nombre
function contarOvejas(ovejas) {
  return ovejas.filter(oveja => oveja.color=='rojo' && oveja.name.toLowerCase().includes('n') && oveja.name.toLowerCase().includes('a'));
}

// Lista de ovejas
const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo' },
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo' }
  ];

// Llamada a la función
const ovejasFiltradas = contarOvejas(ovejas);

// Resultado de la función
console.log(ovejasFiltradas);
