import { Box, Button, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { removeMoveOrderItem } from "../Redux/Order/order.Action";

const OrderCard = ({ item }) => {
  const dispatch = useDispatch();
  const handleCancleOrder = (id) => {
    dispatch(removeMoveOrderItem(id));
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
      <Image
        margin={"auto"}
        height={"200px"}
        src={item.image}
        alt={item.title}
      />
      <Stack mt={4}>
        <Heading as="h3" size="md">
          Title: {item.title}
        </Heading>
        <Text fontSize="sm" color="gray.500">
          Author: {item.author}
        </Text>
        <Text fontSize="sm">Description: {item.description}</Text>
        <Text fontSize="lg">Quantity: {item.qty}</Text>
        <Text fontSize="lg" fontWeight="bold" mt={2}>
          Price:- $ {item.price}
        </Text>
      </Stack>

      <Button
        // isLoading={loading}
        loadingText="Submitting"
        width="full"
        p={4}
        borderRadius="lg"
        colorScheme="teal"
        _hover={{
          bg: "teal.300",
          color: "red",
        }}
        variant="outline"
        mt={4}
        onClick={() => handleCancleOrder(item._id)}
      >
        Cancle
      </Button>
    </Box>
  );
};

export default OrderCard;
