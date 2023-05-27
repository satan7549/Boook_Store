import { Grid } from "@chakra-ui/react";
import React from "react";
import OrderCard from "./OrderCard";

const OrderLists = ({ orders }) => {
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
      {orders.map((item) => (
        <OrderCard key={item.id} item={item} />
      ))}
    </Grid>
  );
};

export default OrderLists;
