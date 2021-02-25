/** @format */
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import TitleCard from "../../components/Store/TitleCard";
import ReviewCard from "../../components/Store/ReviewCard";
import MenuBox from "../../components/Store/MenuBox";
import { Global } from "../../components/AppLayout";
import styled from "styled-components";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_ONESTORE_REQUEST } from "../../reducers/store";
import wrapper from "../../store/configureStore";
import { END } from "redux-saga";
import axios from "axios";
const StoreBlock = styled.div``;
const Store = () => {
  const router = useRouter();
  const { id } = router.query;

  const { oneStore } = useSelector((state) => state.store);
  console.log(oneStore);
  return (
    <>
      <Global />
      <StoreBlock>
        <TitleCard
          storeName={oneStore.store_info.info1.storeName}
          gpa={oneStore.store_info.info1.GPA}
          estimatedDelTime={oneStore.store_info.info1.estimatedDelTime}
          deliveryFee={oneStore.store_info.info1.deliveryFee}
        />
        <ReviewCard />
        {oneStore.menu.map((menu) => {
          return <MenuBox key={menu} menu={menu} />;
        })}
      </StoreBlock>
    </>
  );
};
export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    context.store.dispatch({
      type: LOAD_ONESTORE_REQUEST,
      data: context.params.id,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);
export default Store;
