/** @format */

import React from "react";
import { CardImageBlock, CardImageItem } from "./StyleStoreCard";
const CardImage = ({ images }) => {
  if (images.length < 3) {
    return (
      <CardImageBlock>
        <CardImageItem />
      </CardImageBlock>
    );
  } else {
    return (
      <CardImageBlock>
        <CardImageItem style={{ width: "74%", marginRight: "1%" }} />
        <div
          style={{
            width: "25%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <CardImageItem style={{ height: "49%" }} />
          <CardImageItem style={{ height: "49%" }} />
        </div>
      </CardImageBlock>
    );
  }
};

export default CardImage;
