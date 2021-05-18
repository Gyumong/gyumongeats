/** @format */

import React from "react";
import { CardImageBlock, CardImageItem } from "./StyleStoreCard";
import { backUrl } from "@config/config";
const CardImage = ({ images }) => {
  if (images.length < 3) {
    return (
      <CardImageBlock>
        <CardImageItem src={`${backUrl}/img/thumbnail/${images[0]}.png`} />
      </CardImageBlock>
    );
  } else {
    return (
      <CardImageBlock>
        <CardImageItem
          src={`${backUrl}/img/thumbnail/${images[0]}.png`}
          style={{ width: "74%", marginRight: "1%" }}
        />
        <div
          style={{
            width: "25%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <CardImageItem
            src={`${backUrl}/img/thumbnail/${images[1]}.png`}
            style={{ height: "49%" }}
          />
          <CardImageItem
            src={`${backUrl}/img/thumbnail/${images[2]}.png`}
            style={{ height: "49%" }}
          />
        </div>
      </CardImageBlock>
    );
  }
};

export default CardImage;
