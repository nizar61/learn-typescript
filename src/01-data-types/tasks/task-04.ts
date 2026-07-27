/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */

// Define Book Type
type Book = {
  isbn: string;
  title: string;
  author: string;
  totalPages: number;
  category: string;
  isAvailable: boolean;
};

// Book Data
const book1: Book = {
  isbn: "9786020324789",
  title: "Laskar Pelangi",
  author: "Andrea Hirata",
  totalPages: 529,
  category: "Novel",
  isAvailable: true,
};

const book2: Book = {
  isbn: "9786020322211",
  title: "Bumi",
  author: "Tere Liye",
  totalPages: 440,
  category: "Fantasy",
  isAvailable: false,
};

const book3: Book = {
  isbn: "9789792292793",
  title: "Negeri 5 Menara",
  author: "Ahmad Fuadi",
  totalPages: 423,
  category: "Novel",
  isAvailable: true,
};

// Display Book Data
console.log("Book 1:", book1);
console.log("Book 2:", book2);
console.log("Book 3:", book3);