const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

const entireYear = ({spring, summer, autumn, winter}) => [...spring, ...summer, ...autumn, ...winter];
console.log(entireYear(yearSeasons));