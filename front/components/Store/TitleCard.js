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
  GoBackButton,
} from "./StyleTitleCard";
import {
  StarFilled,
  ClockCircleOutlined,
  RightOutlined,
  HeartOutlined,
  HeartFilled,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import ImagesZoom from "../ImagesZoom";
import { useSelector, useDispatch } from "react-redux";
import {
  ADD_BOOKMARK_REQUEST,
  DELETE_BOOKMARK_REQUEST,
} from "../../reducers/bookmark";
import useSWR from "swr";
import axios from "axios";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const { data: bookmarkData, mutate, isValidating: loading } = useSWR(
    customerEmail ? `/bookmark/list?e=${customerEmail}` : null,
    bookmarkfetcher,
    {
      dedupingInterval: 500,
      revalidateOnFocus: true,
    }
  );
  const onZoom = useCallback(() => {
    setShowImagesZoom(true);
  }, []);
  const onClose = useCallback(() => {
    setShowImagesZoom(false);
  }, []);

  const DeleteBookMark = useCallback(() => {
    if (customerEmail && !loading) {
      dispatch({
        type: DELETE_BOOKMARK_REQUEST,
        data: {
          e: customerEmail,
          id: storeId,
        },
      });
    }
    mutate(bookmarkData);
  }, []);

  const AddBookMark = useCallback(() => {
    if (customerEmail && !loading) {
      dispatch({
        type: ADD_BOOKMARK_REQUEST,
        data: {
          email: customerEmail,
          storeId: storeId,
        },
      });
    }
    mutate(bookmarkData);
  }, []);
  console.log(
    bookmarkData?.bookmarkList.findIndex((v) => v.storeId === storeId)
  );
  if (!bookmarkData) {
    return null;
  }
  return (
    <>
      <TitleBlock>
        <GoBackButton onClick={() => router.back()}>
          <ArrowLeftOutlined style={{ fontSize: "25px", color: "white" }} />
        </GoBackButton>
        {bookmarkData?.bookmarkList.findIndex((v) => v.storeId === storeId) !==
        -1 ? (
          <BookMarkButton onClick={DeleteBookMark}>
            <HeartFilled style={{ fontSize: "25px", color: "white" }} />
          </BookMarkButton>
        ) : (
          <BookMarkButton onClick={AddBookMark}>
            <HeartOutlined style={{ fontSize: "25px", color: "white" }} />
          </BookMarkButton>
        )}
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
