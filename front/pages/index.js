/** @format */
import React from "react";
import { useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import StoreCard from "../components/Store/StoreCard";
import Link from "next/link";
const Home = () => {
  const { mainPosts } = useSelector((state) => state.post);
  return (
    <AppLayout>
      {mainPosts.map((post) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <Link href="/post/[id]" as={`/post/${post.id}`}>
            <a>
              <StoreCard key={post.id} post={post} />
            </a>
          </Link>
        );
      })}
    </AppLayout>
  );
};

export default Home;
