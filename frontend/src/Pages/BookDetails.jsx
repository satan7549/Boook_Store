import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";



const BookDetails = () => {
  const { id } = useParams();
  const { allBooks } = useSelector((store) => store.books);

  const book = allBooks.find((book) => book.id === parseInt(id));

  if (!book) {
    return <Box>Book not found.</Box>;
  }

  return (
    <Box mt={"80px"} p={4}>
      <Stack spacing={4} direction={{ base: "column", md: "row" }}>
        <Image
          src={book.image}
          alt={book.title}
          maxW={{ base: "100%", md: "300px" }}
        />
        <Box>
          <Heading as="h2" size="lg">
            {book.title}
          </Heading>
          <Text fontSize="lg" fontWeight="bold" mt={2}>
            {book.author}
          </Text>
          <Text fontSize="lg" mt={2}>
            Price: $ {book.price}
          </Text>
          <Text fontSize="lg" mt={2}>
            Category: {book.category}
          </Text>
          <Text fontSize="lg" mt={2}>
            Description: {book.description}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default BookDetails;
