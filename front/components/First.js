/** @format */

import React, { useCallback, useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "antd";
import LoginForm from "./LoginForm";
import { useSelector } from "react-redux";
const FisrtBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 768px;
  height: 100vh;
  padding: 60px 30px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  height: 10vh;
`;

const ButtonBlock = styled(Button)`
  background-color: #42a5f5;
  color: white;
  height: 100%;
  background: ${(props) => props.background};
`;

const First = () => {
  const [custom, setcustom] = useState(false);
  const [admin, setadmin] = useState(false);
  const { signUpDone } = useSelector((state) => state.user);

  useEffect(() => {
    if (signUpDone) {
      setcustom(true);
    }
  }, [signUpDone]);
  const onCustom = useCallback(() => {
    setcustom((prev) => !prev);
  }, [custom]);
  const onAdmin = useCallback(() => {
    setadmin((prev) => !prev);
  }, [admin]);
  const onPrev = useCallback(() => {
    setcustom(false);
    setadmin(false);
  }, [admin, custom]);
  {
    if (custom || admin) return <LoginForm admin={admin} onPrev={onPrev} />;
  }

  return (
    <>
      <FisrtBlock>
        <ButtonGroup>
          <ButtonBlock onClick={onCustom}>일반 로그인</ButtonBlock>
          <ButtonBlock background="#1EB045" onClick={onAdmin}>
            사장님 로그인
          </ButtonBlock>
        </ButtonGroup>
      </FisrtBlock>
    </>
  );
};

export default First;
