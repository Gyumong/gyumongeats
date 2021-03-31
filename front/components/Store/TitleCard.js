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
  TitleText,
  BookMarkButton,
} from "./StyleTitleCard";
import {
  StarFilled,
  ClockCircleOutlined,
  RightOutlined,
  HeartOutlined,
  HeartFilled,
} from "@ant-design/icons";
import ImagesZoom from "../ImagesZoom";
import { useSelector, useDispatch } from "react-redux";
import {
  ADD_BOOKMARK_REQUEST,
  DELETE_BOOKMARK_REQUEST,
} from "../../reducers/bookmark";
import useSWR from "swr";
import axios from "axios";
const bookmarkfetcher = (url) =>
  axios.get(url, { withCredentials: true }).then((result) => result.data);
const TitleCard = ({
  storeName,
  gpa,
  estimatedDelTime,
  deliveryFee,
  thumb,
  reviewData,
  PushReview,
  storeId,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showImagesZoom, setShowImagesZoom] = useState(false);
  const dispatch = useDispatch();
  const { customerEmail } = useSelector((state) => state.user?.me);

  const { data: bookmarkData, mutate } = useSWR(
    customerEmail ? `/bookmark/list?e=${customerEmail}` : null,
    bookmarkfetcher
  );
  const onZoom = useCallback(() => {
    setShowImagesZoom(true);
  }, []);
  const onClose = useCallback(() => {
    setShowImagesZoom(false);
  }, []);

  const onClickBookMark = useCallback(() => {
    if (customerEmail) {
      if (bookmarkData?.bookmarkList.findIndex((v) => v.storeId !== storeId)) {
        dispatch({
          type: ADD_BOOKMARK_REQUEST,
          data: {
            email: customerEmail,
            storeId: storeId,
          },
        });
      }
      dispatch({
        type: DELETE_BOOKMARK_REQUEST,
        data: {
          e: customerEmail,
          id: storeId,
        },
      });
      mutate(bookmarkData);
    }
  }, []);
  console.log(bookmarkData);
  return (
    <>
      <TitleBlock>
        <BookMarkButton onClick={onClickBookMark}>
          {bookmarkData?.bookmarkList.findIndex(
            (v) => v.storeId !== storeId
          ) ? (
            <HeartOutlined style={{ fontSize: "25px", color: "white" }} />
          ) : (
            <HeartFilled style={{ fontSize: "25px", color: "white" }} />
          )}
        </BookMarkButton>
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
          {reviewData.length !== 0 ? (
            <TitleText>
              <StarFilled style={{ color: "#ffeaa7" }} />
              {gpa / reviewData.length}
              <p onClick={PushReview}>
                리뷰 {reviewData.length}개{" "}
                <RightOutlined style={{ color: "rgb(1, 175, 255)" }} />
              </p>
            </TitleText>
          ) : null}
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
