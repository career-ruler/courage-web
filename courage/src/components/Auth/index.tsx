import React from "react";
import * as S from "./style";

const Auth = () => {
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
          <S.InputField type="text" placeholder="아이디를 입력하세요" />
        </S.InputFieldContainer>

      <S.InputFieldContainer>
        <S.TitleTextField>비밀번호</S.TitleTextField>
        <S.InputField type="password" placeholder="비밀번호를 입력하세요" />
      </S.InputFieldContainer>

      <S.InputFieldContainer>
        <S.TitleTextField>비밀번호 확인</S.TitleTextField>
        <S.InputField type="password" placeholder="비밀번호를 재입력하세요" />
      </S.InputFieldContainer>

      <S.SignupButton>회원가입</S.SignupButton>
    </S.AuthContainer>
  );
};

export default Auth;
