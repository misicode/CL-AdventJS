// Función para hallar la máxima ganancia de inversión
function maxProfit(prices) {
  let profitMax = 0
  for (let i = 0; i < prices.length; i++) {
    for (let j = i+1; j < prices.length; j++) {
      const profitAux = prices[j] - prices[i]
      if (profitAux > profitMax)
        profitMax = profitAux
    }
  }
  if (profitMax <= 0) return -1
  return profitMax
}

// Arreglo de precios
const prices = [
    [39, 18, 29, 25, 34, 32, 5], // -> 16 (compra a 18, vende a 34)
    [10, 20, 30, 40, 50, 60, 70], // -> 60 (compra a 10, vende a 70)
    [18, 15, 12, 11, 9, 7], // -> -1 (no hay ganancia posible)
    [3, 3, 3, 3, 3] // -> -1 (no hay ganancia posible)
  ]

prices.forEach(price => {
  // Llamada a la función
  const profits = maxProfit(price)
  // Resultado de la función
  console.log(price,"->",profits)
});
