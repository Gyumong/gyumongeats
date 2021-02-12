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

const MenuBox = () => {
  return (
    <MenuBlock>
      <Category>추천메뉴</Category>
      <MenuCard />
    </MenuBlock>
  );
};

export default MenuBox;