// Función que devuelve el id de los archivos que se deben realizar backup
function getFilesToBackup(lastBackup, changes) {
  const files = changes.filter(change => change[1] > lastBackup)
                  .map(change => change[0])
                  .sort((a, b) => a - b);
  
  return Array.from(new Set(files));
}
    
// Lista de pruebas
// compuesta por el timestamp del último backup y la lista de archivos modificados
const tests = [
    { lastBackup: 1546300800, changes: [
        [ 2, 1546300800 ],
        [ 3, 1546301100 ],
        [ 1, 1546300800 ],
        [ 1, 1546300900 ],
        [ 1, 1546301000 ],
      ] },
    { lastBackup: 1546300600, changes: [
        [ 1, 1546300800 ],
        [ 2, 1546300800 ],
        [ 1, 1546300900 ],
        [ 1, 1546301000 ],
        [ 3, 1546301100 ]
      ] },
    { lastBackup: 1556300600, changes: [
        [ 1, 1546300800 ],
        [ 2, 1546300800 ],
        [ 1, 1546300900 ],
        [ 1, 1546301000 ],
        [ 3, 1546301100 ]
      ] },
    { lastBackup: 1556300600, changes: [] }
  ];

tests.forEach(test => {
  // Llamada a la función
  const filesBackup = getFilesToBackup(test.lastBackup, test.changes);
  // Resultado de la función
  console.log("Files to backup ->", filesBackup);
});