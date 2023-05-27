import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBookDetail } from "../Redux/Books/books.Action";

const BookDetails = () => {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const { singleBook } = useSelector((store) => store.books);

  useEffect(() => {
    dispatch(getBookDetail(id));
  }, []);

  if (!singleBook) {
    return <Box>Book not found.</Box>;
  }

  return (
    <Box mt={"80px"} p={4}>
      <Stack spacing={4} direction={{ base: "column", md: "row" }}>
        <Image
          src={singleBook.image}
          alt={singleBook.title}
          maxW={{ base: "100%", md: "300px" }}
        />
        <Box>
          <Heading as="h2" size="lg">
            {singleBook.title}
          </Heading>
          <Text fontSize="lg" fontWeight="bold" mt={2}>
            {singleBook.author}
          </Text>
          <Text fontSize="lg" mt={2}>
            Price: $ {singleBook.price}
          </Text>
          <Text fontSize="lg" mt={2}>
            Category: {singleBook.category}
          </Text>
          <Text fontSize="lg" mt={2}>
            Description: {singleBook.description}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default BookDetails;
