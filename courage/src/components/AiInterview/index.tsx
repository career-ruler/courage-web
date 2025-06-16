import React, { useState, useRef, useEffect } from "react";
import * as S from "./style";
import SendIcon from "../../assets/image/Send.svg";
import ChatBubble from "../Home/component/ChatBubble";

import { generateQuestion, generateAnswer } from "../../api/aiInterview/aiInterview";

type Message = {
  text: string;
  direction: "left" | "right";
  isBot?: boolean;
};

type Phase = "question" | "answer";

const AiInterview = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [phase, setPhase] = useState<Phase>("question");
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const [lastQuestion, setLastQuestion] = useState<string>("");

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isSending) return;
    setIsSending(true);

    setMessages((prev) => [...prev, { text: inputValue, direction: "right" }]);
    const userInput = inputValue;
    setInputValue("");

    const loadingMessage: Message = {
      text: phase === "question" ? "질문을 생성 중..." : "답변을 생성 중...",
      direction: "left",
      isBot: true,
    };
    setMessages((prev) => [...prev, loadingMessage]);

    try {
      if (phase === "question") {
        const generatedQuestion = await generateQuestion(userInput);

        setMessages((prev) => {
          const updated = prev.slice(0, -1);
          return [...updated, { text: generatedQuestion, direction: "left", isBot: true }];
        });

        setLastQuestion(generatedQuestion);
        setPhase("answer");
      } else {
        const generatedAnswer = await generateAnswer(lastQuestion);

        setMessages((prev) => {
          const updated = prev.slice(0, -1);
          return [...updated, { text: generatedAnswer, direction: "left", isBot: true }];
        });

        setPhase("question");
      }
    } catch (err) {
      console.error("에러 발생:", err);
      setMessages((prev) => {
        const updated = prev.slice(0, -1);
        return [
          ...updated,
          { text: "⚠️ 에러가 발생했습니다.", direction: "left", isBot: true },
        ];
      });
    } finally {
      setIsSending(false);
    }
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
            <ChatBubble
              direction={message.direction}
              type={message.isBot ? "red" : "default"}
            >
              {message.text}
            </ChatBubble>
          </div>
        ))}
      </S.ChatContainer>
      <S.InputContainer>
        <S.InputField
          placeholder="채팅을 입력해주세요."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isSending}
        />
        <S.InputIconButton onClick={handleSendMessage} disabled={isSending}>
          <img src={SendIcon} alt="Send Icon" />
        </S.InputIconButton>
      </S.InputContainer>
    </S.AiInterviewContainer>
  );
};

export default AiInterview;
