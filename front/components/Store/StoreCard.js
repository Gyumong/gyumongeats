/** @format */

import React from "react";
import {
  CardBlock,
  CardImage,
  CardMeta,
  TitleBar,
  SideBar,
} from "./StyleStoreCard";
// eslint-disable-next-line react/prop-types
const StoreCard = () => {
  // eslint-disable-next-line react/prop-types
  return (
    <CardBlock>
      <CardImage />
      <CardMeta>
        <TitleBar>
          <h3>가게이름</h3>
          <p>소요시간</p>
        </TitleBar>
        <SideBar>
          <p>평점(리뷰개수) · 거리 · 배달비</p>
        </SideBar>
      </CardMeta>
    </CardBlock>
  );
};

export default StoreCard;
