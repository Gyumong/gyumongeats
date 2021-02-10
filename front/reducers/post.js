/** @format */
import createReducer from "./createReducer";

export const initialState = {
  mainPosts: [
    {
      id: 1,
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
    {
      id: 2,
      restaurant_name: "닭치Go", // 가게이름
      category: "치킨", // 카테고리
      phone: "0212341234", //전화번호
      delivery_fee: 3000, // 배달비
      estimated_del_time: "10~15분", // 배달소요시간
      min_order_price: 12000, // 최소주문
      gpa: 5, // 별점
      Thumbnail: [{ src: "1" }, { src: "2" }, { src: "3" }],
      Menu: [
        {
          name: "치킨", // 메뉴 이름
          price: "15000", // 가격
          image: "", // 사진
        },
      ],
    },
  ],
};

export default createReducer(initialState, {});
