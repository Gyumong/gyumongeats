/** @format */

import React, { useCallback } from "react";
import Link from "next/link";
import { FormBlock, InputBlock, ButtonBlock, ABlock } from "./StyleForm";
import useInput from "../hooks/useInput";
import { useSelector, useDispatch } from "react-redux";
import { LOG_IN_REQUEST } from "../reducers/user";

// eslint-disable-next-line react/prop-types
const LoginForm = () => {
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const { logInLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const onSubmitForm = useCallback(() => {
    console.log(email, password);
    dispatch({
      type: LOG_IN_REQUEST,
      data: {
        email,
        password,
      },
    });
  }, [email, password]);
  return (
    <FormBlock onFinish={onSubmitForm}>
      <h1>규몽이츠</h1>
      <div>
        <InputBlock
          name="user-email"
          placeholder="아이디"
          value={email}
          onChange={onChangeEmail}
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
      <ButtonBlock htmlType="submit" loading={logInLoading}>
        로그인
      </ButtonBlock>
      <Link href="/signup" passHref>
        <ABlock>회원가입</ABlock>
      </Link>
    </FormBlock>
  );
};

export default LoginForm;
