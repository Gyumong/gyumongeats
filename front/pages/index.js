/** @format */
import React from "react";
import { useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import StoreCard from "../components/Store/StoreCard";
import Link from "next/link";
import { StoreListBlock } from "../components/StyleMainPage";
import PopularCard from "../components/Store/PopularCard";
const Home = () => {
  const { restaurant } = useSelector((state) => state.store);
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
