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
  // eslint-disable-next-line react/prop-types
  return (
    <CardBlock>
      {post.Images[0] && <CardImage images={post.Images} />}
      <CardMeta>
        <TitleBar>
          <h3>{post.name}</h3>
          <p>{post.deliverytime}</p>
        </TitleBar>
        <SideBar>
          <p>
            <StarFilled style={{ color: "#ffeaa7" }} /> {post.scope}(리뷰개수) ·
            거리 · {post.deliverycost}원
          </p>
        </SideBar>
      </CardMeta>
    </CardBlock>
  );
};

export default StoreCard;
