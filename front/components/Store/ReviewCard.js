/** @format */

import React from "react";
import { Header, ExitButton } from "../Cart/Header";
import { ArrowLeftOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { Rate } from "antd";
import dayjs from "dayjs";

dayjs.locale("ko");

const ReviewTitleBlock = styled.div`
  padding-top: 7vh;
  width: 95%;
  display: flex;
  margin: 0 auto;
`;
const ReviewGPA = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 30px;
    font-weight: bold;
    margin: 0;
  }
`;

const ReviewDesc = styled.div`
  flex: 4;
  display: flex;
  justify-content: center;
  flex-direction: column;
  p {
    margin: 0;
  }
`;

const ReviewList = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 2vh 0;
  border-bottom: 1px solid #c5c5c3;
  h4 {
    margin: 0;
    font-size: 0.8rem;
  }
`;

const ReviewListSide = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    margin: 0;
  }
`;

const ReviewContent = styled.div`
  font-size: 0.8rem;
  margin-bottom: 1rem;
`;
const ReviewMenu = styled.div`
  display: flex;
  h4 {
    font-size: 0.8rem;
    margin: 0;
    margin-right: 1rem;
  }
  p {
    font-size: 0.8rem;
    margin: 0;
    font-weight: bold;
  }
`;
const ReviewCard = ({ reviewData, PushReview, storeName, gpa }) => {
  return (
    <>
      <Header>
        <ExitButton onClick={PushReview} icon={<ArrowLeftOutlined />} />
        <h1>{storeName} 리뷰</h1>
      </Header>
      <ReviewTitleBlock>
        <ReviewGPA>
          <h1>{gpa / reviewData.length}</h1>
        </ReviewGPA>
        <ReviewDesc>
          <Rate disabled allowHalf defaultValue={gpa / reviewData.length} />
          <p>리뷰 {reviewData.length}개</p>
        </ReviewDesc>
      </ReviewTitleBlock>
      {reviewData.map((v, i) => {
        console.log(v.createdAt);
        return (
          <ReviewList key={i}>
            <h4>이**</h4>
            <ReviewListSide>
              <Rate
                disabled
                allowHalf
                defaultValue={v.GPA}
                style={{ fontSize: "1rem" }}
              />
              <p>{dayjs(v.createdAt).format("YYYY.MM.DD")}</p>
            </ReviewListSide>
            {v.content ? <ReviewContent>{v.content}</ReviewContent> : null}
            <ReviewMenu>
              <h4>주문메뉴</h4>
              <p>{v.menu}</p>
            </ReviewMenu>
          </ReviewList>
        );
      })}
    </>
  );
};

export default ReviewCard;
