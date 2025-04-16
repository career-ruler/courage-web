import React, { useState } from "react";
import * as S from "./style";
// import PostFrom from "@components/Profile/component/PostForm";
import PostFrom from "../Profile/component/PostForm";
import PostTestImg from "../../assets/image/banner.png";

const Post = () => {
  const [selectedButton, setSelectedButton] = useState<number>(0);

  const handleButtonClick = (index: number) => {
    setSelectedButton(index);
  };

  const posts = Array.from({ length: 10 }, (_, index) => ({
    title: `Sample Title ${index + 1}`,
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
      {posts.map((post, index) => (
        <PostFrom
          key={index}
          title={post.title}
          username={post.username}
          image={post.image}
          date={post.date}
        />
      ))}
    </S.PostContainer>
  );
};

export default Post;
