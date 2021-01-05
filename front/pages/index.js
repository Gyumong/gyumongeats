/** @format */
import React from "react";
import { useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import StoreCard from "../components/Store/StoreCard";
const Home = () => {
  const { mainPosts } = useSelector((state) => state.post);
  return (
    <AppLayout>
      {mainPosts.map((post) => {
        return <StoreCard key={post.id} post={post} />;
      })}
    </AppLayout>
  );
};

export default Home;
