/** @format */

import React, { useState, useCallback, useEffect } from "react";
import { Header, ExitButton } from "@components/Cart/Header";
import { CloseOutlined, CheckCircleFilled } from "@ant-design/icons";
import axios from "axios";
import { LOAD_MY_INFO_REQUEST } from "@reducers/user";
import styled from "styled-components";
import { Rate, Input } from "antd";
import { useRouter } from "next/router";
import { CartModal } from "@components/StyleMainPage";
import { useSelector, useDispatch } from "react-redux";
import { WRITE_REVIEW_REQUEST } from "@reducers/review";
const ReviewBlock = styled.div`
  padding-top: 5vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const ReviewBox = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  padding-top: 3vh;
  align-items: flex-start;
  h2 {
    font-weight: bold;
    margin: 0;
  }
`;
const ReviewInputBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  width: 100%;
`;

const ReviewInputText = styled(Input.TextArea)`
  width: 100%;
  font-size: 0.8rem;
  margin-top: 2vh;
`;

const MenuItem = styled.div`
  margin-top: 2vh;
  font-size: 0.9rem;
`;

const AddReview = styled(CartModal)`
  bottom: 0;
`;
const Review = () => {
  const router = useRouter();
  const { me } = useSelector((state) => state?.user);
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
        router.push("/login");

        console.log("ERROR", e);
      }
    }
    getUserInfo();
  }, []);
  const { writeReviewDone } = useSelector((state) => state?.review);
  const dispatch = useDispatch();
  const { menu, storeId, orderId } = router.query;
  const [star, setStar] = useState(0);
  const [text, setText] = useState("");
  const starchecked = useCallback(
    (e) => {
      setStar(e);
    },
    [star]
  );
  const onChangeText = useCallback(
    (e) => {
      setText(e.target.value);
    },
    [text]
  );

  const writeReview = useCallback(() => {
    if (star > 0 && me?.customerEmail) {
      dispatch({
        type: WRITE_REVIEW_REQUEST,
        data: {
          email: me?.customerEmail,
          storeId: storeId,
          orderId: orderId,
          content: text,
          img: "",
          GPA: star,
          menuName: JSON.parse(menu).join("·"),
        },
      });
    }
  }, [me?.customerEmail, text, star]);
  if (writeReviewDone) {
    alert("리뷰가 작성되었습니다");
    router.push("/");
  }
  return (
    <>
      <Header>
        <ExitButton onClick={() => router.push("/")} icon={<CloseOutlined />} />
        <h1>만족도 평가 및 리뷰</h1>
      </Header>
      <ReviewBlock>
        <ReviewBox>
          <CheckCircleFilled
            style={{ fontSize: "2rem", color: "rgb(1, 175, 255)" }}
          />
          <ReviewInputBlock>
            <h2>음식 평가</h2>
            <Rate
              value={star}
              onChange={starchecked}
              style={{ marginTop: "5vh" }}
            />
            <ReviewInputText
              autoSize={{ minRows: 4, maxRows: 6 }}
              placeholder="리뷰를 작성해주세요 :)"
              value={text}
              onChange={onChangeText}
            />

            {menu
              ? JSON.parse(menu).map((v) => {
                  return <MenuItem key={v}>{v}</MenuItem>;
                })
              : null}
          </ReviewInputBlock>
        </ReviewBox>
        <AddReview onClick={writeReview}>등록하기</AddReview>
      </ReviewBlock>
    </>
  );
};

export default Review;
