/** @format */

import React, { useState, useCallback } from "react";
import { Header, ExitButton } from "../../../components/Cart/Header";
import { CloseOutlined, CheckCircleFilled } from "@ant-design/icons";
import axios from "axios";
import wrapper from "../../../store/configureStore";
import { END } from "redux-saga";
import { LOAD_MY_INFO_REQUEST } from "../../../reducers/user";
import styled from "styled-components";
import { Rate, Input } from "antd";
import { useRouter } from "next/router";
import { CartModal } from "../../../components/StyleMainPage";
import { useSelector, useDispatch } from "react-redux";
import { WRITE_REVIEW_REQUEST } from "../../../reducers/review";
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
  const { customerEmail } = useSelector((state) => state.user?.me);
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
    if (star > 0 && customerEmail) {
      dispatch({
        type: WRITE_REVIEW_REQUEST,
        data: {
          email: customerEmail,
          storeId: storeId,
          orderId: orderId,
          content: text,
          img: "",
          GPA: star,
          menuName: JSON.parse(menu).join("·"),
        },
      });
    }
  }, [customerEmail, text, star]);
  console.log(JSON.parse(menu).join("·"));
  return (
    <>
      <Header>
        <ExitButton icon={<CloseOutlined />} />
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

            {JSON.parse(menu).map((v) => {
              return <MenuItem key={v}>{v}</MenuItem>;
            })}
          </ReviewInputBlock>
        </ReviewBox>
        <AddReview onClick={writeReview}>등록하기</AddReview>
      </ReviewBlock>
    </>
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

export default Review;
