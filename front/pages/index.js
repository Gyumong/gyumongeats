/** @format */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import StoreCard from "../components/Store/StoreCard";
import Link from "next/link";
import { StoreListBlock } from "../components/StyleMainPage";
import PopularCard from "../components/Store/PopularCard";
import store, { LOAD_STORES_REQUEST } from "../reducers/store";
import { LOAD_MY_INFO_REQUEST } from "../reducers/user";
import Category from "../components/Category";
import wrapper from "../store/configureStore";
import { END } from "redux-saga";
import axios from "axios";
const Home = () => {
  const dispatch = useDispatch();
  const { store, hasMoreStore, loadStoresLoading } = useSelector(
    (state) => state.store
  );

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

  return (
    <AppLayout>
      <PopularCard />
      <StoreListBlock>
        <h2>골라먹는 맛집</h2>
        <Category />
        {store.map((store) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <Link href="/store/[id]" as={`/store/${store.id}`}>
              <a>
                <StoreCard key={store.id} store={store} />
              </a>
            </Link>
          );
        })}
      </StoreListBlock>
    </AppLayout>
  );
};
export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    if (store.length < 10) {
      context.store.dispatch({
        type: LOAD_STORES_REQUEST,
      });
    }
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);
export default Home;
