/** @format */
import createReducer from "./createReducer";
import shortId from "shortid";
import faker from "faker";
export const initialState = {
  restaurant: [],
  hasMoreStore: true,
  loadStoresLoading: false,
  loadStoresDone: false,
  loadStoresError: null,
};

export const LOAD_STORES_REQUEST = "LOAD_STORES_REQUEST";
export const LOAD_STORES_SUCCESS = "LOAD_STORES_SUCCESS";
export const LOAD_STORES_FAILURE = "LOAD_STORES_FAILURE";

export const DummyStore = (number) =>
  Array(number)
    .fill()
    .map(() => ({
      id: shortId.generate(),
      restaurant_name: faker.name.title(), // 가게이름
      category: "한식", // 카테고리
      phone: faker.phone.phoneNumber(), //전화번호
      delivery_fee: 2000, // 배달비
      estimated_del_time: "15~20분", // 배달소요시간
      min_order_price: 12000, // 최소주문
      gpa: Math.random().toFixed(1) * 5, // 별점
      Thumbnail: [
        {
          src: faker.image.image(),
        },
        {
          src: faker.image.image(),
        },
        {
          src: faker.image.image(),
        },
      ],
      Menu: [
        {
          name: "갈비", // 메뉴 이름
          price: "13000", // 가격
          image: "", // 사진
          introduction: "", // 소개
        },
      ],
    }));

export default createReducer(initialState, {
  [LOAD_STORES_REQUEST]: (state) => {
    state.loadStoresLoading = true;
    state.loadStoresError = null;
    state.loadStoresDone = false;
  },
  [LOAD_STORES_SUCCESS]: (state, action) => {
    state.loadStoresLoading = false;
    state.loadStoresDone = true;
    state.restaurant = action.data.concat(state.restaurant);
    state.hasMoreStore = state.restaurant.length < 50;
  },
  [LOAD_STORES_FAILURE]: (state, action) => {
    state.loadStoresLoading = false;
    state.loadStoresError = action.error;
  },
});
