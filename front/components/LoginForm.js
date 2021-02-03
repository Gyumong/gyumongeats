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
import { LOG_IN_REQUEST } from "../reducers/user";

// eslint-disable-next-line react/prop-types
const LoginForm = ({ admin, onPrev }) => {
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [adminNumber, onChangeAdminNumber] = useInput("");
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
      {admin ? (
        <div>
          <InputBlock
            name="admin-email"
            placeholder="사업자번호"
            value={adminNumber}
            onChange={onChangeAdminNumber}
          />
        </div>
      ) : null}

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
      <LowerBlock>
        <Link href="/signup" passHref>
          <ABlock>회원가입</ABlock>
        </Link>
        <ABlock onClick={onPrev}>뒤로 가기</ABlock>
      </LowerBlock>
    </FormBlock>
  );
};

export default LoginForm;
