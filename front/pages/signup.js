/** @format */

import React, { useState, useCallback, useEffect } from "react";
import { FormBlock, InputBlock, ButtonBlock } from "../components/StyleForm";
import useInput from "../hooks/useInput";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";
import { SIGN_UP_REQUEST } from "../reducers/user";

const ErrorMessage = styled.div`
  color: red;
`;
const SignUp = () => {
  const [email, onChangeEmail] = useInput("");
  const [name, onChangeName] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [phonenumber, onChangePhonenumber] = useInput();
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const dispatch = useDispatch();
  const { signUpLoading, signUpDone, signUpError } = useSelector(
    (state) => state.user
  );
  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );

  useEffect(() => {
    if (signUpDone) {
      Router.push("/");
    }
  }, [signUpDone]);

  useEffect(() => {
    if (signUpError) {
      alert(signUpError);
    }
  }, [signUpError]);

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    dispatch({
      type: SIGN_UP_REQUEST,
      data: { email, password, name, phonenumber },
    });
    console.log(email, name, password, phonenumber);
  }, [password, passwordCheck]);
  return (
    <FormBlock onFinish={onSubmit}>
      <h1>회원가입 </h1>
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
        name="user-name"
        type="text"
        placeholder="이름"
        value={name}
        onChange={onChangeName}
      />
      <InputBlock
        name="user-phone"
        type="number"
        placeholder="핸드폰번호"
        value={phonenumber}
        onChange={onChangePhonenumber}
      />
      <ButtonBlock htmlType="submit" loading={signUpLoading}>
        회원가입
      </ButtonBlock>
    </FormBlock>
  );
};

export default SignUp;
