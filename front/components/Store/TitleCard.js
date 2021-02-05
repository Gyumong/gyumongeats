/** @format */

import React from "react";
import {
  TitleBlock,
  Thumbnail,
  TitleBox,
  Description,
  DescBar,
  DescSide,
  DescSideT,
  DescSideD,
} from "./StyleTitleCard";
import { StarFilled } from "@ant-design/icons";
const TitleCard = () => {
  return (
    <>
      <TitleBlock>
        <Thumbnail />
        <TitleBox>
          <h2>닭치Go</h2>
          <p>
            <StarFilled style={{ color: "#ffeaa7" }} />
            (리뷰개수) · 거리 · 원
          </p>
        </TitleBox>
        <Description>
          <DescBar>
            <h3>배달시간</h3>
            <h3>매장/원산지정보</h3>
          </DescBar>
          <DescSide>
            <DescSideT>배달비</DescSideT>
            <DescSideD>900원</DescSideD>
          </DescSide>
          <DescSide>
            <DescSideT>최소주문</DescSideT>
            <DescSideD>11,900원</DescSideD>
          </DescSide>
        </Description>
      </TitleBlock>
    </>
  );
};

export default TitleCard;
