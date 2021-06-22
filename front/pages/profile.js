/** @format */

import React, { useCallback, useEffect } from "react";
import AppLayout from "@components/AppLayout";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Button } from "antd";
import { LOAD_MY_INFO_REQUEST, LOG_OUT_REQUEST } from "@reducers/user";
import Router from "next/router";
import axios from "axios";

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
        Router.push("/login");
        console.log("ERROR", e);
      }
    }
    getUserInfo();
  }, []);

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

export default Profile;
