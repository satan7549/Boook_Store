import { Grid } from "@chakra-ui/react";
import React from "react";
import BookCard from "./BookCard";

const BookList = ({ books }) => {
  return (
    <Grid
      mt={"80px"}
      templateColumns={{
        base: "1fr",
        sm: "repeat(2, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(4, 1fr)",
      }}
      gap={4}
      p={2}
      justifyContent="center"
    >
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </Grid>
  );
};

export default BookList;
