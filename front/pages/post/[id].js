/** @format */
import React from "react";
import { useRouter } from "next/router";
import TitleCard from "../../components/Store/TitleCard";
import { Global } from "../../components/AppLayout";
const Post = () => {
  const router = useRouter();
  //   const { id } = router.query;

  return (
    <>
      <Global />
      <TitleCard />
      {/* <MenuCard /> */}
    </>
  );
};

export default Post;
