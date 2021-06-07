/** @format */

import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ThumbSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
  }
`;
export const Indicator = styled.div`
  text-align: center;

  & > div {
    position: absolute;
    width: 35px;
    height: 18px;
    line-height: 18px;
    letter-spacing: 1px;
    border-radius: 15px;
    background: #313131;
    display: inline-block;
    text-align: center;
    color: white;
    opacity: 0.9;
    font-size: 10px;
    top: 33%;
    right: 5%;
    z-index: 10000;
  }
`;
export const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 52vh;
  * {
    margin: 0;
  }
`;
export const BookMarkButton = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 500;
  &:hover {
    cursor: pointer;
  }
`;
export const GoBackButton = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100000;
  &:hover {
    cursor: pointer;
  }
`;
export const Thumbnail = styled.img`
  height: 27vh;
  display: inline-block;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  align-items: center;
  position: absolute;
  z-index: 100;
  top: 40%;
  left: 5%;
  -webkit-box-shadow: 0px 0px 9px -2px #3a3a3a;
  box-shadow: 0px 0px 9px -2px #3a3a3a;
  width: 90%;
  padding: 3vh 0;
  h2 {
    font-weight: bold;
  }
  strong {
    font-weight: 700;
  }
  p {
    display: flex;
    align-items: center;
    margin-left: 1rem;
    color: rgb(1, 175, 255);
  }
`;
export const TitleText = styled.div`
  font-weight: 700;
  display: flex;
  align-items: center;
  p {
    margin-left: 0.5rem;
    color: rgb(1, 175, 255);
    font-weight: 500;
    font-size: 0.8rem;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 12vh;
  width: 90%;
`;

export const DescBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2vh;
  h3 {
    font-size: 14px;
  }
  strong {
    margin-left: 1vw;
  }
`;

export const DescSide = styled.div`
  display: flex;
`;

export const DescSideT = styled.div`
  width: 20%;
  font-size: 12px;
`;

export const DescSideD = styled.div`
  font-size: 12px;
`;
