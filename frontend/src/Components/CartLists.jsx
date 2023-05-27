import { Grid } from "@chakra-ui/react";
import React from "react";
import CartCard from "./CartCard";

const CartLists = ({ cartItems }) => {
  return (
    <Grid
      mt={"80px"}
      templateColumns={{
        base: "1fr",
        sm: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
        lg: "repeat(4, 1fr)",
      }}
      gap={4}
      p={2}
      justifyContent="center"
    >
      {cartItems.map((cart) => (
        <CartCard key={cart._id} cart={cart} />
      ))}
    </Grid>
  );
};

export default CartLists;
