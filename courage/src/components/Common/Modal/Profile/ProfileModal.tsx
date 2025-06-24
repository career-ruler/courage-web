import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import ProfileImage from "assets/image/profile.svg";
import PlusIcon from "assets/image/plus.svg";

type ProfileModalProps = {
  onClose: () => void;
  onLogout: () => void;
};

const ProfileModal = ({ onClose, onLogout }: ProfileModalProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("로그아웃 버튼 클릭됨");
    onLogout(); // 상위에서 로그인 상태 false로 바꾸는 함수
    onClose(); // 모달 닫기
  };

  const handleProfileClick = () => {
    navigate("/profile");
    onClose();
  };

  const handleAddPostClick = () => {
    navigate("/createPost");
    onClose();
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
        <S.AddPostButton onClick={handleAddPostClick}>
          <S.ButtonIcon src={PlusIcon} alt="Add Post Icon" />
          포스트 추가하기
        </S.AddPostButton>
        <S.Divider />
        <S.ProfileButton onClick={handleProfileClick}>프로필</S.ProfileButton>
        <S.LogoutButton onClick={handleLogout}>로그아웃</S.LogoutButton>
      </S.ProfileModalContent>
    </S.ProfileModalContainer>
  );
};

export default ProfileModal;
