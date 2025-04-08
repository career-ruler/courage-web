import React from "react";
import * as S from "./style";
import BannerImage from "../../assets/image/banner.png";
import musicRobot from "../../assets/image/musicRobot.svg";
import PostSection from "./PostSection";
import ChatBubble from "./component/ChatBubble";
import ChatIcon from "../../assets/image/faq.svg";

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
        <S.AdContainer>
          <S.SectionTitleText>최신 AI로 누구보다 <span style={{color:"#FF3333"}}>쉽고 빠르게</span> 면접 준비를 끝내보세요!</S.SectionTitleText>
          <S.RowSection>
            <S.RobotImage src={musicRobot} alt="musicRobot" />
            <S.ColumnSection>
              <ChatBubble type="red">안녕하세요!</ChatBubble>
              <ChatBubble> 여러분들을 도와드릴 AI 입니다 </ChatBubble>
            </S.ColumnSection>
          </S.RowSection>
        </S.AdContainer>

        <S.AdContainer>
          <S.SectionTitleText>여러가지 면접 꿀팁들을 알아보세요!</S.SectionTitleText>
          <S.RobotImage src={ChatIcon} alt="chatIcon" />
        </S.AdContainer>

      </S.RightContainer>
    </S.HomeContainer>
  );
};

export default Home;
