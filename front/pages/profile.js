/** @format */

import React, { useEffect, useCallback } from "react";
import AppLayout from "../components/AppLayout";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Button } from "antd";
import { LOAD_MY_INFO_REQUEST, LOG_OUT_REQUEST } from "../reducers/user";
import Router from "next/router";
import wrapper from "../store/configureStore";
import { END } from "redux-saga";
import axios from "axios";
const MyProfileBlock = styled.div`
  * {
    margin: 0;
  }
  position: fixed;
  z-index: 500;
  top: 0;
  max-width: 768px;
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
  const { me, logOutLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!me) {
      Router.push("/login");
    }
  }, [me]);

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
    axios.defaults.headers.common["x-access-token"] = "hh";
    // if (context.req && cookie) {
    //   axios.defaults.headers.Cookie = cookie;
    // }
    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default Profile;
