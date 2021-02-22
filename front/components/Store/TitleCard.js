/** @format */

import React, { useState, useCallback } from "react";
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
import {
  StarFilled,
  ClockCircleOutlined,
  RightOutlined,
} from "@ant-design/icons";
import ImagesZoom from "../ImagesZoom";
const TitleCard = () => {
  const [showImagesZoom, setShowImagesZoom] = useState(false);

  const onZoom = useCallback(() => {
    setShowImagesZoom(true);
  }, []);
  const onClose = useCallback(() => {
    setShowImagesZoom(false);
  }, []);
  return (
    <>
      <TitleBlock>
        <Thumbnail onClick={onZoom} />
        <TitleBox>
          <h2>닭치Go</h2>
          <p>
            <StarFilled style={{ color: "#ffeaa7" }} />
            (리뷰개수) · 거리 · 원
          </p>
        </TitleBox>
        <Description>
          <DescBar>
            <h3>
              <ClockCircleOutlined />
              <strong>배달시간</strong>
            </h3>
            <h3>
              <storng>매장/원산지정보</storng>
              <RightOutlined style={{ color: "#08c", marginLeft: "1vw" }} />
            </h3>
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
      {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
    </>
  );
};

export default TitleCard;
