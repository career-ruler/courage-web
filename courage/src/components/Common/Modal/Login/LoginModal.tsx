import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import LogoImage from "assets/image/courageLogo.svg";
import { signinUser } from "../../../../api/auth/auth";
import { setTokens } from "../../../../libs/tokenStorage";

interface ModalProps {
  onClose: () => void;
  onLoginSuccess: () => void;
}

const LoginModal: React.FC<ModalProps> = ({ onClose, onLoginSuccess }) => {
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = () => {
    onClose();
    navigate("/signup");
  };

  const handleLogin = async () => {
    try {
      const result = await signinUser(userId, password);
      console.log("로그인 성공:", result);

      // ✅ 토큰 저장
      setTokens(result.accessToken, result.refreshToken);

      onLoginSuccess();
      onClose();
    } catch (error: any) {
      console.error("로그인 실패:", error);
      setErrorMessage(error.message || "로그인 중 오류가 발생했습니다.");
    }
  };

  return (
    <S.Overlay onClick={onClose}>
      <S.ModalContainer onClick={(e) => e.stopPropagation()}>
        <S.Logo src={LogoImage} alt="Logo" />

        <S.InputFieldContainer>
          <S.TitleTextField>아이디</S.TitleTextField>
          <S.InputField
            type="text"
            placeholder="아이디를 입력하세요"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </S.InputFieldContainer>

        <S.InputFieldContainer>
          <S.TitleTextField>비밀번호</S.TitleTextField>
          <S.InputField
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </S.InputFieldContainer>

        {/* {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>} */}

        <S.LoginButton onClick={handleLogin}>로그인</S.LoginButton>
        <S.SignupButton onClick={handleSignup}>
          혹시 계정이 없으신가요?
        </S.SignupButton>
      </S.ModalContainer>
    </S.Overlay>
  );
};

export default LoginModal;
