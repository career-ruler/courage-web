import React, { useState, useRef, useEffect } from "react";
import * as S from "./style";
import SendIcon from "../../assets/image/Send.svg";
import ChatBubble from "../Home/component/ChatBubble";

const AiInterview = () => {
  const [messages, setMessages] = useState<{ text: string; direction: "left" | "right"; isBot?: boolean }[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isSending, setIsSending] = useState(false); // 중복 방지 상태 추가
  const chatContainerRef = useRef<HTMLDivElement>(null); // 채팅 컨테이너 참조

  const handleSendMessage = () => {
    if (!inputValue.trim() || isSending) return;
    setIsSending(true);

    // 사용자가 입력한 메시지를 추가
    setMessages((prev) => [...prev, { text: inputValue, direction: "right" }]);
    setInputValue("");

    // AI 봇의 응답을 추가 (더미 데이터)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "AI의 응답입니다.", direction: "left", isBot: true },
      ]);
      setIsSending(false);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <S.AiInterviewContainer>
      <S.ChatContainer ref={chatContainerRef}>
        {messages.map((message, index) => (
          <div key={index}>
            {message.isBot && <S.AiInterviewTitle>AI bot</S.AiInterviewTitle>}
            <ChatBubble direction={message.direction}>{message.text}</ChatBubble>
          </div>
        ))}
      </S.ChatContainer>
      <S.InputContainer>
        <S.InputField
          placeholder="채팅을 입력해주세요."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <S.InputIconButton onClick={handleSendMessage}>
          <img src={SendIcon} alt="Send Icon" />
        </S.InputIconButton>
      </S.InputContainer>
    </S.AiInterviewContainer>
  );
};

export default AiInterview;
