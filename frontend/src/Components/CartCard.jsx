import {
  Box,
  Button,
  ButtonGroup,
  CloseButton,
  Image,
  Td,
  Text,
  Tr,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeItemFromCart, updateCartItem } from "../Redux/Cart/cart.Action";
import { NavLink } from "react-router-dom";

const CartCard = ({ cart }) => {
  const [qty, setQty] = useState(cart.qty);
  const toast = useToast();

  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeItemFromCart(id));
    toast({
      title: "Remove Success.",
      description: `Remove Item id: ${id} from Cart.`,
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  const handleIncQty = () => {
    setQty(qty + 1);
  };
  const handleDecQty = () => {
    setQty(qty - 1);
  };

  useEffect(() => {
    dispatch(updateCartItem(cart._id, qty));
  }, [qty]);

  return (
    <Tr>
      <Td>
        <NavLink to={`/products/${cart._id}`}>
          <Box
            width="100%"
            height="100%"
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            alignItems={{
              base: "center",
              md: "stretch",
              lg: "center",
            }}
            gap={{ base: "10px", md: "20px" }}
          >
            <Image
              width={{ base: "100%", md: "100px" }}
              height={{ base: "100px", md: "100px" }}
              src={cart.image}
              alt={cart.title}
            />
            <Box width="100%" textAlign={{ base: "center", md: "center" }}>
              <Text as="h1">{cart.title}</Text>
            </Box>
          </Box>
        </NavLink>
      </Td>
      <Td>$ {cart.price}</Td>
      <Td>
        <ButtonGroup
          display="flex"
          flexDir={{
            lg: "row",
            md: "row",
            sm: "column",
            base: "column",
          }}
          alignItems="center"
          justifyContent={{
            base: "space-between",
            md: "flex-start",
          }}
          gap={"5px"}
        >
          <Button
            colorScheme="teal"
            variant="solid"
            disabled={cart.qty < 1}
            onClick={handleDecQty}
          >
            -
          </Button>
          <Button variant="solid">
            <Text as="h1" mx={{ base: "10px", md: "20px" }}>
              {cart.qty}
            </Text>
          </Button>
          <Button colorScheme="teal" variant="solid" onClick={handleIncQty}>
            +
          </Button>
        </ButtonGroup>
      </Td>
      <Td isNumeric>{cart.price * cart.qty}</Td>
      <Td>
        <CloseButton size="md" onClick={() => handleRemove(cart._id)} />
      </Td>
    </Tr>
  );
};

export default CartCard;
