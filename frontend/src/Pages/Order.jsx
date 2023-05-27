import React, { useEffect } from "react";
import OrderLists from "../Components/OrderLists";
import { useSelector } from "react-redux";
// import { getAllOrdes } from "../Redux/Order/order.Action";

const Order = () => {
  const { allOrder } = useSelector((store) => store.order);
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(getAllOrdes());
  //   }, []);
  console.log("orderPage", allOrder);
  return <OrderLists orders={allOrder} />;
};

export default Order;
