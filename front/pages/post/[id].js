/** @format */
import React from "react";
import { useRouter } from "next/router";
import TitleCard from "../../components/Store/TitleCard";
import ReviewCard from "../../components/Store/ReviewCard";
import MenuBox from "../../components/Store/MenuBox";
import { Global } from "../../components/AppLayout";
import styled from "styled-components";

const StoreBlock = styled.div``;
const Post = () => {
  const router = useRouter();
  //   const { id } = router.query;
  const a = [
    [9, [1, 2, 3]],
    [9, [1, 2, 3]],
  ];
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
