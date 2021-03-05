/** @format */

import React from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;
const ModalBlock = styled.div`
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
const ModalList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #d5d4d1;
  justify-content: center;
`;
const ListItem = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  padding-left: 1rem;
  &:hover {
    color: rgb(1, 175, 255);
    background-color: #d9f9ff;
  }
`;
const Modal = ({ close }) => {
  return (
    <ModalBackground>
      <ModalBlock>
        <ModalList>
          <ListItem onClick={close}>1</ListItem>
          <ListItem>2</ListItem>
          <ListItem>3</ListItem>
          <ListItem>4</ListItem>
          <ListItem>5</ListItem>
          <ListItem>6</ListItem>
          <ListItem>7</ListItem>
          <ListItem>8</ListItem>
          <ListItem>9</ListItem>
          <ListItem>10</ListItem>
        </ModalList>
      </ModalBlock>
    </ModalBackground>
  );
};

export default Modal;
