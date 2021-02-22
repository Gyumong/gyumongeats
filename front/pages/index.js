/** @format */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import StoreCard from "../components/Store/StoreCard";
import Link from "next/link";
import { StoreListBlock } from "../components/StyleMainPage";
import PopularCard from "../components/Store/PopularCard";
import { LOAD_STORES_REQUEST } from "../reducers/store";
import { LOAD_MY_INFO_REQUEST } from "../reducers/user";
import Category from "../components/Category";
const Home = () => {
  const dispatch = useDispatch();
  const { store, hasMoreStore, loadStoresLoading } = useSelector(
    (state) => state.store
  );
  useEffect(() => {
    if (store.length < 10) {
      dispatch({
        type: LOAD_MY_INFO_REQUEST,
      });
      dispatch({
        type: LOAD_STORES_REQUEST,
      });
    }
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

export default Home;
