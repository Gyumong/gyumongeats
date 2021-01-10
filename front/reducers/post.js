/** @format */
import createReducer from "./createReducer";

export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "민구",
      },
      content: "첫번째 게시글",
      Images: [{ src: "1" }, { src: "2" }, { src: "3" }],
      Comments: [],
    },
    {
      id: 2,
      User: {
        id: 2,
        nickname: "민구",
      },
      content: "두번째 게시글",
      Images: [{ src: "1" }],
      Comments: [],
    },
    {
      id: 1,
      User: {
        id: 1,
        nickname: "민구",
      },
      content: "첫번째 게시글",
      Images: [{ src: "1" }, { src: "2" }, { src: "3" }],
      Comments: [],
    },
    {
      id: 2,
      User: {
        id: 2,
        nickname: "민구",
      },
      content: "두번째 게시글",
      Images: [{ src: "1" }],
      Comments: [],
    },
    {
      id: 1,
      User: {
        id: 1,
        nickname: "민구",
      },
      content: "첫번째 게시글",
      Images: [{ src: "1" }, { src: "2" }, { src: "3" }],
      Comments: [],
    },
    {
      id: 2,
      User: {
        id: 2,
        nickname: "민구",
      },
      content: "두번째 게시글",
      Images: [{ src: "1" }],
      Comments: [],
    },
    {
      id: 1,
      User: {
        id: 1,
        nickname: "민구",
      },
      content: "첫번째 게시글",
      Images: [{ src: "1" }, { src: "2" }, { src: "3" }],
      Comments: [],
    },
    {
      id: 2,
      User: {
        id: 2,
        nickname: "민구",
      },
      content: "두번째 게시글",
      Images: [{ src: "1" }],
      Comments: [],
    },
    {
      id: 3,
      User: {
        id: 3,
        nickname: "민구",
      },
      content: "세번째 게시글",
      Images: [],
      Comments: [],
    },
  ],
};

export default createReducer(initialState, {});
