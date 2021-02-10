/**
 * /* eslint-disable react/prop-types
 *
 * @format
 */

/**
 * /* eslint-disable react/prop-types
 *
 * @format
 */

/**
 * /* eslint-disable react/prop-types
 *
 * @format
 */

/** @format */

import React from "react";
import { CardBlock, CardMeta, TitleBar, SideBar } from "./StyleStoreCard";
import { StarFilled } from "@ant-design/icons";
import CardImage from "./CardImage";

// eslint-disable-next-line react/prop-types
const StoreCard = ({ post }) => {
  console.log(post);
  return (
    <CardBlock>
      {post.Thumbnail[0] && <CardImage images={post.Thumbnail} />}
      <CardMeta>
        <TitleBar>
          <h3>{post.restaurant_name}</h3>
          <p>{post.estimated_del_time}</p>
        </TitleBar>
        <SideBar>
          <p>
            <StarFilled style={{ color: "#ffeaa7" }} /> {post.gpa}(리뷰개수) ·
            거리 · {post.min_order_price}원
          </p>
        </SideBar>
      </CardMeta>
    </CardBlock>
  );
};

export default StoreCard;
