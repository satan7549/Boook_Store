import React from "react";
import CartLists from "../Components/CartLists";
import { Box, Button, VStack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { addOrderItems } from "../Redux/Order/order.Action";
// import { getCartItems } from "../Redux/Cart/cart.Action";

const Cart = () => {
  const { cartData } = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  const handleOrder = () => {
    // console.log("cartItems", cartData);
    dispatch(addOrderItems(cartData));
  };

  return (
    <VStack h={"100vh"}>
      <CartLists cartItems={cartData} />
      <Box position={"fixed"} bottom={"10px"} right={"10px"} zIndex={"10"}>
        <Button onClick={handleOrder}>Place Order</Button>
      </Box>
    </VStack>
  );
};

export default Cart;
