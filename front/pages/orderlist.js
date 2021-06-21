/** @format */

import React, { useCallback, useEffect } from "react";
import AppLayout from "@components/AppLayout";
import styled from "styled-components";
import Link from "next/link";
import axios from "axios";
import { LOAD_MY_INFO_REQUEST } from "@reducers/user";
import { useSelector, useDispatch } from "react-redux";
import useSWR from "swr";
import { useRouter } from "next/router";
import dayjs from "dayjs";
import { ADD_MY_CART_REQUEST } from "@reducers/cart";
import { backUrl } from "@config/config";
const OrderListBlock = styled.div`
  max-width: 768px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 15vh;
`;

const Tab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2vh 0;
  border-bottom: 2px solid black;
`;
const OrderCard = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 2vh;
  border: 1px solid #c5c5c3;
  border-radius: 5px;
  padding: 0.8rem;
`;

const LinkBlock = styled.div`
  display: flex;
  justify-content: space-between;
  &:hover {
    cursor: pointer;
  }
`;
const TitleBlock = styled.div`
  * {
    margin: 0;
  }
  h2 {
    font-weight: bold;
    font-size: 1rem;
  }
  p {
    color: #9d9d9e;
    font-size: 0.8rem;
    margin-bottom: 1vh;
  }
  h4 {
    font-size: 0.9rem;
  }
`;
const Thum = styled.img`
  width: 70px;
  height: 70px;
  display: inline-block;
`;
const OrderMenu = styled.div`
  display: flex;
  margin-top: 2vh;
  * {
    margin: 0;
  }
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1rem;
    background-color: #efefef;
    font-size: 0.7rem;
    margin-right: 0.8rem;
    border-radius: 3px;
  }
  h4 {
    font-size: 0.8rem;
  }
`;

const OrderPrice = styled.div`
  display: flex;
  margin-top: 2vh;
  * {
    margin: 0;
    font-size: 0.9rem;
  }
  p {
    margin-right: 0.3rem;
  }
  h4 {
    font-weight: bold;
  }
`;

const ReOrderBtn = styled.button`
  margin-top: 2vh;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  font-size: 0.8rem;
  border-radius: 3px;
  background-color: rgb(1, 175, 255);
  padding: 0.4rem 0;
  color: #fff;
  &:hover {
    cursor: pointer;
  }
`;

const BtnGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const WriteReviewBtn = styled(ReOrderBtn)`
  background-color: #fc846a;
  width: 30%;
`;

const orderListfetcher = (url) =>
  axios.get(url, { withCredentials: true }).then((result) => result.data);

dayjs.locale("ko");

const OrderList = () => {
  const { me } = useSelector((state) => state?.user);
  const { addMyCartDone } = useSelector((state) => state.cart);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    async function getUserInfo() {
      try {
        const response = await axios.get("/auth/reissue", {
          withCredentials: true,
        });
        const { accessToken } = response.data;
        console.log("토큰토큰토큰토큰토큰토큰토큰토큰", accessToken);
        if (accessToken) {
          axios.defaults.headers.common["x-access-token"] =
            await `${accessToken}`;
          dispatch({
            type: LOAD_MY_INFO_REQUEST,
          });
        }
      } catch (e) {
        console.log("ERROR", e);
      }
    }
    getUserInfo();
  }, []);

  const { data: OrderListData, error: OrderListError } = useSWR(
    me ? `${backUrl}/api/order/list?e=${me.customerEmail}` : null,
    orderListfetcher
  );
  const addCart = useCallback((orderList) => {
    orderList.menuList.map((v) => {
      dispatch({
        type: ADD_MY_CART_REQUEST,
        data: {
          storeId: orderList.storeId,
          data: {
            email: me.customerEmail,
            menu: v.menu,
            category: v.category,
            quantity: Number(v.quantity),
          },
        },
      });
    });
  }, []);

  const writeReview = useCallback((v) => {
    router.push(
      `/review/${v.storeId}/${v.id}?menu=${JSON.stringify(
        v.menuList.map((i) => i.menu)
      )}`
    );
  }, []);
  console.log(OrderListData);
  if (!me) {
    router.push("/login");
  }
  if (OrderListError) {
    return (
      <AppLayout>
        <OrderListBlock>
          <Tab>과거 주문 내역</Tab>
          <h1>주문기록을 가져오는데 실패 했습니다.</h1>
        </OrderListBlock>
      </AppLayout>
    );
  }

  if (!OrderListData) {
    return (
      <AppLayout>
        <OrderListBlock>
          <Tab>과거 주문 내역</Tab>
          <h1>아직 주문기록이 없습니다.</h1>
        </OrderListBlock>
      </AppLayout>
    );
  }
  if (addMyCartDone) {
    router.push("/cart");
  }
  console.log(OrderListData.orderList.map((v) => v.storeName));
  return (
    <AppLayout>
      <OrderListBlock>
        <Tab>과거 주문 내역</Tab>
        {OrderListData &&
          OrderListData.orderList.map((v, i) => {
            console.log(v);
            return (
              <OrderCard key={v + i}>
                <Link href={`${backUrl}/store/${v.storeId}`}>
                  <LinkBlock>
                    <TitleBlock>
                      <h2>{v.storeName}</h2>
                      <p>{dayjs(v.orderDate).format("YYYY.MM.DD H:mm")}</p>
                      <h4>배달 완료</h4>
                    </TitleBlock>
                    <Thum src={`${backUrl}/img/thumbnail/${v.thumb}.png`} />
                  </LinkBlock>
                </Link>
                {v.menuList &&
                  v.menuList.map((m, i) => {
                    console.log(m);
                    return (
                      <OrderMenu key={m + i}>
                        <p>{m.quantity}</p>
                        <h4>{m.menu}</h4>
                      </OrderMenu>
                    );
                  })}
                <OrderPrice>
                  <p>합계:</p>
                  <h4>{v.price}원</h4>
                </OrderPrice>
                <BtnGroup>
                  {!v?.reviewRegistered ? (
                    <WriteReviewBtn onClick={() => writeReview(v)}>
                      리뷰 쓰기
                    </WriteReviewBtn>
                  ) : null}

                  <ReOrderBtn onClick={() => addCart(v)}>재주문하기</ReOrderBtn>
                </BtnGroup>
              </OrderCard>
            );
          })}
      </OrderListBlock>
    </AppLayout>
  );
};

export default OrderList;
