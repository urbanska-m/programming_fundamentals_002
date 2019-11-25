// eslint-disable-next-line no-unused-vars
const catalogue = [
  "The Catcher in the Rye by J.D. Salinger",
  "Dracula by Bram Stoker",
  "Between the Assassinations by Aravind Adiga",
  "Wolf Hall by Hilary Mantel",
  "Bring Up The Bodies by Hilary Mantel",
  "A Place of Greater Safety by Hilary Mantel",
  "Giving Up the Ghost by Hilary Mantel",
  "The Assassination of Margaret Thatcher by Hilary Mantel",
  "The Yellow Wallpaper by Charlotte Perkins Gilman",
  "Conversations With Friends by Sally Rooney",
  "Normal People by Sally Rooney",
  "Everything I Never Told You by Celeste Ng",
  "2666 by Robert Bolaño",
  "By Night In Chile by Robert Bolaño",
  "A Tale of Two Cities by Charles Dickens",
  "Oliver Twist by Charles Dickens",
  "Great Expectations by Charles Dickens",
  "The Blind Assassin by Margaret Atwood",
  "Why Be Happy When You Could Be Normal? by Jeanette Winterson",
  "The Origin of Species by Charles Darwin"
];

function countBooks() {
  // Your code here
  return catalogue.length;
};

function checkBook(book) {
  // Your code here
  for (let i = 0; i < catalogue.length; i++) {
    if (book === catalogue[i]) {
      return true;
    }
    }
    return false;
};

function countBooksByFirstLetter(letter) {
  // Your code here
  // For each item in array, check first letter against given letter
  // This works but I don't understand why; line 44 is confusing me **update - catalogue.map(x => x[0]) changes entire catalogue to array of only first letters, so only has to loop through that(?)
  const firstLetters = catalogue.map(x => x[0]);
  let count = 0
  for (let i = 0; i < firstLetters.length; i++) {
    if (letter === firstLetters[i]) {
      count++;
    }
  } return count;
};

function countBooksByKeyword(keyword) {
  // Loop through catalogue; find matching keyword; add 1 to count; do not kick out of loop when found.
  // Works, but is case sensitive. Need to fix.
  let bookCount = 0;
  for (let i = 0; i < catalogue.length; i++) {
    if (catalogue[i].includes(keyword)) {
      bookCount++;
    }
  } return bookCount;
};

function getBooksByAuthor(author) {
  // Your code here
  // tried to make it work with a === but couldn't figure out how
  const authorCollection = catalogue.filter(function(books) {
    return books.includes(author);
  });
  return authorCollection;
}

module.exports = {
  countBooks,
  checkBook,
  countBooksByFirstLetter,
  countBooksByKeyword,
  getBooksByAuthor
};
