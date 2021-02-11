/** @format */
import createReducer from "./createReducer";
import shortId from "shortid";
import faker from "faker";
export const initialState = {
  restaurant: [
    {
      id: shortId.generate(),
      restaurant_name: "명륜진사갈비", // 가게이름
      category: "한식", // 카테고리
      phone: "0212341234", //전화번호
      delivery_fee: 2000, // 배달비
      estimated_del_time: "15~20분", // 배달소요시간
      min_order_price: 12000, // 최소주문
      gpa: 5, // 별점
      Thumbnail: [{ src: "1" }, { src: "2" }, { src: "3" }],
      Menu: [
        {
          name: "갈비", // 메뉴 이름
          price: "13000", // 가격
          image: "", // 사진
          introduction: "", // 소개
        },
      ],
    },
  ],
};

initialState.restaurant = initialState.restaurant.concat(
  Array(20)
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
          src: faker.image.food(),
        },
        {
          src: faker.image.food(),
        },
        {
          src: faker.image.food(),
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
    }))
);
export default createReducer(initialState, {});
