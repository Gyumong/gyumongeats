/** @format */

import React from "react";
import { CardBlock, CardMeta, TitleBar, SideBar } from "./StyleStoreCard";
import { StarFilled } from "@ant-design/icons";
import CardImage from "./CardImage";

// eslint-disable-next-line react/prop-types
const StoreCard = ({ post }) => {
  console.log(post);
  // eslint-disable-next-line react/prop-types
  return (
    <CardBlock>
      {post.Images[0] && <CardImage images={post.Images} />}
      <CardMeta>
        <TitleBar>
          <h3>가게이름</h3>
          <p>소요시간</p>
        </TitleBar>
        <SideBar>
          <p>
            <StarFilled style={{ color: "#ffeaa7" }} /> 평점(리뷰개수) · 거리 ·
            배달비
          </p>
        </SideBar>
      </CardMeta>
    </CardBlock>
  );
};

export default StoreCard;
