import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import TextInput from "../ui/TextInput";
import data from "../../data.json";
import Button from "../ui/Button";
import CommentList from "../list/CommentList";

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

const PostContatiner = styled.div`
  padding: 8px 10px;
  border: 1px solid grey;
  border-radius: 8px;
`;

const TitleText = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

const ContentText = styled.p`
  font-size: 20px;
  line-height: 32px;
  white-space: pre-wrap;
`;

const CommentLabel = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

function PostViewPage(props) {
  // URL 파라미터를 이용해 postId를 가져옴
  const { postId } = useParams();

  const navigate = useNavigate();

  const post = data.find((item) => {
    return item.id == postId;
  });

  // 댓글 state
  const [comment, setComment] = useState("");

  // console.log(postId);

  return (
    <Wrapper>
      <Container>
        {/* 뒤로가기 버튼 */}
        <Button title="뒤로 가기" onClick={() => navigate("/")} />

        {/* 글 보기 */}
        <PostContatiner>
          <TitleText>{post.title}</TitleText>
          <ContentText>{post.content}</ContentText>
        </PostContatiner>

        {/* 댓글보기 */}
        <CommentLabel>댓글</CommentLabel>
        <CommentList comments={post.comments} />

        {/* 댓글작성 */}
        <TextInput
          height={40}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button title="댓글 작성" onClick={() => navigate("/")} />
      </Container>
    </Wrapper>
  );
}

export default PostViewPage;
