import React from "react";
import * as S from "./style";
import BannerImage from "../../assets/image/banner.png";
import musicRobot from "../../assets/image/musicRobot.svg";
import PostSection from "./PostSection";
import ChatBubble from "./component/ChatBubble";

const Home = () => {
  const dummyPosts = Array.from({ length: 6 }, (_, i) => i);
  return (
    <S.HomeContainer>
      <S.LeftContainer>
        <S.BannerImage src={BannerImage} alt="Banner" />
        <S.PostListText>최근 포스트 목록</S.PostListText>
        <S.PostGrid>
          {dummyPosts.map((_, index) => (
            <PostSection key={index} />
          ))}
        </S.PostGrid>
      </S.LeftContainer>

      <S.RightContainer>
        <S.AiContainer>
          <S.RowSection>
            <S.RobotImage src={musicRobot} alt="musicRobot" />
            <S.ColumnSection>
              <ChatBubble type="red">안녕하세요!</ChatBubble>
              <ChatBubble> 여러분들을 도와드릴 AI 입니다 </ChatBubble>
              {/* 안녕하세요는 텍스트 길이에 맞게 뷰가 짜여지는데, 위에 여러분 저 챗은 길이에 안맞음 수정 pls */}
            </S.ColumnSection>
          </S.RowSection>
        </S.AiContainer>
      </S.RightContainer>
    </S.HomeContainer>
  );
};

export default Home;
