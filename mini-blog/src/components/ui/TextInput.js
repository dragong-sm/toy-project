import React from "react";
import styled from "styled-components";

const StyledTextArea = styled.textarea`
  width: calc(100% - 32px);
  // 세미콜론 없으면 적용안됨 !!!!!!!
  ${(props) => props.height && `height: ${props.height}px;`}
  padding : 16px;
  margin: 8px;
  font-size: 16px;
  line-height: 20px;
`;

function TextInput(props) {
  // height : 높이 설정
  // value : 입력값
  // onChange : 변경값을 상위로 전달
  const { height, value, onChange } = props;

  return <StyledTextArea height={height} value={value} onChange={onChange} />;
}

export default TextInput;
