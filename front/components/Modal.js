/** @format */
import React, { useCallback } from "react";
import styled from "styled-components";
import { CloseOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { OFF_MODAL } from "../reducers/store";
import {
  ModalBackground,
  ModalList,
  ListItem,
} from "../components/Cart/CartModal";
import { Slider } from "antd";
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

const BModalSlide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 1.4rem;
    font-weight: bold;
    margin: 0;
  }
  button {
    position: absolute;
    bottom: 4vh;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 6vh;
    border: none;
    outline: none;
    background: rgb(1, 175, 255);
    color: #fff;
    width: 90%;
    border-radius: 3px;
    margin: 0 auto;
    &:hover {
      cursor: pointer;
    }
  }
`;
const BSlider = styled(Slider)`
  width: 80%;
  .ant-slider-handle {
    width: 20px;
    height: 20px;
    margin-top: -7px;
  }
`;
const Modal = ({ whatModal }) => {
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

  const marks = {
    0: "무료배달",
    25: "1000",
    50: "2000",
    75: "3000",
    100: "전체",
  };
  if (whatModal === "배달비") {
    return (
      <MainModalBackground>
        <ModalBlock>
          <ModalTop>
            배달비
            <ModalExit onClick={removeModal}>
              <CloseOutlined />
            </ModalExit>
          </ModalTop>
          <BModalSlide>
            <h1>배달비 전체</h1>
            <p>더 멀리있는 매장까지 볼 수 있어요!</p>
            <BSlider
              marks={marks}
              step={5}
              defaultValue={100}
              tooltipVisible={false}
            />
            <button>적용하기</button>
          </BModalSlide>
        </ModalBlock>
      </MainModalBackground>
    );
  }
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
