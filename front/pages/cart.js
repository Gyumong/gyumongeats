/** @format */

import React, { useEffect } from "react";
import AppLayout from "../components/AppLayout";
import { useSelector } from "react-redux";
import Router from "next/router";

const Cart = () => {
  const { me } = useSelector((state) => state.user);

  useEffect(() => {
    if (!me) {
      Router.push("/login");
    }
  }, [me]);
  return <AppLayout>장바구니</AppLayout>;
};

export default Cart;
