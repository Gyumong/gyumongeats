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
  ThumbSlider,
  Indicator,
} from "./StyleTitleCard";
import {
  StarFilled,
  ClockCircleOutlined,
  RightOutlined,
} from "@ant-design/icons";
import ImagesZoom from "../ImagesZoom";
const TitleCard = ({
  storeName,
  gpa,
  estimatedDelTime,
  deliveryFee,
  thumb,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
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
        <ThumbSlider
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          beforeChange={(slide) => setCurrentSlide(slide)}
          arrows={false}
          autoplay={true}
          autoplaySpeed={3000}
        >
          {thumb.map((v) => {
            return (
              <Thumbnail
                key={v}
                src={`http://localhost:3085/img/thumbnail/${v}.png`}
                onClick={onZoom}
              />
            );
          })}
        </ThumbSlider>
        <Indicator>
          <div>
            {currentSlide + 1}/{thumb.length}
          </div>
        </Indicator>
        <TitleBox>
          <h2>{storeName}</h2>
          <p>
            <StarFilled style={{ color: "#ffeaa7" }} />
            {gpa} · 거리 · 원
          </p>
        </TitleBox>
        <Description>
          <DescBar>
            <h3>
              <ClockCircleOutlined />
              <strong>{estimatedDelTime}</strong>
            </h3>
            <h3>
              <storng>매장/원산지정보</storng>
              <RightOutlined style={{ color: "#08c", marginLeft: "1vw" }} />
            </h3>
          </DescBar>
          <DescSide>
            <DescSideT>배달비</DescSideT>
            <DescSideD>{deliveryFee}원</DescSideD>
          </DescSide>
          <DescSide>
            <DescSideT>최소주문</DescSideT>
            <DescSideD>11,900원</DescSideD>
          </DescSide>
        </Description>
      </TitleBlock>
      {showImagesZoom && <ImagesZoom images={thumb} onClose={onClose} />}
    </>
  );
};

export default TitleCard;
