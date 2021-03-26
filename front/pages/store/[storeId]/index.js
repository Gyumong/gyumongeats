/** @format */
import React, { useEffect, useCallback } from "react";
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
import axios from "axios";
import useSWR from "swr";
import { CartModal } from "../../../components/StyleMainPage";
import Router from "next/router";
const MCartModal = styled(CartModal)`
  bottom: 0;
`;
const cartfetcher = (url) =>
  axios.get(url, { withCredentials: true }).then((result) => result.data);

const reviewfetcher = (url) =>
  axios.get(url, { withCredentials: true }).then((result) => result.data);
const Store = () => {
  const router = useRouter();
  const { storeId } = router.query;
  const dispatch = useDispatch();
  console.log(storeId);
  const { oneStore, menu, loadMenusLoading, hasMoreMenu } = useSelector(
    (state) => state.store
  );
  const { me } = useSelector((state) => state.user);

  const { data: cartData } = useSWR(
    me?.customerEmail
      ? `http://localhost:3085/api/cart/cnt-price?e=${me.customerEmail}`
      : null,
    cartfetcher
  );
  const { data: reviewData, error: reviewError } = useSWR(
    `http://localhost:3085/api/review/list/:id?id=${storeId}`,
    reviewfetcher
  );

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
  const PushCart = useCallback(() => {
    Router.push("/cart");
  }, []);

  if (!oneStore || !menu) {
    return null;
  }
  if (!reviewError) {
    console.log(reviewData);
  }
  return (
    <>
      <Global />
      <TitleCard
        storeName={oneStore.store_info.info1.storeName}
        gpa={oneStore.store_info.info1.GPA}
        thumb={oneStore.store_info.info1.thumb}
        estimatedDelTime={oneStore.store_info.info1.estimatedDelTime}
        deliveryFee={oneStore.store_info.info1.deliveryFee}
        reviewData={reviewData.review}
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
      {cartData?.menuCnt ? (
        <MCartModal onClick={PushCart}>
          <strong>{cartData.menuCnt}</strong>
          <h2>카트보기</h2>
          <p>{cartData.price}원</p>
        </MCartModal>
      ) : null}
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
    const cookie = context.req ? context.req.headers.cookie : "";
    axios.defaults.headers.Cookie = "";
    if (context.req && cookie) {
      try {
        axios.defaults.headers.Cookie = cookie;
        const { accessToken } = await axios
          .get("/auth/reissue", {
            withCredentials: true,
          })
          .then((res) => res.data);
        console.log("acctoken", accessToken);
        if (accessToken) {
          axios.defaults.headers.common[
            "x-access-token"
          ] = await `${accessToken}`;
          context.store.dispatch({
            type: LOAD_MY_INFO_REQUEST,
          });
        }
      } catch (e) {
        console.log("ERROR", e);
      }
    }
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);
export default Store;
