/** @format */
import React, { useState, useCallback } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import axios from "axios";
import { Thumbnail } from "../../../../components/Store/StyleTitleCard";
import {
  MenuBlock,
  MenuTitle,
  MenuDesc,
  Price,
  Count,
  CartModal,
  CountButton,
} from "./style";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

const fetcher = (url) =>
  axios.get(url, { withCredentials: true }).then((result) => result.data.menu);
const Menu = () => {
  const router = useRouter();
  const { storeId, menuId } = router.query;
  const { data: menuData, error: menuError } = useSWR(
    `http://localhost:3085/api/store/menu?s=${storeId}&m=${menuId}`,
    fetcher
  );
  const [menuCount, setMenuCount] = useState(1);
  if (menuError) {
    console.error(menuError);
    return "메뉴 데이터를 가져오는데 실패 하였습니다.";
  }
  if (!menuData) {
    return null;
  }
  console.log(menuData);
  return (
    <MenuBlock>
      <Thumbnail src={`http://localhost:3085/img/thumbnail/3_1.png`} />
      <MenuTitle>
        <h2>{menuData.name}</h2>
        <p>100% 생갈비 / 공기밥 포함</p>
      </MenuTitle>
      <MenuDesc>
        <Price>
          <p>가격</p>
          <p>{menuData.price}원</p>
        </Price>
        <Count>
          <p>수량</p>
          <p>
            <CountButton
              shape="circle"
              icon={
                <MinusOutlined style={{ fontSize: "11px", color: "#C6C8C8" }} />
              }
            />
            {menuCount}
            <CountButton
              shape="circle"
              icon={
                <PlusOutlined style={{ fontSize: "11px", color: "#919191" }} />
              }
            />
          </p>
        </Count>
      </MenuDesc>
      <CartModal>카트에 담기</CartModal>
    </MenuBlock>
  );
};

export default Menu;
