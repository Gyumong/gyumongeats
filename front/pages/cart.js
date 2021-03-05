/** @format */

import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import router from "next/router";
import { LOAD_MY_INFO_REQUEST } from "../reducers/user";
import wrapper from "../store/configureStore";
import { END } from "redux-saga";
import useSWR from "swr";
import axios from "axios";
import { Header, ExitButton } from "../components/Cart/Header";
import {
  CartMenuCardBlock,
  CartMenuCardTitle,
  CartMenuCard,
  MenuTitle,
  MenuDesc,
  MenuPrice,
  QuantitySelect,
  PlusMenuButton,
} from "../components/Cart/MenuCard";
import Modal from "../components/Cart/CartModal";
import {
  CloseOutlined,
  ShoppingCartOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

const CartBlock = styled.div`
  padding-top: 5vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const cartfetcher = (url) =>
  axios.get(url, { withCredentials: true }).then((result) => result.data);

const Cart = () => {
  const { me } = useSelector((state) => state.user);
  const { data: cartData, error: cartError } = useSWR(
    `http://localhost:3085/api/cart/info?e=${me.customerEmail}`,
    cartfetcher
  );
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = useCallback(() => {
    setIsModalVisible(true);
  }, [isModalVisible]);

  const closeModal = useCallback(() => {
    setIsModalVisible(false);
  }, [isModalVisible]);
  const ExitCart = useCallback(() => {
    router.push("/");
  }, []);
  if (!me) {
    return router.push("/login");
  }
  if (!cartData) {
    return "메뉴 데이터가 없습니다.";
  }
  if (cartError) {
    return "카트 정보를 가져오는데 실패했습니다.";
  }

  // <ShoppingCartOutlined style={{ fontSize: "100px" }} />
  // <h3>장바구니가 비어있습니다.</h3>
  console.log(cartData);
  return (
    <>
      <Header>
        <ExitButton onClick={ExitCart} icon={<CloseOutlined />} />
        <h1>카트</h1>
      </Header>
      <CartBlock>
        <CartMenuCardBlock>
          <CartMenuCardTitle>
            <h2>{cartData.store.storeName}</h2>
          </CartMenuCardTitle>
          {cartData.menuList.map((m, i) => {
            return (
              <CartMenuCard key={m.name + i}>
                <MenuTitle>
                  {m.name} <CloseOutlined />
                </MenuTitle>
                {/* <MenuDesc>
                  치즈베이컨프라이로 변경 (+500원),스프라이트(355ml로)변경
                </MenuDesc> */}
                <MenuPrice>
                  {m.price}원
                  <QuantitySelect onClick={showModal}>
                    <p>{m.quantity}</p>
                    <CaretDownOutlined />
                  </QuantitySelect>
                </MenuPrice>
              </CartMenuCard>
            );
          })}
          <PlusMenuButton>메뉴추가</PlusMenuButton>
        </CartMenuCardBlock>
        {isModalVisible ? <Modal close={closeModal} /> : null}
      </CartBlock>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const cookie = context.req ? context.req.headers.cookie : "";
    axios.defaults.headers.Cookie = "";
    if (context.req && cookie) {
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
    }

    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default Cart;
