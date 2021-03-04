/** @format */

import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import router from "next/router";
import { LOAD_MY_INFO_REQUEST } from "../reducers/user";
import wrapper from "../store/configureStore";
import { END } from "redux-saga";
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
  QuantityModal,
} from "../components/Cart/MenuCard";
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
const Cart = () => {
  const { me } = useSelector((state) => state.user);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = useCallback(() => {
    setIsModalVisible(true);
  }, [isModalVisible]);

  const handleOk = useCallback(() => {
    setIsModalVisible(false);
  }, [isModalVisible]);
  const ExitCart = useCallback(() => {
    router.push("/");
  }, []);
  if (!me) {
    return router.push("/login");
  }

  // <ShoppingCartOutlined style={{ fontSize: "100px" }} />
  // <h3>장바구니가 비어있습니다.</h3>
  return (
    <>
      <Header>
        <ExitButton onClick={ExitCart} icon={<CloseOutlined />} />
        <h1>카트</h1>
      </Header>
      <CartBlock>
        <CartMenuCardBlock>
          <CartMenuCardTitle>
            <h2>바스버거 문정역점</h2>
          </CartMenuCardTitle>
          <CartMenuCard>
            <MenuTitle>
              칠면조버거 세트 <CloseOutlined />
            </MenuTitle>
            <MenuDesc>
              치즈베이컨프라이로 변경 (+500원),스프라이트(355ml로)변경
            </MenuDesc>
            <MenuPrice>
              23,400원
              <QuantitySelect onClick={showModal}>
                <p>1</p>
                <CaretDownOutlined />
                <QuantityModal
                  visible={isModalVisible}
                  cancelButtonProps={true}
                  footer={false}
                  closable={false}
                  width={"80%"}
                  bodyStyle={{ padding: 0 }}
                >
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                  <p>4</p>
                  <p>5</p>
                </QuantityModal>
              </QuantitySelect>
            </MenuPrice>
          </CartMenuCard>
        </CartMenuCardBlock>
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
