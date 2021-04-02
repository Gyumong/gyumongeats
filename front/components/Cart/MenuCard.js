/** @format */

import styled from "styled-components";
import { Modal } from "antd";
export const CartMenuCardBlock = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 6px solid #f0f0f0;
`;
export const CartMenuCardTitle = styled.div`
  h2 {
    padding: 0.5rem 0 0.5rem 1rem;
    font-weight: bold;
    font-size: 1rem;
    margin: 0;
  }
  border-bottom: 1px solid #c5c5c3;
`;

export const CartMenuCard = styled.div`
  padding: 0.5rem 1rem;
`;

export const MenuTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  margin-bottom: 0.2rem;
`;

export const MenuDesc = styled.div`
  width: 55vw;
  color: #9d9d9e;
  font-size: 0.8rem;
  line-height: 0.9rem;
  margin-bottom: 0.2rem;
`;

export const MenuPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
`;

export const QuantitySelect = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20vw;
  height: 1.5rem;
  padding: 0.2rem 0.4rem;
  border: 1px solid #c5c5c3;
  border-radius: 5px;
  p {
    font-size: 0.9rem;
    margin: 0;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const QuantityModal = styled(Modal)`
  display: flex;
  flex-direction: column;
  p {
    margin: 0;
  }
`;

export const PlusMenuButton = styled.button`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  background-color: #fff;
  font-size: 0.9rem;
  font-weight: bold;
  color: rgb(1, 175, 255);
  border-top: 1px solid #c5c5c3;
  padding: 0.5rem 0;
  &:hover {
    cursor: pointer;
  }
`;
