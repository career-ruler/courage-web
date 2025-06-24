import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import ProfileIcon from "../../assets/image/profile.svg";
import PostForm from "./component/PostForm";
import PostTestImg from "../../assets/image/banner.png";
import { fetchUserProfile } from "../../api/profile/profile";
import { fetchAllPosts } from "../../api/post/post";
import clickIcon from "../../assets/image/test.png";
import shareIcon from "../../assets/image/testt.png";
import { click } from "@testing-library/user-event/dist/click";

interface Post {
  boardId: number;
  userId?: string;
  title: string;
  picture: string;
  createdDate: string;
  category: string;
}

const Profile = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState<string>("");
  const [allPosts, setAllPosts] = useState<Post[]>([]);

  useEffect(() => {
    const loadProfileAndPosts = async () => {
      try {
        const { userId } = await fetchUserProfile();
        setUserId(userId);

        const posts = await fetchAllPosts();
        const convertedPosts: Post[] = posts.map((p) => ({
          boardId: p.boardId,
          userId: p.userId,
          title: p.title,
          picture: p.picture,
          createdDate: p.createdDate,
          category: p.category,
        }));

        setAllPosts(convertedPosts);
      } catch (err) {
        console.error("프로필 또는 게시글 불러오기 실패:", err);
      }
    };

    loadProfileAndPosts();
  }, []);

  const handlePostClick = (boardId: number) => {
    navigate(`/post/${boardId}`);
  };

  const sortedPosts = [...allPosts].sort((a, b) => b.boardId - a.boardId);

  return (
    <S.ProfileContainer>
      <S.RowContainer>
        <S.ProfileImage src={ProfileIcon} alt="Profile" />
        <S.ColumContainer>
          <S.ProfileMediumTitle>ID</S.ProfileMediumTitle>
          <S.ProfileSmallTitle>{userId}</S.ProfileSmallTitle>
        </S.ColumContainer>
      </S.RowContainer>

      <S.HorizontalLine />

      <S.TwoColumnContainer>
        {sortedPosts.map((post, index) => {
          const image = index === 0 ? clickIcon : shareIcon;

          return (
            <div
              key={post.boardId}
              onClick={() => handlePostClick(post.boardId)}
            >
              <PostForm
                title={post.title}
                username={post.userId ?? "leeyoonchae"}
                image={image}
                date={new Date(post.createdDate).toLocaleDateString()}
              />
            </div>
          );
        })}
      </S.TwoColumnContainer>
    </S.ProfileContainer>
  );
};

export default Profile;
