/** @format */

import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
import { StarFilled } from "@ant-design/icons";
import { useSelector } from "react-redux";

const PopularBlock = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  margin: 0 auto;
  width: 96%;
  overflow: hidden;
  h2 {
    padding: 0.5rem 0 0.5rem 0.2rem;
    font-weight: bold;
    font-size: 1rem;
    margin: 0;
  }
`;

const StyledSlider = styled(Slider)`
  display: flex;
  flex-direction: column;
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
const PopCardBlock = styled.div``;

const Image = styled.div`
  max-width: 100%;
  height: 60px;
  background-color: rgb(0, 102, 238);
`;

const Desc = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  h4 {
    margin-top: 0.2rem;
    font-weight: bold;
    font-size: 0.8rem;
    margin-bottom: 0.1rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 0.7rem;
    margin-bottom: 0.1rem;
  }
  span {
    font-size: 0.7rem;
  }
`;
const PopularCard = () => {
  const { restaurant } = useSelector((state) => state.store);
  const popular = [...restaurant].sort((a, b) => b.gpa - a.gpa).slice(0, 9);
  console.log(popular);
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false,
  };
  return (
    <PopularBlock>
      <h2>인기 프랜차이즈</h2>
      <StyledSlider {...settings}>
        {popular.map((item) => {
          return (
            <Link href="/post/[id]" as={`/post/${item.id}`} key={item.id}>
              <a>
                <PopCardBlock>
                  <Image />
                  <Desc>
                    <h4>{item.restaurant_name}</h4>
                    <p>
                      <StarFilled style={{ color: "#FBD94E " }} />
                      {item.gpa}(2181) · 0.4kmasfdasffdsa
                    </p>
                    <span>{item.min_order_price}원</span>
                  </Desc>
                </PopCardBlock>
              </a>
            </Link>
          );
        })}
      </StyledSlider>
    </PopularBlock>
  );
};

export default PopularCard;
