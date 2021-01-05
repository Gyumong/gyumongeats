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
`;
// eslint-disable-next-line react/prop-types
const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>규몽이츠</title>
      </Head>
      <AppLayouts>
        <Component />
      </AppLayouts>
    </>
  );
};

export default wrapper.withRedux(App);
