/** @format */

import React, { useCallback } from "react";
import { Header, ExitButton } from "@components/Cart/Header";
import { useRouter } from "next/router";
import { ArrowLeftOutlined, CloseOutlined } from "@ant-design/icons";
import axios from "axios";
import { LOAD_MY_INFO_REQUEST } from "../reducers/user";
import wrapper from "../store/configureStore";
import { END } from "redux-saga";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { DELETE_BOOKMARK_REQUEST } from "@reducers/bookmark";
import {
  TitleBox,
  Thumbnail,
  FavoriteBlock,
  Desc,
  DeleteButton,
  LinkBlock,
} from "../components/Favorite/styles";
import useSWR from "swr";
const bookmarkfetcher = (url) =>
  axios.get(url, { withCredentials: true }).then((result) => result.data);
const Favorite = () => {
  const { me } = useSelector((state) => state?.user);
  const {
    data: bookmarkData,
    mutate,
    isValidating: loading,
  } = useSWR(
    me?.customerEmail ? `/bookmark/list?e=${me.customerEmail}` : null,
    bookmarkfetcher,
    {
      dedupingInterval: 500,
      revalidateOnFocus: true,
    }
  );
  const dispatch = useDispatch();
  const DeleteBookMark = useCallback(
    (v) => {
      if (me.customerEmail && !loading) {
        dispatch({
          type: DELETE_BOOKMARK_REQUEST,
          data: {
            e: me.customerEmail,
            id: v.storeId,
          },
        });
      }
      mutate(bookmarkData);
    },
    [bookmarkData]
  );
  const router = useRouter();
  if (!me && typeof window !== "undefined") {
    router.push("/login");
  }
  if (!bookmarkData) {
    return null;
  }
  console.log(bookmarkData);
  return (
    <>
      <Header>
        <ExitButton
          onClick={() => router.push("/")}
          icon={<ArrowLeftOutlined />}
        />
        <h1>즐겨찾기</h1>
      </Header>
      {bookmarkData.bookmarkList ? (
        <>
          <TitleBox>
            <h2>총{bookmarkData.bookmarkList.length}개</h2>
          </TitleBox>
          {bookmarkData.bookmarkList.map((v, i) => {
            return (
              <FavoriteBlock key={v.storeId + i}>
                <Link href={`http://localhost:3080/store/${v.storeId}`}>
                  <LinkBlock>
                    <Thumbnail
                      src={`http://localhost:3085/img/thumbnail/${v.thumb1}.png`}
                    />
                    <Desc>
                      <h2>
                        {v.storeName}{" "}
                        <DeleteButton onClick={() => DeleteBookMark(v)}>
                          <CloseOutlined style={{ color: "#fff" }} />
                        </DeleteButton>
                      </h2>
                      <p>
                        {v.GPA}({v.reviewCnt})
                      </p>
                      <p>
                        {v.estimatedDelTime} 배달비 {v.deliveryFee}원
                      </p>
                    </Desc>
                  </LinkBlock>
                </Link>
              </FavoriteBlock>
            );
          })}
        </>
      ) : null}
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
          axios.defaults.headers.common["x-access-token"] =
            await `${accessToken}`;
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
