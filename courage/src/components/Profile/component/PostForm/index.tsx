import React from "react";
import * as S from "./style";

interface PostFormProps {
  title: string;
  username: string;
  image: string;
  date: string;
}

const PostFrom: React.FC<PostFormProps> = ({
  title,
  username,
  image,
  date,
}) => {
  return (
    <S.PostFormContainer>
      <S.PostImg src={image} alt="Post" />
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

export default PostFrom;
