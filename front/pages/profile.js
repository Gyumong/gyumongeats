/** @format */

import React, { useCallback } from "react";
import AppLayout from "../components/AppLayout";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Button } from "antd";
import { LOG_OUT_REQUEST } from "../reducers/user";

const MyProfileBlock = styled.div`
  * {
    margin: 0;
  }
  position: fixed;
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
  const { me, logOutLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onLogOut = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  }, []);
  return (
    <AppLayout>
      {me ? (
        <MyProfileBlock>
          <h2>{me.nickname}</h2>
          <p>{me.phone}</p>
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
