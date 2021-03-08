/** @format */
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import TitleCard from "../../../components/Store/TitleCard";
import ReviewCard from "../../../components/Store/ReviewCard";
import MenuBox from "../../../components/Store/MenuBox";
import { Global } from "../../../components/AppLayout";
import styled from "styled-components";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  LOAD_MENUS_REQUEST,
  LOAD_ONESTORE_REQUEST,
} from "../../../reducers/store";
import wrapper from "../../../store/configureStore";
import { END } from "redux-saga";
import { LOAD_MY_INFO_REQUEST } from "../../../reducers/user";

const StoreBlock = styled.div``;
const Store = () => {
  const router = useRouter();
  const { storeId } = router.query;
  const dispatch = useDispatch();
  console.log(storeId);
  const { oneStore, menu, loadMenusLoading, hasMoreMenu } = useSelector(
    (state) => state.store
  );
  useEffect(() => {
    dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
  });
  useEffect(() => {
    function onScroll() {
      if (
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 150
      ) {
        if (hasMoreMenu && !loadMenusLoading) {
          dispatch({
            type: LOAD_MENUS_REQUEST,
            data: storeId,
          });
        }
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [hasMoreMenu, loadMenusLoading, oneStore, menu]);

  if (!oneStore || !menu) {
    return null;
  }
  return (
    <>
      <Global />
      <StoreBlock>
        <TitleCard
          storeName={oneStore.store_info.info1.storeName}
          gpa={oneStore.store_info.info1.GPA}
          thumb={oneStore.store_info.info1.thumb}
          estimatedDelTime={oneStore.store_info.info1.estimatedDelTime}
          deliveryFee={oneStore.store_info.info1.deliveryFee}
        />
        <ReviewCard />
        {menu.map((menu) => {
          return (
            <Link
              href="/store/[storeId]/menu/[menuId]"
              as={`/store/${storeId}/menu/${menu.menuId}`}
              key={menu.menuId}
            >
              <a>
                <MenuBox menu={menu} />
              </a>
            </Link>
          );
        })}
      </StoreBlock>
    </>
  );
};
export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    context.store.dispatch({
      type: LOAD_ONESTORE_REQUEST,
      data: context.params.storeId,
    });
    context.store.dispatch({
      type: LOAD_MENUS_REQUEST,
      data: context.params.storeId,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);
export default Store;
