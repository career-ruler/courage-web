import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import ProfileIcon from "../../assets/image/profile.svg";
import PostForm from "./component/PostForm";
import PostTestImg from "../../assets/image/banner.png";
import { fetchUserProfile } from "../../api/profile/profile";

const Profile = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [postIds, setPostIds] = useState<number[]>([]);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const { userId, products } = await fetchUserProfile();
        setUserId(userId);
        setPostIds(products);
      } catch (err) {
        console.error("프로필 불러오기 실패:", err);
      }
    };

    loadProfile();
  }, []);

  const handlePostClick = (id: number) => {
    navigate(`/post/${id}`);
  };

  // 예시 데이터, 추후 게시글 API로 연동 가능
  const mockPosts = postIds.map((id) => ({
    id,
    title: `게시글 제목 ${id}`,
    username: userId,
    image: PostTestImg,
    date: "2023-01-01", // 서버 응답 확장 시 createdDate도 받아서 사용 가능
  }));

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
        {mockPosts.map((post) => (
          <div key={post.id} onClick={() => handlePostClick(post.id)}>
            <PostForm
              title={post.title}
              username={post.username}
              image={post.image}
              date={post.date}
            />
          </div>
        ))}
      </S.TwoColumnContainer>
    </S.ProfileContainer>
  );
};

export default Profile;
