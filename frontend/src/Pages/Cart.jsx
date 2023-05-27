import React from "react";
import CartLists from "../Components/CartLists";
import { useSelector } from "react-redux";
import { Button } from "@chakra-ui/react";

const Cart = () => {
  const { cartData } = useSelector((store) => store.cart);

  console.log(cartData)
  const handleOrder = () => {

  };

  return (
    <>
      <Button onClick={handleOrder}>Place Order</Button>
      <CartLists cartItems={cartData} />
    </>
  );
};

export default Cart;
