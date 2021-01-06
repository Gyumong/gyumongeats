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
        <CardImageItem style={{ width: "75%", marginRight: "5px" }} />
        <div
          style={{
            width: "25%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <CardImageItem style={{ height: "48%" }} />
          <CardImageItem style={{ height: "48%" }} />
        </div>
      </CardImageBlock>
    );
  }
};

export default CardImage;
