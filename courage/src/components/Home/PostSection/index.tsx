import React from "react";
import * as S from "./style";
import PostProfile from "../../../assets/image/postProfile.svg";

interface PostSectionProps {
  title: string;
  username: string;
  image?: string;
  date: string;
}

const PostSection = ({ title, username, image, date }: PostSectionProps) => {
  return (
    <S.PostSection>
      <S.PostTitleText>{title}</S.PostTitleText>
      <S.PostInfo>
        <S.PostProfileImage src={PostProfile} alt="Profile" />
        <S.PostSectionWriter>{username}</S.PostSectionWriter>
      </S.PostInfo>
      <S.PostFooter>
        <S.PostFooterText>{date}</S.PostFooterText>
      </S.PostFooter>
    </S.PostSection>
  );
};

export default PostSection;
