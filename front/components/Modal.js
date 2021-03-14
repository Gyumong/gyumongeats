/** @format */
import React, { useCallback } from "react";
import styled from "styled-components";
import { CloseOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { OFF_MODAL } from "../reducers/store";
import { Menu } from "antd";
import {
  ModalBackground,
  ModalList,
  ListItem,
} from "../components/Cart/CartModal";
const MainModalBackground = styled(ModalBackground)`
  z-index: 999;
`;
const ModalBlock = styled.div`
  position: fixed;
  font-family: "Noto Sans KR", sans-serif;
  margin: auto auto;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40vh;
  background-color: #fff;
`;

const ModalTop = styled.div`
  width: 100%;
  font-weight: bold;
  display: flex;
  justify-content: center;
  padding: 0.5rem 0;
  position: relative;
`;
const ModalExit = styled.div`
  position: absolute;
  right: 5%;
`;
const MainModalList = styled(ModalList)`
  border: none;
`;

const MainListItem = styled(ListItem)`
  border-top: 1px solid #d5d4d1;
  padding: 0;
  justify-content: center;
`;

const Modal = () => {
  const dispatch = useDispatch();
  const removeModal = useCallback(() => {
    dispatch({
      type: OFF_MODAL,
    });
  }, []);

  const onValue = useCallback(async (e) => {
    console.log("click", e.key);
    dispatch({
      type: OFF_MODAL,
    });
  }, []);

  return (
    <MainModalBackground>
      <ModalBlock>
        <ModalTop>
          매장정렬
          <ModalExit onClick={removeModal}>
            <CloseOutlined />
          </ModalExit>
        </ModalTop>
        <MainModalList onClick={onValue}>
          <MainListItem key="추천순">추천순</MainListItem>
          <MainListItem key="2">주문많은순</MainListItem>
          <MainListItem key="3">가까운순</MainListItem>
          <MainListItem key="4">별점높은순</MainListItem>
          <MainListItem key="5">신규매장순</MainListItem>
        </MainModalList>
      </ModalBlock>
    </MainModalBackground>
  );
};

export default Modal;
