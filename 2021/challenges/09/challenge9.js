// Función para agrupar elementos según una función o propiedad determinada
function groupBy(collection, it) {
  const objItems = {}

  collection.forEach(item => {
    if (typeof it == 'function') {
      if (objItems[it(item)] == undefined)
        objItems[it(item)] = [item]
      else
        objItems[it(item)].push(item)
    }
    else {
      if (objItems[item[it]] == undefined)
        objItems[item[it]] = [item]
      else
        objItems[item[it]].push(item)
    }
  });

  return objItems
}

// Llamada a la función y resultados
console.log(groupBy([6.1, 4.2, 6.3], Math.floor))
  // { 6: [6.1, 6.3], 4: [4.2] }
console.log(groupBy(['one', 'two', 'three'], 'length'))
  // { 3: ['one', 'two'], 5: ['three'] }
console.log(groupBy([{age: 23}, {age: 24}], 'age'))
  // { 23: [{age: 23}], 24: [{age: 24}] }
console.log(groupBy(
    [1397639141184, 1363223700000],
    timestamp => new Date(timestamp).getFullYear()
  ))
  // { 2013: [1363223700000], 2014: [1397639141184] }
console.log(groupBy([
    { title: 'JavaScript: The Good Parts', rating: 8 },
    { title: 'Aprendiendo Git', rating: 10 },
    { title: 'Clean Code', rating: 9 },
  ], 'rating'))
  // { 8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
  //   9: [{ title: 'Clean Code', rating: 9 }],
  //   10: [{ title: 'Aprendiendo Git', rating: 10 }] }
