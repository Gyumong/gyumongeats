/** @format */

import React from "react";
import type { AppProps } from "next/app";
import "antd/dist/antd.css";
import Head from "next/head";
import styled from "styled-components";
import wrapper from "../store/configureStore";

const AppLayouts = styled.div`
  margin: 0 auto;
  max-width: 420px;
  height: 100vh;
  font-family: "Noto Sans KR", sans-serif;
`;
// eslint-disable-next-line react/prop-types
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <AppLayouts>
        <Component {...pageProps} />
      </AppLayouts>
    </>
  );
};

export default wrapper.withRedux(App);
