/** @format */

import React from "react";
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
const LoginForm = () => {
  return (
    <FormBlock>
      <h1>규몽이츠</h1>
      <div>
        <InputBlock name="user-id" placeholder="아이디" />
      </div>
      <div>
        <InputBlock name="user-password" placeholder="비밀번호" />
      </div>
      <ButtonBlock htmlType="submit">로그인</ButtonBlock>
      <Link href="/signup" passHref>
        <ABlock>회원가입</ABlock>
      </Link>
    </FormBlock>
  );
};

export default LoginForm;
