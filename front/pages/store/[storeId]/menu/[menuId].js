/** @format */
import React from "react";
import { useRouter } from "next/router";

const Menu = () => {
  const router = useRouter();
  const { storeId, menuId } = router.query;

  return (
    <>
      <h1>Store ID :{storeId}</h1>
      <h1>Menu ID: {menuId}</h1>
    </>
  );
};

export default Menu;
