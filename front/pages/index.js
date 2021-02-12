/** @format */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import StoreCard from "../components/Store/StoreCard";
import Link from "next/link";
import { StoreListBlock } from "../components/StyleMainPage";
import PopularCard from "../components/Store/PopularCard";
import { LOAD_STORES_REQUEST } from "../reducers/store";
const Home = () => {
  const dispatch = useDispatch();
  const { restaurant, hasMoreStore, loadStoresLoading } = useSelector(
    (state) => state.store
  );
  useEffect(() => {
    dispatch({
      type: LOAD_STORES_REQUEST,
    });
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
  }, [restaurant, hasMoreStore, loadStoresLoading]);

  return (
    <AppLayout>
      <PopularCard />
      <StoreListBlock>
        <h2>골라먹는 맛집</h2>
        {restaurant.map((store) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <Link href="/post/[id]" as={`/post/${store.id}`}>
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
