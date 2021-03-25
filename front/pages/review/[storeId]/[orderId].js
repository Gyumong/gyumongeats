/** @format */

import React from "react";
import { Header, ExitButton } from "../../../components/Cart/Header";
import { CloseOutlined } from "@ant-design/icons";
import axios from "axios";
import wrapper from "../../../store/configureStore";
import { END } from "redux-saga";
import { LOAD_MY_INFO_REQUEST } from "../../../reducers/user";
const Review = () => {
  return (
    <>
      <Header>
        <ExitButton icon={<CloseOutlined />} />
        <h1>만족도 평가 및 리뷰</h1>
      </Header>
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
