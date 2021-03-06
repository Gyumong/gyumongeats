/** @format */

import React, { useCallback } from "react";
import styled from "styled-components";
import { Menu } from "antd";
import { useDispatch } from "react-redux";
import { UPDATE_QUANTITY_REQUEST } from "@reducers/cart";
export const ModalBackground = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;
export const ModalBlock = styled.div`
  position: fixed;
  font-family: "Noto Sans KR", sans-serif;
  margin: auto auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100000000;
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 60vh;
  background-color: #fff;
`;
export const ModalList = styled(Menu)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #d5d4d1;
  justify-content: center;
  .ant-menu-item {
    margin: 0;
  }
  .ant-menu-item:not(:last-child) {
    margin-bottom: 0;
  }
`;
export const ListItem = styled(Menu.Item)`
  display: flex;
  align-items: center;
  flex-grow: 1;
  padding-left: 1rem;
  &:hover {
    color: rgb(1, 175, 255);
    background-color: #d9f9ff;
  }
`;

const Modal = ({ menu, close, me }) => {
  const dispatch = useDispatch();
  console.log(menu);
  console.log(me);
  const onValue = useCallback(async (e) => {
    await dispatch({
      type: UPDATE_QUANTITY_REQUEST,
      data: {
        email: me.customerEmail,
        menu: menu.name,
        category: menu.category,
        quantity: e.key,
      },
    });
    close();
    console.log("click", e.key);
  }, []);
  return (
    <ModalBackground>
      <ModalBlock>
        <ModalList onClick={onValue}>
          <ListItem key="1">1</ListItem>
          <ListItem key="2">2</ListItem>
          <ListItem key="3">3</ListItem>
          <ListItem key="4">4</ListItem>
          <ListItem key="5">5</ListItem>
          <ListItem key="6">6</ListItem>
          <ListItem key="7">7</ListItem>
          <ListItem key="8">8</ListItem>
          <ListItem key="9">9</ListItem>
          <ListItem key="10">10</ListItem>
        </ModalList>
      </ModalBlock>
    </ModalBackground>
  );
};

export default Modal;
