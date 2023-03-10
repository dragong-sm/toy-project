import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PostList from "../list/PostList";
import Button from "../ui/Button";
import data from "../../data.json";

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

function MainPage(props) {
  const {} = props;

  // navigate 를 사용하여 페이지 이동
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <Button
          title="글 작성"
          onClick={() => {
            navigate("/post-write");
          }}
        />
        <PostList
          posts={data}
          onClickItem={(item) => {
            navigate(`/post/${item.id}`);
          }}
        />
      </Container>
    </Wrapper>
  );
}

export default MainPage;
