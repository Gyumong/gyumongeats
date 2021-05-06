/** @format */

import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LOAD_MY_INFO_REQUEST } from "../reducers/user";
import wrapper from "../store/configureStore";
import { END } from "redux-saga";
import useSWR, { trigger } from "swr";
import axios from "axios";
import ReqCard from "../components/Cart/ReqCard";
import { Header, ExitButton } from "../components/Cart/Header";
import {
  CartMenuCardBlock,
  CartMenuCardTitle,
  CartMenuCard,
  MenuTitle,
  MenuPrice,
  QuantitySelect,
  PlusMenuButton,
} from "../components/Cart/MenuCard";
import Modal from "../components/Cart/CartModal";
import { CartModal } from "../components/StyleMainPage";
import {
  CloseOutlined,
  ShoppingCartOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import { DELETE_CART_MENU_REQUEST } from "../reducers/cart";
import { useRouter } from "next/router";
import useInput from "../hooks/useInput";
import { TAKE_ORDER_REQUEST } from "../reducers/order";
const CartBlock = styled.div`
  padding-top: 5vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const NoDataCart = styled.div`
  padding-top: 5vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const OrderButton = styled(CartModal)`
  bottom: 0;
`;
const cartfetcher = (url) =>
  axios.get(url, { withCredentials: true }).then((result) => result.data);

const Cart = () => {
  const { me } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { data: cartData, error: cartError } = useSWR(
    me.customerEmail
      ? `http://localhost:3085/api/cart/info?e=${me.customerEmail}`
      : null,
    cartfetcher
  );
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [target, setTarget] = useState(null);
  const router = useRouter();
  const [inputText, onChangeInputText] = useInput("");
  const [selectText, setSelectText] = useState("직접 수령(부재 시 문 앞)");
  const { takeOrderDone, msg } = useSelector((state) => state.order);
  const DeleteMenu = useCallback((m) => {
    console.log(m);
    dispatch({
      type: DELETE_CART_MENU_REQUEST,
      data: {
        email: me.customerEmail,
        menu: m.name,
        category: m.category,
      },
    });
    // trigger(`http://localhost:3085/api/cart/info?e=${me.customerEmail}`);
  }, []);
  const Order = useCallback(() => {
    if (cartData?.store?.minOrderPrice < lastPrice) {
      dispatch({
        type: TAKE_ORDER_REQUEST,
        data: {
          email: me.customerEmail,
          storeId: cartData.store.storeId,
          price: lastPrice,
          requestForOwner: inputText,
          requestForRider: selectText,
          address: "문정동",
          menuList: cartData.menuList,
        },
      });
    } else {
      alert("최소주문금액 이상만 주문이 가능합니다");
    }
  }, [me, cartData, inputText, selectText]);

  const showModal = useCallback(
    (i) => {
      setIsModalVisible(true);
      setTarget(i);
    },
    [isModalVisible]
  );

  const closeModal = useCallback(async () => {
    trigger(`http://localhost:3085/api/cart/info?e=${me.customerEmail}`);
    await setIsModalVisible(false);
  }, [isModalVisible]);

  const onChangeSelectText = useCallback((value) => {
    setSelectText(value);
  }, []);

  const ExitCart = useCallback(() => {
    router.push("/");
  }, []);
  if (!me) {
    return router.push("/login");
  }

  if (!cartData || cartError) {
    return (
      <>
        <Header>
          <ExitButton onClick={ExitCart} icon={<CloseOutlined />} />
          <h1>카트</h1>
        </Header>
        <NoDataCart>
          <ShoppingCartOutlined style={{ fontSize: "100px" }} />
          <h3>장바구니가 비어있습니다.</h3>
        </NoDataCart>
      </>
    );
  }

  if (takeOrderDone) {
    alert(`${msg}`);
    router.push("/");
  }

  const lastPrice = cartData.menuList
    .map((v) => v.price * v.quantity)
    .reduce((a, b) => a + b);

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
                  {m.name} <CloseOutlined onClick={() => DeleteMenu(m)} />
                </MenuTitle>
                {/* <MenuDesc>
                  치즈베이컨프라이로 변경 (+500원),스프라이트(355ml로)변경
                </MenuDesc> */}
                <MenuPrice>
                  {m.price * m.quantity}원
                  <QuantitySelect onClick={() => showModal(m)}>
                    <p>{m.quantity}</p>
                    <CaretDownOutlined />
                  </QuantitySelect>
                </MenuPrice>
              </CartMenuCard>
            );
          })}
          <PlusMenuButton
            onClick={() => router.push(`/store/${cartData.store.storeId}`)}
          >
            메뉴추가
          </PlusMenuButton>
          {isModalVisible ? (
            <Modal close={closeModal} menu={target} me={me} />
          ) : null}
        </CartMenuCardBlock>
        {!isModalVisible ? (
          <ReqCard
            inputText={inputText}
            onChangeInputText={onChangeInputText}
            SelectText={selectText}
            onChangeSelectText={onChangeSelectText}
          />
        ) : null}
        <OrderButton onClick={Order}>
          <h2>{lastPrice}원 결제하기</h2>
        </OrderButton>
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

export default React.memo(Cart);
