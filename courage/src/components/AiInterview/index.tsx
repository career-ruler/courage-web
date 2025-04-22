import React, { useState } from "react";
import * as S from "./style";
import SendIcon from "../../assets/image/Send.svg";

const AiInterview = () => {
  return (
    <S.AiInterviewContainer>
      <S.AiInterviewTitle>AI bot</S.AiInterviewTitle>
      <S.InputContainer>
        <S.InputField placeholder="채팅을 입력해주세요." />
        <S.InputIconButton>
          <img src={SendIcon} alt="Search Icon" />
        </S.InputIconButton>
      </S.InputContainer>
    </S.AiInterviewContainer>
  );
};

export default AiInterview;
