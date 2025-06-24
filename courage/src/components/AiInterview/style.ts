import styled, { keyframes } from "styled-components";

const blinkAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

export const AiInterviewContainer = styled.div`
  width: 65%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0 auto;
  padding: 30px 100px;
  box-sizing: border-box;
  overflow: hidden;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const InputContainer = styled.div`
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 800px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

export const InputField = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px 40px 10px 10px;
  font-size: 16px;
  color: #000000;
  border: 1px solid #f6f5f8;
  border-radius: 5px;
  outline: none;
  background-color: #f6f5f8;

  ::placeholder {
    color: #aaaaaa;
    font-size: 14px;
  }
`;

export const InputIconButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  width: 17px;
  height: 17px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const AiInterviewTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 10px;
`;

export const AiInterviewLoading = styled.p`
  font-size: 13px;
  font-weight: 500;
  color: #C4C1C1;
  animation: ${blinkAnimation} 1.5s infinite;
`;

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 10px;
  margin-bottom: 100px;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const EmptyState = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #999;
  font-size: 18px;
  text-align: center;
  user-select: none;
  gap: 10px;

  h2 {
    font-size: 28px;
    font-weight: 700;
    color: #444;
    margin: 0;
  }
`;