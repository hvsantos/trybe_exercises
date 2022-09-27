const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = (array) => array.reduce((a,b) => {
  b = b.split('').filter((charac) => (charac === 'a' || charac === 'A'));
  return a+b.length
}, 0)

console.log(containsA(names))