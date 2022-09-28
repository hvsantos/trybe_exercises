const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = (array) => array.reduce((a,b) => a + b.split('').filter((charac) => ['a', 'A'].includes(charac)).length, 0)

console.log(containsA(names));