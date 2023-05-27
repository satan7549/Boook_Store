import { Container, Flex, HStack, Text, Link, Button } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { logout } from "../Redux/Auth/Auth.action";

const Navbar = () => {
  // Retrieve the current location
  const location = useLocation();
  const dispatch = useDispatch();
  const { authData } = useSelector((store) => store.auth);
  const { isAuthenticated } = authData;

  const handleLogout = async () => {
    dispatch(logout());
  };

  return (
    <Container
      px={4}
      shadow={"rgba(43, 64, 70, 0.14) 0px 12px 32px"}
      maxW={"100%"}
      position="fixed"
      backdropFilter={"blur(10px)"}
      color="rgb(1, 75, 97)"
      padding={"20px 30px"}
      top="0px"
      margin={"auto"}
      left="0px"
      zIndex={"10"}
    >
      <Flex h={8} alignItems={"center"} justifyContent={"space-between"}>
        <HStack spacing={8} alignItems={"center"}>
          {isAuthenticated ? (
            <HStack
              as={"nav"}
              spacing={6}
              justifyContent={"space-between"}
              display={"flex"}
            >
              <Link
                to={"/"}
                as={NavLink}
                borderBottom={
                  location.pathname === "/" ? "5px solid" : undefined
                }
                _hover={{ borderBottom: "5px solid", cursor: "pointer" }}
              >
                <Text fontSize={"20px"} fontWeight="500">
                  Home
                </Text>
              </Link>
              <Link
                to={"/cart"}
                as={NavLink}
                borderBottom={
                  location.pathname === "/cart" ? "5px solid" : undefined
                }
                _hover={{ borderBottom: "5px solid", cursor: "pointer" }}
              >
                <Text fontSize={"20px"} fontWeight="500">
                  Cart
                </Text>
              </Link>
              <Link
                to={"/order"}
                as={NavLink}
                borderBottom={
                  location.pathname === "/order" ? "5px solid" : undefined
                }
                _hover={{ borderBottom: "5px solid", cursor: "pointer" }}
              >
                <Text fontSize={"20px"} fontWeight="500">
                  Order
                </Text>
              </Link>
              <Button onClick={handleLogout}>Logout</Button>
            </HStack>
          ) : (
            <HStack
              as={"nav"}
              spacing={6}
              justifyContent={"space-between"}
              display={"flex"}
            >
              <Link
                to={"/login"}
                as={NavLink}
                borderBottom={
                  location.pathname === "/login" ? "5px solid" : undefined
                }
                _hover={{ borderBottom: "5px solid", cursor: "pointer" }}
              >
                <Text fontSize={"20px"} fontWeight="500">
                  Login
                </Text>
              </Link>
              <Link
                to={"/signup"}
                as={NavLink}
                borderBottom={
                  location.pathname === "/signup" ? "5px solid" : undefined
                }
                _hover={{ borderBottom: "5px solid", cursor: "pointer" }}
              >
                <Text fontSize={"20px"} fontWeight="500">
                  Sign up
                </Text>
              </Link>
            </HStack>
          )}
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
