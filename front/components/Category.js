/** @format */

import React, { useState, useCallback } from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { DownOutlined } from "@ant-design/icons";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { ON_MODAL } from "../reducers/store";
const CategoryBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #f0f0f0;
  width: 100%;
  margin: 0 auto;
  font-family: "Noto Sans KR", sans-serif;
  position: sticky;
  top: 0;
  background-color: white;
  height: 7vh;
`;
const CategoryList = styled.div`
  font-size: 1rem;
  width: 100%;
`;
const StyledSlider = styled(Slider)`
  display: flex;
  .slick-slide div {
    outline: none;
    margin: 0 5px;
  }
  .slick-list,
  .slick-track,
  .slick-slide {
    touch-action: none;
  }
`;
const CategoryMark = styled.div`
  display: flex;
  justify-content: space-around;
  white-space: nowrap;
  align-items: center;
  width: 100%;
  z-index: 100;
  border: 1px solid #dbdbdb;
  color: #404040;
  border-radius: 15px;
  padding: 0.1rem 0.35rem;
  font-size: 0.6rem;
  margin-right: 0.15rem;
`;
const Category = () => {
  const { onModalDone } = useSelector((state) => state.store);
  const dispatch = useDispatch();
  const onModal = useCallback(() => {
    dispatch({
      type: ON_MODAL,
    });
  }, []);
  const a = [
    { text: "추천순" },
    { text: "치타배달" },
    { text: "배달비" },
    { text: "최소주문" },
    { text: "할인쿠폰" },
  ];
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <>
      <CategoryBlock>
        <StyledSlider {...settings}>
          {a.map((item) => {
            return (
              <>
                <CategoryList key={item}>
                  <CategoryMark onClick={onModal}>
                    <div>{item.text}</div>
                    <DownOutlined />
                  </CategoryMark>
                </CategoryList>
              </>
            );
          })}
        </StyledSlider>
      </CategoryBlock>
      {onModalDone && <Modal />}
    </>
  );
};

export default Category;
