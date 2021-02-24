/** @format */

import React from "react";
import "antd/dist/antd.css";
import Head from "next/head";
import styled from "styled-components";
import wrapper from "../store/configureStore";

const AppLayouts = styled.div`
  margin: 0 auto;
  max-width: 768px;
  height: 100vh;
  font-family: "Noto Sans KR", sans-serif;
`;
// eslint-disable-next-line react/prop-types
const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <title>규몽이츠</title>
      </Head>
      <AppLayouts>
        <Component />
      </AppLayouts>
    </>
  );
};

export default wrapper.withRedux(App);
