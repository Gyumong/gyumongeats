/** @format */

import React, { useCallback } from "react";
import styled from "styled-components";
import { CloseOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { OFF_MODAL } from "../reducers/store";
const ModalBlock = styled.div`
  position: fixed;
  background: white;
  font-family: "Noto Sans KR", sans-serif;
  bottom: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const ModalTop = styled.div`
  border-top: 1px solid #d5d4d1;
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
const ModalList = styled.div`
  width: 100%;
  display: flex;
  border-top: 1px solid #d5d4d1;
  justify-content: center;
  padding: 0.5rem 0;
`;
const Modal = () => {
  const dispatch = useDispatch();
  const removeModal = useCallback(() => {
    dispatch({
      type: OFF_MODAL,
    });
  }, []);
  const a = [
    { text: "추천순" },
    { text: "주문많은순" },
    { text: "가까운순" },
    { text: "별점높은순" },
    { text: "신규매장순" },
  ];
  return (
    <ModalBlock>
      <ModalTop>
        매장정렬
        <ModalExit onClick={removeModal}>
          <CloseOutlined />
        </ModalExit>
      </ModalTop>
      {a.map((i) => {
        return <ModalList key={i}>{i.text}</ModalList>;
      })}
    </ModalBlock>
  );
};

export default Modal;
