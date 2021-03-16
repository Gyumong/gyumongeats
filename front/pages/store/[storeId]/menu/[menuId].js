/** @format */
import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Router, { useRouter } from "next/router";
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
import { LOAD_MY_INFO_REQUEST } from "../../../../reducers/user";
import {
  ADD_MY_CART_REQUEST,
  UPDATE_QUANTITY_REQUEST,
} from "../../../../reducers/cart";
import wrapper from "../../../../store/configureStore";
import { END } from "redux-saga";

const fetcher = (url) =>
  axios.get(url, { withCredentials: true }).then((result) => result.data.menu);
const cartfetcher = (url) =>
  axios.get(url, { withCredentials: true }).then((result) => result.data);
const Menu = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { storeId, menuId } = router.query;
  const { me } = useSelector((state) => state.user);
  const { data: menuData, error: menuError } = useSWR(
    `http://localhost:3085/api/store/menu?s=${storeId}&m=${menuId}`,
    fetcher
  );
  const { data: cartData, error: cartError } = useSWR(
    me?.customerEmail
      ? `http://localhost:3085/api/cart/info?e=${me.customerEmail}`
      : null,
    cartfetcher
  );

  const [menuCount, setMenuCount] = useState(1);
  const { addMyCartDone, addMyCartError, updateQuantityDone } = useSelector(
    (state) => state.cart
  );
  const onIncrease = useCallback(() => {
    setMenuCount((prev) => prev + 1);
  }, [menuCount]);
  const onDecrease = useCallback(() => {
    if (menuCount > 1) {
      setMenuCount((prev) => prev - 1);
    }
  }, [menuCount]);
  const AddCart = useCallback(() => {
    if (me?.customerEmail) {
      if (!cartData) {
        dispatch({
          type: ADD_MY_CART_REQUEST,
          data: {
            storeId,
            data: {
              email: me.customerEmail,
              menu: menuData.name,
              category: menuData.category,
              quantity: menuCount,
            },
          },
        });
      } else {
        if (
          undefined == cartData.menuList.find((v) => v.name === menuData.name)
        ) {
          dispatch({
            type: ADD_MY_CART_REQUEST,
            data: {
              storeId,
              data: {
                email: me.customerEmail,
                menu: menuData.name,
                category: menuData.category,
                quantity: menuCount,
              },
            },
          });
        } else {
          console.log(cartData.menuList);
          console.log(menuData.name);
          // patch api 호출
          dispatch({
            type: UPDATE_QUANTITY_REQUEST,
            data: {
              email: me.customerEmail,
              menu: menuData.name,
              category: menuData.category,
              quantity:
                cartData.menuList.find((v) => v.name === menuData.name)
                  .quantity + menuCount,
            },
          });
        }
      }
    } else {
      router.push("/login");
    }
  }, [me, menuData, cartData, menuCount]);

  if (menuError) {
    console.error(menuError);
    return "메뉴 데이터를 가져오는데 실패 하였습니다.";
  }
  if (!menuData) {
    return "메뉴 데이터가 없습니다.";
  }
  if (addMyCartError) {
    alert(addMyCartError);
  }
  if (addMyCartDone || updateQuantityDone) {
    Router.push(`/store/${storeId}`);
  }

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
          <p>{`${menuData.price}` * `${menuCount}`}원</p>
        </Price>
        <Count>
          <p>수량</p>
          <p>
            <CountButton
              shape="circle"
              icon={
                <MinusOutlined style={{ fontSize: "11px", color: "#C6C8C8" }} />
              }
              onClick={onDecrease}
            />
            {menuCount}
            <CountButton
              shape="circle"
              icon={
                <PlusOutlined style={{ fontSize: "11px", color: "#919191" }} />
              }
              onClick={onIncrease}
            />
          </p>
        </Count>
      </MenuDesc>
      <CartModal onClick={AddCart}>카트에 담기</CartModal>
    </MenuBlock>
  );
};
export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const cookie = context.req ? context.req.headers.cookie : "";
    axios.defaults.headers.Cookie = "";
    if (context.req && cookie) {
      try {
        axios.defaults.headers.Cookie = cookie;
        const { accessToken } = await axios
          .get("/auth/reissue", {
            withCredentials: true,
          })
          .then((res) => res.data);
        console.log("acctoken", accessToken);
        if (accessToken) {
          axios.defaults.headers.common[
            "x-access-token"
          ] = await `${accessToken}`;
          context.store.dispatch({
            type: LOAD_MY_INFO_REQUEST,
          });
        }
      } catch (e) {
        return { props: {} };
      }
    }

    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);
export default Menu;
