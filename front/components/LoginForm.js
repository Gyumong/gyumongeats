/** @format */

import React, { useCallback } from "react";
import Link from "next/link";
import {
  FormBlock,
  InputBlock,
  ButtonBlock,
  ABlock,
  LowerBlock,
} from "./StyleForm";
import useInput from "../hooks/useInput";
import { useSelector, useDispatch } from "react-redux";
import { loginRequestAction } from "../reducers/user";

// eslint-disable-next-line react/prop-types
const LoginForm = () => {
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const { logInLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const onSubmitForm = useCallback(() => {
    console.log(email, password);
    dispatch(loginRequestAction({ email, password }));
  }, [email, password]);

  return (
    <FormBlock onFinish={onSubmitForm}>
      <h1>규몽이츠</h1>
      <div>
        <InputBlock
          name="user-email"
          placeholder="아이디"
          value={email}
          type="email"
          onChange={onChangeEmail}
        />
      </div>
      <div>
        <InputBlock
          name="user-password"
          placeholder="비밀번호"
          value={password}
          type="password"
          onChange={onChangePassword}
        />
      </div>
      <ButtonBlock htmlType="submit" loading={logInLoading}>
        로그인
      </ButtonBlock>
      <LowerBlock>
        <Link href="/signup">
          <ABlock>회원가입</ABlock>
        </Link>
      </LowerBlock>
    </FormBlock>
  );
};

export default LoginForm;
