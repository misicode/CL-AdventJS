// Función para crear el árbol de navidad
function createXmasTree(height) {
  let spaces, leafs, log, tree = '';
  
  for(let i=0; i<height; i++) {
    spaces = '_'.repeat(height-(i+1));
    leafs = '*'.repeat(i*2+1);
    tree += `${spaces}${leafs}${spaces}\n`;
  }
  
  spaces = '_'.repeat(height-1);
  log = `${spaces}#${spaces}`;
  tree += `${log}\n${log}`;
  
  return tree;
}

// Llamada a la función
const arbol = createXmasTree(5);

// Resultado de la función
console.log(arbol);
