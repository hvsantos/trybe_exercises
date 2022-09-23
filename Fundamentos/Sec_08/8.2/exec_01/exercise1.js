const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

//1
// const authorBornIn1947 = () => books.find((livro) => livro.author.birthYear === 1947).author.name;

// console.log(authorBornIn1947());

//2
// const smallerName = () => {
//   let nameBook;
//   books.forEach((livro, index) => {
//     if (index === 0) {nameBook = livro.author.name}
//     if (livro.author.name.length < nameBook.length) {
//       nameBook = livro.author.name
//     }
//     });
//   return nameBook;
// }

// console.log(smallerName())

//3
// const getNamedBook = () => books.find((book) => book.name.length === 26).name

// console.log(getNamedBook())

//4
// const booksOrderedByReleaseYearDesc = () => books.sort((bookA, bookB) => bookB.releaseYear - bookA.releaseYear)

// console.log(booksOrderedByReleaseYearDesc())

//5
// const everyoneWasBornOnSecXX = () => books.every((book) => (book.author.birthYear < 2000 && book.author.birthYear > 1901))

// console.log(everyoneWasBornOnSecXX())

//6
// const someBookWasReleaseOnThe80s = () => books.some((book) => (book.releaseYear > 1980) && (book.releaseYear < 1989))

// console.log(someBookWasReleaseOnThe80s())
