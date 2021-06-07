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
import { backUrl } from "@config/config";
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

export const StyledSlider = styled(Slider)`
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

const Image = styled.img`
  display: inline-block;
  height: 60px;
  width: 100%;
`;

const Desc = styled.div`
  display: flex;
  flex-direction: column;
  h4 {
    margin-top: 0.2rem;
    font-weight: bold;
    font-size: 0.8rem;
    margin-bottom: 0.1rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0;
  }
  p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 0.7rem;
    margin: 0;
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
  const popular = [...store].sort((a, b) => b.GPA - a.GPA).slice(0, 9);
  console.log("pop", popular);
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
            <Link
              href="/store/[storeId]"
              as={`/store/${item.storeId}`}
              key={item.storeId}
            >
              <a>
                <PopCardBlock>
                  <Image
                    src={`${backUrl}/img/thumbnail/${item.thumb[0]}.png`}
                  />
                  <Desc>
                    <h4>{item.storeName}</h4>
                    <div>
                      <p>
                        <StarFilled style={{ color: "#FBD94E " }} />
                        {isNaN((item.GPA / item.reviewCnt).toFixed(1))
                          ? "0"
                          : (item.GPA / item.reviewCnt).toFixed(1)}
                        ({item.reviewCnt})
                      </p>
                      <p>{item.minOrderPrice}원</p>
                    </div>
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
