import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import PostFrom from "../Profile/component/PostForm";
import PostTestImg from "../../assets/image/banner.png";

const Post = () => {
  const [selectedButton, setSelectedButton] = useState<number>(0);
  const navigate = useNavigate();

  const handleButtonClick = (index: number) => {
    setSelectedButton(index);
  };

  const handlePostClick = (id: number) => {
    navigate(`/post/${id}`);
  };

  const posts = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    title: `Sample Title I really want to go home So, Do you want go with me ..? You will like it.  ${index + 1}`,
    username: `User ${index + 1}`,
    image: PostTestImg,
    date: `2023-01-${String(index + 1).padStart(2, "0")}`,
  }));

  return (
    <S.PostContainer>
      <S.PostCategoryContainer>
        {["전체", "Server", "Web", "Android", "iOS", "AI"].map(
          (text, index) => (
            <S.PostCategoryTitle
              key={index}
              selected={selectedButton === index}
              onClick={() => handleButtonClick(index)}
            >
              {text}
            </S.PostCategoryTitle>
          )
        )}
      </S.PostCategoryContainer>
      <S.ColumnContainer>
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
      </S.ColumnContainer>
    </S.PostContainer>
  );
};

export default Post;
