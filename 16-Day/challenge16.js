// Función que formatea las cartas según los criterios establecidos
function fixLetter(letter) {
  return letter
          .trim()
          .replace(/\s+/g, ' ')
          .replace(/\s{1}([,.\?\!])/g, '$1')
          .replace (/,\s{0,1}/g, ', ')
          .replace(/\?+/g, '?')
          .replace(/[.\?\!]+\s[a-z]|^[a-z]/gi, l => l.toUpperCase())
          .replace (/santa claus/gi, 'Santa Claus')
          .replace(/([a-z])$/gi, '$1.');
}
        
// Lista de pruebas
// compuesta por las cartas con problemas de formato
const tests = [
    { letter: ` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  ` },
    { letter: "  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?" },
    { letter: "  hi    santa    claus " },
    { letter: "  hi    santa    claus . santa claus is the best  " },
    { letter: '  hi,santa claus. are you there ?   ' },
    { letter: "Hey santa Claus .  I want a bike.   I want a videogame! " }
  ];

tests.forEach(test => {
  // Llamada a la función
  const letter = fixLetter(test.letter);
  // Resultado de la función
  console.log("Christmas letter ->", letter);
});