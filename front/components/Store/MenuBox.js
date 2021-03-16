/** @format */

import React from "react";
import styled from "styled-components";
import MenuCard from "./MenuCard";
const MenuBlock = styled.div`
  width: 100%;
  margin-bottom: 5vh;
`;

const Category = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 1rem 0 0.5rem 0;
  font-size: 1rem;
`;

const MenuBox = ({ menu }) => {
  console.log(menu);
  return (
    <MenuBlock>
      <Category>{menu.category}</Category>
      <MenuCard menu={menu} />
    </MenuBlock>
  );
};

export default MenuBox;
