import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
// import LogoImage from "../../../assets/image/courageLogo.svg";
import LogoImage from "assets/image/courageLogo.svg";

interface ModalProps {
  onClose: () => void;
}

const LoginModal: React.FC<ModalProps> = ({ onClose }) => {
  const navigate = useNavigate();

  const handleSignup = () => {
    onClose();
    navigate("/signup");
  };

  return (
    <S.Overlay onClick={onClose}>
      <S.ModalContainer onClick={(e) => e.stopPropagation()}>
        <S.Logo src={LogoImage} alt="Logo" />
        <S.InputFieldContainer>
          <S.TitleTextField>아이디</S.TitleTextField>
          <S.InputField type="text" placeholder="아이디를 입력하세요" />
        </S.InputFieldContainer>
        <S.InputFieldContainer>
          <S.TitleTextField>비밀번호</S.TitleTextField>
          <S.InputField type="password" placeholder="비밀번호를 입력하세요" />
        </S.InputFieldContainer>
        <S.LoginButton>로그인</S.LoginButton>
        <S.SignupButton onClick={handleSignup}>혹시 계정이 없으신가요?</S.SignupButton>
      </S.ModalContainer>
    </S.Overlay>
  );
};

export default LoginModal;
