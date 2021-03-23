/** @format */

import React from "react";
import AppLayout from "../components/AppLayout";
import styled from "styled-components";
import Link from "next/link";

const OrderListBlock = styled.div`
  max-width: 768px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
`;
const TitleBlock = styled.div`
  * {
    margin: 0;
  }
  h2 {
    font-weight: bold;
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
const Thum = styled.div`
  width: 70px;
  height: 70px;
  background: #efefef;
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
`;

const BtnGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const WriteReviewBtn = styled(ReOrderBtn)`
  width: 30%;
  background-color: #fc846a;
`;
const OrderList = () => {
  return (
    <AppLayout>
      <OrderListBlock>
        <Tab>과거 주문 내역</Tab>
        <OrderCard>
          <Link href="/">
            <LinkBlock>
              <TitleBlock>
                <h2>만다린 송파점</h2>
                <p>2021-02-18</p>
                <h4>배달 완료</h4>
              </TitleBlock>
              <Thum></Thum>
            </LinkBlock>
          </Link>
          <OrderMenu>
            <p>1</p>
            <h4>열무물냉면</h4>
          </OrderMenu>
          <OrderMenu>
            <p>1</p>
            <h4>열무물냉면</h4>
          </OrderMenu>
          <OrderPrice>
            <p>합계:</p>
            <h4>10,000원</h4>
          </OrderPrice>
          <BtnGroup>
            <WriteReviewBtn>리뷰 쓰기</WriteReviewBtn>
            <ReOrderBtn>재주문하기</ReOrderBtn>
          </BtnGroup>
        </OrderCard>
      </OrderListBlock>
    </AppLayout>
  );
};

export default OrderList;
