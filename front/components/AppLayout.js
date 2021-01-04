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

// eslint-disable-next-line react/prop-types
const AppLayout = ({ children }) => {
  return (
    <div>
      {children}
      <Menu
        mode="horizontal"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Menu.Item>
          <Link href="/">
            <a>
              <HomeOutlined />
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/search">
            <a>
              <SearchOutlined />
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/favorite">
            <a>
              <HeartOutlined />
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/cart">
            <a>
              <CarryOutOutlined />
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>
              <UserOutlined />
            </a>
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default AppLayout;
