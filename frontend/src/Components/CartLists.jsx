import {
  Button,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CartCard from "./CartCard";

const CartLists = ({ cartItems, handleOrder }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      cartItems
        .reduce((acc, el) => acc + Number(el.price * el.qty), 0)
        .toFixed(2)
    );
  }, [cartItems]);

  return (
    <TableContainer display={"block"} mt={"80px"} maxWidth="100vw">
      <Table
        variant="striped"
        colorScheme="teal"
        size={{ lg: "lg", md: "md", sm: "sm", base: "sm" }}
      >
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr fontSize="xl" fontWeight="bold">
            <Th>Items</Th>
            <Th>Price</Th>
            <Th>QUANTITY</Th>
            <Th isNumeric>SUBTOTAL</Th>
            <Th>REMOVE</Th>
          </Tr>
        </Thead>
        <Tbody>
          {cartItems.map((cart) => (
            <CartCard key={cart._id} cart={cart} />
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th></Th>
            <Th fontSize="20px" fontWeight="bold"></Th>
            <Th fontSize="20px" fontWeight="bold">
              <Text>
                Total Unit :-{" "}
                {cartItems.reduce((acc, el) => acc + Number(el.qty), 0)}
              </Text>
            </Th>
            <Th isNumeric fontSize="20px" fontWeight="bold">
              TOTAL :- $ {total}
            </Th>
            <Th>
              <Button colorScheme="teal" variant="solid" onClick={handleOrder}>
                Place Oreder
              </Button>
            </Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default CartLists;
