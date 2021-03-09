/** @format */
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import StoreCard from "../components/Store/StoreCard";
import Link from "next/link";
import { StoreListBlock, CartModal } from "../components/StyleMainPage";
import PopularCard from "../components/Store/PopularCard";
import store, { LOAD_STORES_REQUEST } from "../reducers/store";
import { LOAD_MY_INFO_REQUEST } from "../reducers/user";
import Category from "../components/Category";
import wrapper from "../store/configureStore";
import { END } from "redux-saga";
import axios from "axios";
import useSWR from "swr";
import Router from "next/router";
const cartfetcher = (url) =>
  axios.get(url, { withCredentials: true }).then((result) => result.data);
const Home = () => {
  const dispatch = useDispatch();
  const { store, hasMoreStore, loadStoresLoading } = useSelector(
    (state) => state.store
  );
  const { me } = useSelector((state) => state.user);

  const { data: cartData, error: cartError } = useSWR(
    `http://localhost:3085/api/cart/cnt-price?e=${me.customerEmail}`,
    cartfetcher
  );

  const PushCart = useCallback(() => {
    Router.push("/cart");
  }, []);
  useEffect(() => {
    function onScroll() {
      if (
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 150
      ) {
        if (hasMoreStore && !loadStoresLoading) {
          dispatch({
            type: LOAD_STORES_REQUEST,
          });
        }
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [store, hasMoreStore, loadStoresLoading]);
  if (!cartData) {
    return null;
  }
  return (
    <AppLayout>
      <PopularCard />
      <StoreListBlock>
        <h2>골라먹는 맛집</h2>
        <Category />
        {store.map((store) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <Link href="/store/[storeId]" as={`/store/${store.storeId}`}>
              <a>
                <StoreCard key={store.storeId} store={store} />
              </a>
            </Link>
          );
        })}
      </StoreListBlock>
      {cartData.menuCnt ? (
        <CartModal onClick={PushCart}>
          <strong>{cartData.menuCnt}</strong>
          <h2>카트보기</h2>
          <p>{cartData.price}원</p>
        </CartModal>
      ) : null}
    </AppLayout>
  );
};
export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const cookie = context.req ? context.req.headers.cookie : "";
    axios.defaults.headers.Cookie = "";
    if (context.req && cookie) {
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
    }

    context.store.dispatch({
      type: LOAD_STORES_REQUEST,
    });

    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default Home;
