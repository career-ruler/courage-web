import React, { useState } from "react";
import * as S from "./style";
import LogoImage from "../../../assets/image/courageLogo.svg";
import ProfileImage from "../../../assets/image/profile.svg";
import LoginModal from "../Modal/Login/LoginModal";
import ProfileModal from "../Modal/Profile/ProfileModal";

const HeaderBar = () => {
  //로그인 회원가입 별 헤더 로직 다름
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const toggleProfileModal = () => setIsProfileModalOpen((prev) => !prev);

  return (
    <>
      <S.HeaderBarContainer>
        <S.Logo src={LogoImage} alt="Logo" />
        <S.NavMenu>
          <S.MenuItem to="/">홈</S.MenuItem>
          <S.MenuItem to="/post">포스트</S.MenuItem>
          <S.MenuItem to="/aiInterview">AI 면접</S.MenuItem>
        </S.NavMenu>

        <S.ProfileWrapper>
          {isLoggedIn ? (
            <>
              <S.ProfileImage
                src={ProfileImage}
                alt="Profile"
                onClick={toggleProfileModal}
              />
              {isProfileModalOpen && <ProfileModal />}
            </>
          ) : (
            <S.LoginButton onClick={openModal}>로그인</S.LoginButton>
          )}
        </S.ProfileWrapper>
      </S.HeaderBarContainer>

      {isModalOpen && <LoginModal onClose={closeModal} />}
    </>
  );
};

export default HeaderBar;
