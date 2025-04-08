import React, { useState } from "react";
import * as S from "./style";
import PostProfile from "../../../assets/image/postProfile.svg";

const PostSection = () => {
  return (
    <S.PostSection>
      <S.PostTitleText>
        제가 서버 개발자로 취업을 하고 싶은데, 어떻게 하면 실력을 향상시킬 수 있을까요.
      </S.PostTitleText>
      <S.PostInfo>
        <S.PostProfileImage src={PostProfile} alt="Banner" />
        <S.PostSectionWriter>
          세상에서가장사랑스러운쥐는너쥐
        </S.PostSectionWriter>
      </S.PostInfo>
      <S.PostFooter>
        <S.PostFooterText>2024.03.12</S.PostFooterText>
      </S.PostFooter>
    </S.PostSection>
  );
};

export default PostSection;
