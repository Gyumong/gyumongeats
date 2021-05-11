/** @format */

import React from "react";
import styled from "styled-components";
import { CartMenuCardBlock, CartMenuCardTitle } from "./MenuCard";
import { Input, Select } from "antd";

const { Option } = Select;
const ReqCardBlock = styled(CartMenuCardBlock)``;
const ReqCardTitle = styled(CartMenuCardTitle)`
  h2 {
    font-size: 0.9rem;
  }
  border: none;
`;
const ReqCardBox = styled.div`
  padding: 0.5rem 1rem;
`;
const InputTitle = styled(CartMenuCardTitle)`
  h2 {
    padding: 0;
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 0.2rem;
  }
  border: none;
`;
const InputText = styled(Input.TextArea)`
  height: 54px;
  overflow: hidden;
  padding: 8px 12px;
  min-height: 54px;
  margin-bottom: 1rem;
`;
const SelectText = styled(Select)`
  display: flex;
  align-items: center;
  width: 100%;
  overflow: hidden;
`;
const ReqCard = ({ inputText, onChangeInputText, onChangeSelectText }) => {
  return (
    <ReqCardBlock>
      <ReqCardTitle>
        <h2>요청사항</h2>
      </ReqCardTitle>
      <ReqCardBox>
        <InputTitle value={inputText} onChange={onChangeInputText}>
          <h2>가게 사장님에게</h2>
          <InputText rows={1} placeholder="예) 견과류는 빼주세요" autoSize />
        </InputTitle>
        <InputTitle>
          <h2>배달 기사님에게</h2>
          <SelectText
            defaultValue="직접 수령(부재 시 문 앞)"
            onChange={onChangeSelectText}
          >
            <Option value="직접 수령(부재 시 문 앞)">
              직접 수령(부재 시 문 앞)
            </Option>
            <Option value="문 앞에 두고 사진(비대면 배달)">
              문 앞에 두고 사진(비대면 배달)
            </Option>
            <Option value="초인종 누르고 문 앞">초인종 누르고 문 앞</Option>
            <Option value="초인종 누르지 말고 문 앞">
              초인종 누르지 말고 문 앞
            </Option>
            <Option value="도착하면 전화">도착하면 전화</Option>
          </SelectText>
        </InputTitle>
      </ReqCardBox>
    </ReqCardBlock>
  );
};

export default ReqCard;
