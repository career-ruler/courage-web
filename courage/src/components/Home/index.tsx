import React, { useEffect, useState } from "react";
import * as S from "./style";
import BannerImage from "../../assets/image/banner.png";
import musicRobot from "../../assets/image/musicRobot.svg";
import ChatBubble from "./component/ChatBubble";
import ChatIcon from "../../assets/image/faq.svg";
import PostSection from "./PostSection";
import { fetchAllPosts, PostForms } from "../../api/post/post";

const Home = () => {
  const [posts, setPosts] = useState<PostForms[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchAllPosts();
        setPosts(data);
      } catch (err: any) {
        setError(err.message || "게시글을 불러오는데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  return (
    <>
      <S.HomeContainer>
        <S.LeftContainer>
          <S.BannerImage src={BannerImage} alt="Banner" />
          <S.PostListText>최근 포스트 목록</S.PostListText>

          {loading && <div>로딩중...</div>}
          {error && <div style={{ color: "red" }}>{error}</div>}

          {!loading && !error && (
            <S.PostGrid>
              {posts.map((post) => (
                <PostSection
                  key={post.boardId}
                  title={post.title}
                  username={post.userId ?? "알 수 없음"}
                  image={post.picture}
                  date={new Date(post.createdDate).toLocaleDateString()}
                />
              ))}
            </S.PostGrid>
          )}
        </S.LeftContainer>

        <S.RightContainer>
          <S.AdContainer>
            <S.SectionTitleText>
              최신 AI로 누구보다{" "}
              <span style={{ color: "#FF3333" }}>쉽고 빠르게</span> 면접 준비를
              끝내보세요!
            </S.SectionTitleText>
            <S.RowSection>
              <S.RobotImage src={musicRobot} alt="musicRobot" />
              <S.ColumnSection>
                <ChatBubble type="red">안녕하세요!</ChatBubble>
                <ChatBubble> 여러분들을 도와드릴 AI 입니다 </ChatBubble>
              </S.ColumnSection>
            </S.RowSection>
          </S.AdContainer>

          <S.AdContainer>
            <S.SectionTitleText>
              여러가지 면접 꿀팁들을 알아보세요!
            </S.SectionTitleText>
            <S.RobotImage src={ChatIcon} alt="chatIcon" />
          </S.AdContainer>
        </S.RightContainer>
      </S.HomeContainer>
    </>
  );
};

export default Home;
