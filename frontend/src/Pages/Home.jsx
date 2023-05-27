import React, { useEffect } from "react";
import BookLists from "../Components/BookLists";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../Redux/Books/books.Action";

const Home = () => {
  const { allBooks } = useSelector((store) => store.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return <BookLists books={allBooks} />;
};

export default Home;
