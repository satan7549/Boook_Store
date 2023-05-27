import React, { useEffect } from "react";
import BookLists from "../Components/BookLists";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../Redux/Books/books.Action";
import Loading from "../Components/Loading";

const Home = () => {
  const { loading, allBooks } = useSelector((store) => store.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  if (loading) return <Loading />;

  return <BookLists books={allBooks} />;
};

export default Home;
