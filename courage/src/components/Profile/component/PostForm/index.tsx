import React from "react";
import * as S from "./style";

interface PostFormProps {
  title: string;
  username: string;
  image?: string;
  date: string;
  onClick?: () => void;
}

const PostForm: React.FC<PostFormProps> = ({
  title,
  username,
  image,
  date,
  onClick,
}) => {
  return (
    <S.PostFormContainer onClick={onClick}>
      <S.PostImg src={image} alt={`게시글 이미지 - ${title}`} />
      <S.PostHeader>
        <S.PostTitle>{title}</S.PostTitle>
        <S.PostFooter>
          <S.PostUser>{username}</S.PostUser>
          <S.PostDate>{date}</S.PostDate>
        </S.PostFooter>
      </S.PostHeader>
    </S.PostFormContainer>
  );
};

export default PostForm;
