/** @format */

import styled from "styled-components";

export const TitleBox = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 1rem;
  margin-top: 6vh;
  h2 {
    margin: 0;
    font-weight: bold;
    font-size: 0.9rem;
  }
  border-bottom: 5px solid #f0f0f0;
`;

export const FavoriteBlock = styled.div`
  display: flex;
  padding: 0.5rem 0;
  padding-left: 0.5rem;
  border-top: 1px solid #f0f0f0;
`;

export const LinkBlock = styled.div`
  display: flex;
  width: 100%;
`;
export const Thumbnail = styled.img`
  flex: 1;
  width: 80px;
  height: 80px;
  display: inline-block;
`;

export const Desc = styled.div`
  margin-left: 1rem;
  display: flex;
  flex: 3;
  flex-direction: column;

  h2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.8rem;
    font-weight: bold;
    margin-bottom: 0.1rem;
  }
  p {
    font-size: 0.7rem;
    margin-bottom: 0.1rem;
  }
`;
export const DeleteButton = styled.div`
  width: 40px;
  margin-right: 1rem;
  background-color: #fe7a5d;
  padding: 0.1rem 0.1rem;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
