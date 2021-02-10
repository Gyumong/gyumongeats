/** @format */

import styled from "styled-components";

export const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 52vh;
  * {
    margin: 0;
  }
`;

export const Thumbnail = styled.div`
  height: 27vh;
  background: orange;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  align-items: center;
  position: absolute;
  z-index: 100;
  top: 35%;
  left: 5%;
  -webkit-box-shadow: 0px 0px 9px -2px #3a3a3a;
  box-shadow: 0px 0px 9px -2px #3a3a3a;
  width: 90%;
  padding: 3vh 0;
  h2 {
    font-weight: bold;
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
