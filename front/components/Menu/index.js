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
  position: relative;
`;

export const Header = styled.div`
  width: 100%;
  max-width: 420px;
  display: flex;
  padding-left: 0.5rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  z-index: 1000;
  align-items: center;
  background-color: #fff;
  height: 5vh;
  h1 {
    font-weight: bold;
    font-size: 16px;
    margin: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export const GoBackButton = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100000;
  &:hover {
    cursor: pointer;
  }
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
  max-width: 420px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  color: white;
  height: 6vh;
  background-color: rgb(1, 175, 255);
  &:hover {
    cursor: pointer;
  }
`;
