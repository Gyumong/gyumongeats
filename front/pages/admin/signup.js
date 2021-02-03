/** @format */

import React, { useState, useCallback } from "react";
import { FormBlock, InputBlock, ButtonBlock } from "../../components/StyleForm";
import useInput from "../../hooks/useInput";
import styled from "styled-components";

const ErrorMessage = styled.div`
  color: red;
`;
const SignUp = () => {
  const [email, onChangeEmail] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [phonenumber, onChangePhonenumber] = useInput();
  const [adminNumber, onChangeAdminNumber] = useInput("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    console.log(email, nickname, password, phonenumber, adminNumber);
  }, [password, passwordCheck]);
  return (
    <FormBlock onFinish={onSubmit}>
      <h1>회원가입 </h1>
      <InputBlock
        name="admin-number"
        placeholder="사업자번호"
        type="number"
        value={adminNumber}
        onChange={onChangeAdminNumber}
      />
      <InputBlock
        name="user-email"
        placeholder="이메일"
        type="email"
        value={email}
        onChange={onChangeEmail}
      />
      <InputBlock
        name="user-password"
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={onChangePassword}
      />
      <InputBlock
        name="user-password-check"
        type="password"
        placeholder="비밀번호확인"
        value={passwordCheck}
        onChange={onChangePasswordCheck}
      />
      {passwordError && (
        <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
      )}
      <InputBlock
        name="user-nick"
        type="text"
        placeholder="닉네임"
        value={nickname}
        onChange={onChangeNickname}
      />
      <InputBlock
        name="user-phone"
        type="number"
        placeholder="핸드폰번호"
        value={phonenumber}
        onChange={onChangePhonenumber}
      />
      <ButtonBlock htmlType="submit">회원가입</ButtonBlock>
    </FormBlock>
  );
};

export default SignUp;
