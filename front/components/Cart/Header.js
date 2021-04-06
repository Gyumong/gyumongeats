/** @format */

import styled from "styled-components";
import { Button } from "antd";
export const Header = styled.div`
  position: fixed;
  width: 100%;
  max-width: 420px;
  top: 0;
  display: flex;
  padding-left: 0.5rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  z-index: 1000;
  align-items: center;
  background-color: #fff;
  h1 {
    font-weight: bold;
    font-size: 16px;
    margin: 0;
  }
`;

export const ExitButton = styled(Button)`
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
`;
