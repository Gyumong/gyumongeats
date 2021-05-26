/** @format */

import React, { useCallback } from "react";
import AppLayout from "@components/AppLayout";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Button } from "antd";
import { LOAD_MY_INFO_REQUEST, LOG_OUT_REQUEST } from "@reducers/user";
import Router from "next/router";
import axios from "axios";
import wrapper from "../store/configureStore";
import { END } from "redux-saga";
const MyProfileBlock = styled.div`
  * {
    margin: 0;
  }
  position: fixed;
  z-index: 500;
  max-width: 420px;
  top: 0;
  width: 100%;
  height: 15%;
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const LogOutButton = styled(Button)`
  position: absolute;
  right: 5%;
`;
const Profile = () => {
  const { me, logOutLoading, logOutDone } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch({
  //     type: LOAD_MY_INFO_REQUEST,
  //   });
  // }, []);
  // useEffect(() => {
  //   // 로그인 안한채로 프로필 페이지가면 문제생기는걸 방지해줌
  // }, [me]);
  if (!me) {
    Router.push("/login");
  }
  if (logOutDone) {
    Router.push("/");
  }
  const onLogOut = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  }, []);
  return (
    <AppLayout>
      {me ? (
        <MyProfileBlock>
          <h2>{me.customerName}</h2>
          <p>{me.customerPhone}</p>
          <LogOutButton
            type="primary"
            onClick={onLogOut}
            loading={logOutLoading}
          >
            로그아웃
          </LogOutButton>
        </MyProfileBlock>
      ) : null}
    </AppLayout>
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
          axios.defaults.headers.common["x-access-token"] =
            await `${accessToken}`;
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

export default Profile;
