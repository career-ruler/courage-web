import React from "react";
import * as S from "./style";
import ProfileIcon from "../../assets/image/profile.svg";
import PostFrom from "./component/PostForm";
import PostFormImg from "../../assets/image/banner.png";
import PostTestImg from "../../assets/image/banner.png";

const Profile = () => {
  return (
    <S.ProfileContainer>
      <S.RowContainer>
        <S.ProfileImage src={ProfileIcon} alt="Profile" />
        <S.ColumContainer>
          <S.ProfileMediumTitle>ID</S.ProfileMediumTitle>
          <S.ProfileSmallTitle>Full ID</S.ProfileSmallTitle>
        </S.ColumContainer>
      </S.RowContainer>
      <S.HorizontalLine /> {/* 검정색 선 추가 */}
      <S.TwoColumnContainer>
        <PostFrom 
          title="Sample Title 1" 
          username="User 1" 
          image={PostTestImg} 
          date="2023-01-01" 
        />
        <PostFrom 
          title="Sample Title 2" 
          username="User 2" 
          image={PostTestImg} 
          date="2023-01-02" 
        />
        <PostFrom 
          title="Sample Title 3" 
          username="User 3" 
          image={PostTestImg} 
          date="2023-01-03" 
        />
      </S.TwoColumnContainer>
    </S.ProfileContainer>
  );
};

export default Profile;
