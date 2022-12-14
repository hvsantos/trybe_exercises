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

// // 1:
// const formatedBookNames = (array) => array.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);

// const sinopBook = formatedBookNames(books);

// console.log(sinopBook)

// // 2:
// const authorAndAge = (array) => array.map((book) => ({
//   age: book.releaseYear - book.author.birthYear,
//   author: book.author.name
// }));
// const sortedAAA = authorAndAge(books).sort((a, b) => a.age - b.age)
// console.log(sortedAAA)

// // 3
// const acceptedGenre = ({genre}) => (genre === 'Fantasia' || genre === 'Ficção Científica');
// const fantasyOrScienceFiction = (array) => array.filter((book) => acceptedGenre(book))

// console.log(fantasyOrScienceFiction(books))

// // 4
// const olderBooks = ({releaseYear}) => (2022 - releaseYear)  > 60;
// const oldBooksOrdered = books.filter((book) => olderBooks(book)).sort((a, b) => a.releaseYear - b.releaseYear);

// console.log(oldBooksOrdered)

// // 5
// const fictionOrFantasy = ({genre}) => (genre === 'Fantasia' || genre === 'Ficção Científica');
// const allFantasyAndFiction = (array) => array.filter((book) => fictionOrFantasy(book));
// const authorList = allFantasyAndFiction(books).map((book) => book.author.name).sort();

// console.log(authorList);

// 6
const filterByAuthors = (book) => {
  const arrName = book.author.name.split(' ')
  const processedArrName = arrName.filter((element, index) => (element.length === 2 && index <= 3))
  if (processedArrName.length >= 3) { return book}
}

const filteredBooks = books.map((book) => filterByAuthors(book)).filter((element) => element !== undefined)[0].name;

console.log(filteredBooks);