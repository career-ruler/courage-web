import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import LogoImage from "assets/image/courageLogo.svg";

interface ModalProps {
  onClose: () => void;
  onLoginSuccess: () => void; // 추가
}

const LoginModal: React.FC<ModalProps> = ({ onClose, onLoginSuccess }) => {
  const navigate = useNavigate();

  const handleSignup = () => {
    onClose();
    navigate("/signup");
  };

  // 로그인 버튼 클릭 시 로그인 성공 처리 예시
  const handleLogin = () => {
    // 여기에 로그인 인증 로직 추가 가능
    onLoginSuccess(); // 로그인 성공 시 호출
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
        <S.LoginButton onClick={handleLogin}>로그인</S.LoginButton>{" "}
        {/* onClick 추가 */}
        <S.SignupButton onClick={handleSignup}>
          혹시 계정이 없으신가요?
        </S.SignupButton>
      </S.ModalContainer>
    </S.Overlay>
  );
};

export default LoginModal;
