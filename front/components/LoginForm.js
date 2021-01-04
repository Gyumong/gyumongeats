/** @format */

import React, { useState, useCallback } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import styled from "styled-components";

const FormBlock = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 768px;
  height: 100vh;
  padding: 60px 30px;
`;

const InputBlock = styled(Input)`
  padding: 5px 8px;
  margin-top: 30px;
  border: none;
  border-bottom: 1px solid #e2e2e2;
`;

const ButtonBlock = styled(Button)`
  margin-top: 30px;
  background-color: #42a5f5;
  color: white;
  &:hover {
    background-color: #42a5f5;
    color: white;
  }
`;
const ABlock = styled.a`
  margin-top: 30px;
  width: 25%;
`;
// eslint-disable-next-line react/prop-types
const LoginForm = ({ setIsLoggedIn }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);
  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    setIsLoggedIn(true);
  }, [id, password]);
  return (
    <FormBlock onFinish={onSubmitForm}>
      <h1>규몽이츠</h1>
      <div>
        <InputBlock
          name="user-id"
          placeholder="아이디"
          value={id}
          onChange={onChangeId}
        />
      </div>
      <div>
        <InputBlock
          name="user-password"
          placeholder="비밀번호"
          value={password}
          onChange={onChangePassword}
        />
      </div>
      <ButtonBlock htmlType="submit">로그인</ButtonBlock>
      <Link href="/signup" passHref>
        <ABlock>회원가입</ABlock>
      </Link>
    </FormBlock>
  );
};

export default LoginForm;
