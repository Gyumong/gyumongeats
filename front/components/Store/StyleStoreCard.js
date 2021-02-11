/** @format */

import styled from "styled-components";

export const CardBlock = styled.div`
  display: flex;
  flex-direction: column;

  height: 40vh;
  &:hover {
    opacity: 0.7;
  }
`;

export const CardImageBlock = styled.div`
  display: flex;
  width: 100%;
  height: 75%;
`;
export const CardImageItem = styled.div`
  width: 100%;
  background-image: url(${(props) => props.images});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const CardMeta = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-bottom: 20px;
`;
export const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: top;
  h3 {
    font-weight: bold;
  }
`;

export const SideBar = styled.div``;
