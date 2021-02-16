/** @format */
import React from "react";
import { useRouter } from "next/router";
import TitleCard from "../../components/Store/TitleCard";
import ReviewCard from "../../components/Store/ReviewCard";
import MenuBox from "../../components/Store/MenuBox";
import { Global } from "../../components/AppLayout";
import styled from "styled-components";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
const StoreBlock = styled.div``;
const Post = () => {
  const { Menu } = useSelector((state) => state.store.restaurant?.Menu);
  console.log(Menu);
  const router = useRouter();
  //   const { id } = router.query;

  return (
    <>
      <Global />
      <StoreBlock>
        <TitleCard />
        <ReviewCard />
        <MenuBox />
      </StoreBlock>
    </>
  );
};

export default Post;
