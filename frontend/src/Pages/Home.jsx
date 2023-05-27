import React from "react";
import BookLists from "../Components/BookLists";

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "The story of the fabulously wealthy Jay Gatsby...",
    price: 9.99,
    image:
      "https://kbimages1-a.akamaihd.net/5addc4c9-fbc1-42d7-a79f-cec7619d4b23/1200/1200/False/the-great-gatsby-a-novel-1.jpg",
    category: "Classic",
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description: "The unforgettable novel of a childhood in a sleepy...",
    price: 12.99,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/1200px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
    category: "Classic",
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    description: "Written in 1948, 1984 was George Orwell’s chilling...",
    price: 11.99,
    image:
      "https://www.bookgeeks.in/wp-content/uploads/2021/07/1984-by-George-Orwell-1-1200x1963.jpg",
    category: "Dystopian",
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description: "A classic tale of love and misunderstanding...",
    price: 8.99,
    image: "https://m.media-amazon.com/images/I/91eKRbuhgaL.jpg",
    category: "Classic",
  },
  {
    id: 5,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    description: "Bilbo Baggins, a hobbit, embarks on a grand adventure...",
    price: 10.99,
    image:
      "https://m.media-amazon.com/images/I/710+HcoP38L._AC_UF1000,1000_QL80_.jpg",
    category: "Fantasy",
  },
];

const Home = () => {
  return <BookLists books={books} />;
};

export default Home;
