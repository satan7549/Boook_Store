import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeItemFromCart, updateCartItem } from "../Redux/Cart/cart.Action";

const CartCard = ({ cart }) => {
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const handleIncQty = () => {
    setQty((prev) => prev + 1);
    dispatch(updateCartItem(cart.id, qty + 1));
  };
  const handleDecQty = () => {
    setQty((prev) => prev - 1);
    dispatch(updateCartItem(cart.id, qty - 1));
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
      <Image
        margin={"auto"}
        height={"200px"}
        src={cart.image}
        alt={cart.title}
      />
      <Stack mt={4}>
        <Heading as="h3" size="md">
          {cart.title}
        </Heading>
        <Text fontSize="sm" color="gray.500">
          {cart.author}
        </Text>
        <Text fontSize="sm">{cart.description}</Text>
        <Text fontSize="lg" fontWeight="bold" mt={2}>
          $ {cart.price}
        </Text>
      </Stack>
      <ButtonGroup>
        <Button onClick={handleDecQty}>-</Button>
        <Button>{cart.qty}</Button>
        <Button onClick={handleIncQty}>+</Button>
      </ButtonGroup>
      <Button
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
        onClick={() => handleRemove(cart.id)}
      >
        Remove
      </Button>
    </Box>
  );
};

export default CartCard;
