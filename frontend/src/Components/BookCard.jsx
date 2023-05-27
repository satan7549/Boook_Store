import { Box, Button, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItemToCart } from "../Redux/Cart/cart.Action";

const BookCard = ({ book }) => {
  const dispatch = useDispatch();

  const newbook = {
    ...book,
    qty: 1,
  };

  const handleAddToCart = () => {
    dispatch(addItemToCart(newbook));
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
      <Link to={`/detail/${book.id}`}>
        <Image
          margin={"auto"}
          height={"200px"}
          src={book.image}
          alt={book.title}
        />
        <Stack mt={4}>
          <Heading as="h3" size="md">
            {book.title}
          </Heading>
          <Text fontSize="sm" color="gray.500">
            {book.author}
          </Text>
          <Text fontSize="sm">{book.description}</Text>
          <Text fontSize="lg" fontWeight="bold" mt={2}>
            $ {book.price}
          </Text>
        </Stack>
      </Link>
      <Button
        // isLoading={loading}
        loadingText="Submitting"
        width="full"
        p={4}
        borderRadius="lg"
        colorScheme="teal"
        _hover={{
          bg: "teal.300",
          color: "white",
        }}
        variant="outline"
        mt={4}
        onClick={handleAddToCart}
      >
        Add To Cart
      </Button>
    </Box>
  );
};

export default BookCard;
