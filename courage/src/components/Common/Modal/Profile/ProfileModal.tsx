import React from "react";
import * as S from "./style";
import ProfileImage from "assets/image/profile.svg";
import PlusIcon from "assets/image/plus.svg";

const ProfileModal = () => {
  const handleLogout = () => {
    console.log("로그아웃 버튼 클릭됨");
  };

  return (
    <S.ProfileModalContainer>
      <S.ProfileModalContent>
        <S.ProfileContainer>
          <S.ProfileImage src={ProfileImage} alt="Profile" />
          <S.ProfileInfoContainer>
            <S.GrayText>ID</S.GrayText>
            <S.BoldText>leeyoonchae</S.BoldText>
          </S.ProfileInfoContainer>
        </S.ProfileContainer>
        <S.AddPostButton>
        <S.ButtonIcon src={PlusIcon} alt="Add Post Icon" />
          포스트 추가하기
        </S.AddPostButton>
        <S.Divider />
        <S.LogoutButton onClick={handleLogout}>로그아웃</S.LogoutButton>
      </S.ProfileModalContent>
    </S.ProfileModalContainer>
  );
};

export default ProfileModal;
