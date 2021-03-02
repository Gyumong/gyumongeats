/** @format */

import styled from "styled-components";
import { Button } from "antd";
export const CountButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const MenuBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuTitle = styled.div`
  margin: 0 auto;
  width: 90%;
  padding-top: 3vh;
  border-bottom: 1px solid #c5c5c3;
  h2 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 1vh;
  }
  p {
    font-size: 12px;
    color: #9c9c9c;
  }
`;

export const MenuDesc = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-top: 2vh;
  padding-bottom: 2vh;
`;

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
`;

export const Count = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  p {
    display: flex;
    margin: 0;
    width: 80px;
    justify-content: space-between;
    align-items: center;
  }
`;

export const CartModal = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  color: white;
  height: 7vh;
  background-color: rgb(1, 175, 255);
  &:hover {
    cursor: pointer;
  }
`;
