import React, { useState } from "react";
import * as S from "./style";
import LogoImage from "../../../assets/image/courageLogo.svg";
import ProfileImage from "../../../assets/image/profile.svg";
import LoginModal from "../Modal/LoginModal";

const HeaderBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <S.HeaderBarContainer>
        <S.Logo src={LogoImage} alt="Logo" />
        <S.NavMenu>
          <S.MenuItem to="/">홈</S.MenuItem>
          <S.MenuItem to="/post">포스트</S.MenuItem>
          <S.MenuItem to="/ai-interview">AI 면접</S.MenuItem>
        </S.NavMenu>

        <S.ProfileWrapper>
          {isLoggedIn ? (
            <S.ProfileImage src={ProfileImage} alt="Profile" />
          ) : (
            <S.LoginButton onClick={openModal}>로그인</S.LoginButton>
          )}
        </S.ProfileWrapper>
      </S.HeaderBarContainer>

      {/* 로그인 모달 */}
      {isModalOpen && <LoginModal onClose={closeModal} />}
    </>
  );
};

export default HeaderBar;
