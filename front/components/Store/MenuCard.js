/** @format */

import React from "react";
import styled from "styled-components";
const MenuCardBlock = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  padding: 2vh 0;
  border-bottom: 1px solid #c5c5c3;
  background-color: #fff;
`;
const MenuCardDesc = styled.div`
  flex: 2.2;
  padding-right: 1rem;
`;

const MenuCardDescT = styled.div`
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 0.2em;
`;

const MenuCardDescP = styled.div`
  font-size: 0.9rem;
  margin-bottom: 0.2em;
`;

const MenuCardDescD = styled.div`
  width: 75%;
  font-size: 0.7rem;
  font-weight: 300;
  color: #9d9d9e;
  line-height: 130%;
`;
const MenuMarkBlock = styled.div`
  display: flex;
`;
const MenuCardMark = styled.div`
  border: 1px solid #9adffe;
  color: #21b4f9;
  border-radius: 15px;
  padding: 0.1rem 0.35rem;
  font-size: 0.6rem;
  margin-right: 0.15rem;
  margin-bottom: 0.2rem;
  text-align: center;
  font-weight: bold;
`;
const MenuCard = ({ menu }) => {
  console.log(menu);
  return (
    <MenuCardBlock>
      <MenuCardDesc>
        <MenuMarkBlock>
          <MenuCardMark>주문많음</MenuCardMark>
          <MenuCardMark>리뷰최고</MenuCardMark>
        </MenuMarkBlock>
        <MenuCardDescT>{menu.name}</MenuCardDescT>
        <MenuCardDescP>{menu.price}원</MenuCardDescP>
        <MenuCardDescD>{menu.introduction}</MenuCardDescD>
      </MenuCardDesc>
    </MenuCardBlock>
  );
};

export default MenuCard;
