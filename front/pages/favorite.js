/** @format */

import React from "react";
import { Header, ExitButton } from "../components/Cart/Header";
import { useRouter } from "next/router";
import { ArrowLeftOutlined } from "@ant-design/icons";
import axios from "axios";
import { LOAD_MY_INFO_REQUEST } from "../reducers/user";
import wrapper from "../store/configureStore";
import { END } from "redux-saga";
import { useSelector, useDispatch } from "react-redux";
import {
  TitleBox,
  Thumbnail,
  FavoriteBlock,
  Desc,
} from "../components/Favorite/styles";
// import useSWR from "swr";

const Favorite = () => {
  const { customerEmail } = useSelector((state) => state.user?.me);
  const router = useRouter();
  return (
    <>
      <Header>
        <ExitButton
          onClick={() => router.push("/")}
          icon={<ArrowLeftOutlined />}
        />
        <h1>즐겨찾기</h1>
      </Header>
      <TitleBox>
        <h2>총2개</h2>
      </TitleBox>
      <FavoriteBlock>
        <Thumbnail />
        <Desc>
          <h2>돈까스짱</h2>
          <p>4.8</p>
          <p>1.4km 13분</p>
        </Desc>
      </FavoriteBlock>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const cookie = context.req ? context.req.headers.cookie : "";
    axios.defaults.headers.Cookie = "";
    if (context.req && cookie) {
      try {
        axios.defaults.headers.Cookie = cookie;
        const { accessToken } = await axios
          .get("/auth/reissue", {
            withCredentials: true,
          })
          .then((res) => res.data);
        console.log("acctoken", accessToken);
        if (accessToken) {
          axios.defaults.headers.common[
            "x-access-token"
          ] = await `${accessToken}`;
          context.store.dispatch({
            type: LOAD_MY_INFO_REQUEST,
          });
        }
      } catch (e) {
        return { props: {} };
      }
    }

    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default Favorite;
