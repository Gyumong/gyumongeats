/** @format */

import React from "react";
import Link from "next/link";
import { Menu } from "antd";
import {
  HomeOutlined,
  SearchOutlined,
  HeartOutlined,
  CarryOutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import First from "./First";
import styled, { createGlobalStyle } from "styled-components";
import { useSelector } from "react-redux";

export const Global = createGlobalStyle`
    box-sizing: border-box;
    margin:0;

  a{
    text-decoration:none;
    color:inherit;
  }
`;

const MenuBlock = styled(Menu)`
  max-width: 768px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  z-index: 100;
`;

const ItemBlock = styled(Menu.Item)`
  text-align: center;
`;

// eslint-disable-next-line react/prop-types
const AppLayout = ({ children }) => {
  const { me } = useSelector((state) => state.user);
  return (
    <div>
      <Global />
      {me ? (
        <>
          {children}{" "}
          <MenuBlock mode="inline">
            <ItemBlock>
              <Link href="/">
                <a>
                  <HomeOutlined />
                </a>
              </Link>
            </ItemBlock>
            <ItemBlock>
              <Link href="/search">
                <a>
                  <SearchOutlined />
                </a>
              </Link>
            </ItemBlock>
            <ItemBlock>
              <Link href="/favorite">
                <a>
                  <HeartOutlined />
                </a>
              </Link>
            </ItemBlock>
            <ItemBlock>
              <Link href="/cart">
                <a>
                  <CarryOutOutlined />
                </a>
              </Link>
            </ItemBlock>
            <ItemBlock>
              <Link href="/profile">
                <a>
                  <UserOutlined />
                </a>
              </Link>
            </ItemBlock>
          </MenuBlock>
        </>
      ) : (
        <First />
      )}
    </div>
  );
};

export default AppLayout;
