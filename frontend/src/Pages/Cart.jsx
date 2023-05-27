import React from "react";
import CartLists from "../Components/CartLists";
import { Box, Button, VStack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { addOrderItems } from "../Redux/Order/order.Action";
import Loading from "../Components/Loading";
// import { getCartItems } from "../Redux/Cart/cart.Action";

const Cart = () => {
  const { getCartItems, cartData } = useSelector((store) => store.cart);
  const { loading } = getCartItems;
  console.log(cartData);
  const dispatch = useDispatch();

  const handleOrder = () => {
    dispatch(addOrderItems(cartData));
  };
  if (loading) return <Loading />;
  return (
    <VStack h={"100vh"}>
      <CartLists cartItems={cartData} />
      <Box position={"fixed"} bottom={"10px"} right={"10px"} zIndex={"10"}>
        <Button onClick={handleOrder}>place an order</Button>
      </Box>
    </VStack>
  );
};

export default Cart;
