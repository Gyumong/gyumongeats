/** @format */

import React from "react";
import { CardImageBlock, CardImageItem } from "./StyleStoreCard";
const CardImage = ({ images }) => {
  if (images.length < 3) {
    return (
      <CardImageBlock>
        <CardImageItem images={`${images[0].src}`} />
      </CardImageBlock>
    );
  } else {
    return (
      <CardImageBlock>
        <CardImageItem
          images={`${images[0].src}`}
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
            images={`${images[1].src}`}
            style={{ height: "49%" }}
          />
          <CardImageItem
            images={`${images[2].src}`}
            style={{ height: "49%" }}
          />
        </div>
      </CardImageBlock>
    );
  }
};

export default CardImage;
