import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";

const Wrapper = styled.div`
  padding: 16px;
  width: calc(100% -32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;

  & > * {
    :not(:lastchild) {
      margin-bottom: 16px;
    }
  }
`;

function PostWritePage(props) {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <Wrapper>
      <Container>
        {/* 제목 */}
        <TextInput
          height={20}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        {/* 내용 */}
        <TextInput
          height={480}
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        {/* 글 작성 버튼  > useNavigate로 root로 이동(main) */}
        <Button
          title="글 작성"
          onClick={() => {
            navigate("/");
          }}
        />
      </Container>
    </Wrapper>
  );
}

export default PostWritePage;
