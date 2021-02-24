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

const StoreBlock = styled.div``;
const Store = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    dispatch({
      type: LOAD_ONESTORE_REQUEST,
      data: id,
    });
  }, []);
  const { info1 } = useSelector((state) => state.store.oneStore);
  console.log(info1);
  return (
    <>
      <Global />
      <StoreBlock>
        <TitleCard
          storeName={info1.storeName}
          gpa={info1.GPA}
          estimatedDelTime={info1.estimatedDelTime}
          deliveryFee={info1.deliveryFee}
        />
        <ReviewCard />

        <MenuBox />

        <MenuBox />

        <MenuBox />
      </StoreBlock>
    </>
  );
};

export default Store;
