import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import ProfileIcon from "../../assets/image/profile.svg";
import PostFrom from "./component/PostForm";
import PostTestImg from "../../assets/image/banner.png";

const Profile = () => {
  const navigate = useNavigate();

  const handlePostClick = (id: number) => {
    navigate(`/post/${id}`);
  };

  const posts = [
    {
      id: 1,
      title: "Sample Title 1",
      username: "User 1",
      image: PostTestImg,
      date: "2023-01-01",
    },
    {
      id: 2,
      title: "Sample Title 2",
      username: "User 2",
      image: PostTestImg,
      date: "2023-01-02",
    },
    {
      id: 3,
      title: "Sample Title 3",
      username: "User 3",
      image: PostTestImg,
      date: "2023-01-03",
    },
  ];

  return (
    <S.ProfileContainer>
      <S.RowContainer>
        <S.ProfileImage src={ProfileIcon} alt="Profile" />
        <S.ColumContainer>
          <S.ProfileMediumTitle>ID</S.ProfileMediumTitle>
          <S.ProfileSmallTitle>Full ID</S.ProfileSmallTitle>
        </S.ColumContainer>
      </S.RowContainer>
      <S.HorizontalLine />
      <S.TwoColumnContainer>
        {posts.map((post) => (
          <div key={post.id} onClick={() => handlePostClick(post.id)}>
            <PostFrom
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
