import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { signupUser } from "../../api/auth/auth";

const Auth = () => {
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async () => {
    if (!userId || !password || !confirmPassword) {
      alert("모든 항목을 입력해주세요.");
      return;
    }
    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      await signupUser(userId, password);
      alert("회원가입이 완료되었습니다.");
      navigate("/");
    } catch (error: any) {
      alert(`회원가입 실패: ${error.message}`);
    }
  };

  return (
    <S.AuthContainer>
      <S.TitleText>회원가입</S.TitleText>
      <S.discriptionText>
        매일 새로운 소식과 함께
        <br />
        커리지의 다양한 면접을 경험해 보세요!
      </S.discriptionText>

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

      <S.InputFieldContainer>
        <S.TitleTextField>비밀번호 확인</S.TitleTextField>
        <S.InputField
          type="password"
          placeholder="비밀번호를 재입력하세요"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </S.InputFieldContainer>

      <S.SignupButton onClick={handleSignup}>회원가입</S.SignupButton>
    </S.AuthContainer>
  );
};

export default Auth;
