import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import MainPage from "./components/page/MainPage";
import PostWritePage from "./components/page/PostWritePage";
import PostViewPage from "./components/page/PostViewPage";

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        {/* 제목이 항상 나오도록 설정 */}
        <MainTitleText>Dragong's Mini Blog</MainTitleText>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="post-write" element={<PostWritePage />} />
          {/* 파라미터전달 */}
          <Route path="post/:postId" element={<PostViewPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
