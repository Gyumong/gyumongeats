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
const StoreCard = ({ store }) => {
  console.log(store);
  return (
    <CardBlock>
      {store.Thumbnail[0] && <CardImage images={store.Thumbnail} />}
      <CardMeta>
        <TitleBar>
          <h3>{store.restaurant_name}</h3>
          <p>{store.estimated_del_time}</p>
        </TitleBar>
        <SideBar>
          <p>
            <StarFilled style={{ color: "#FBD94E" }} /> {store.gpa}(리뷰개수) ·
            거리 · {store.min_order_price}원
          </p>
        </SideBar>
      </CardMeta>
    </CardBlock>
  );
};

export default StoreCard;
