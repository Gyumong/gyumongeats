import styled from 'styled-components';
import {Form,Input, Button} from 'antd';

export const FormBlock = styled(Form)`
display: flex;
flex-direction: column;
justify-content: center;
margin: 0 auto;
max-width: 768px;
height: 100vh;
padding: 60px 30px;
`;

export const InputBlock = styled(Input)`
  padding: 5px 8px;
  margin-top: 30px;
  border: none;
  border-bottom: 1px solid #e2e2e2;
`;

export const ButtonBlock = styled(Button)`
  margin-top: 30px;
  background-color: #42a5f5;
  color: white;
  &:hover {
    background-color: #42a5f5;
    color: white;
  }
`;
export const ABlock = styled.a`
  margin-top: 30px;
  width: 25%;
`;