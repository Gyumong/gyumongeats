/** @format */

import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
import { StarFilled, ArrowRightOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { Button } from "antd";

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
const ButtonMenuBlock = styled.div``;

const ButtonStyled = styled(Button)`
  box-shadow: 0px 0px 9px -2px #3a3a3a;
`;
const ButtonCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  max-width: 100%;
  height: 7.5rem;
  h4 {
    margin-top: 0.4rem;
    font-size: 1rem;
  }
`;
const PopularCard = () => {
  const { store } = useSelector((state) => state.store);
  const popular = [...store].sort((a, b) => b.gpa - a.gpa).slice(0, 9);
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
            <Link href="/store/[id]" as={`/store/${item.id}`} key={item.id}>
              <a>
                <PopCardBlock>
                  <Image />
                  <Desc>
                    <h4>{item.storeName}</h4>
                    <p>
                      <StarFilled style={{ color: "#FBD94E " }} />
                      {item.GPA}(2181) · 0.4kmasfdasffdsa
                    </p>
                    <span>{item.minOrderPrice}원</span>
                  </Desc>
                </PopCardBlock>
              </a>
            </Link>
          );
        })}
        <ButtonMenuBlock>
          <ButtonCard>
            <ButtonStyled shape="circle" icon={<ArrowRightOutlined />} />
            <h4>더보기</h4>
          </ButtonCard>
        </ButtonMenuBlock>
      </StyledSlider>
    </PopularBlock>
  );
};

export default PopularCard;
