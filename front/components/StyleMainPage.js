/** @format */

import styled from "styled-components";

export const StoreListBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 96%;
  margin: 0 auto;
  h2 {
    padding: 0.5rem 0 0 0.2rem;
    font-weight: bold;
    font-size: 1rem;
    margin: 0;
  }
`;
export const CartModal = styled.div`
  max-width: 768px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  color: white;
  z-index: 10;
  bottom: 52px;
  height: 6vh;
  background-color: rgb(1, 175, 255);
  &:hover {
    cursor: pointer;
  }
  strong {
    font-size: 0.5rem;
    color: rgb(1, 175, 255);
    background-color: #fff;
    border-radius: 50%;
    padding: 0.1rem 0.3rem;
  }
  h2 {
    font-size: 0.9rem;
    color: white;
    margin: 0;
    margin-left: 0.2rem;
  }
  p {
    font-size: 0.8rem;
    color: white;
    margin: 0;
    position: absolute;
    right: 1rem;
  }
`;
