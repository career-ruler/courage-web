import React from "react";
import styled from "styled-components";

type BubbleType = "default" | "red";

interface ChatBubbleProps {
  children: React.ReactNode;
  type?: BubbleType;
}

const backgroundMap = {
  default: "#F5F2F2",
  red: "#FF6666",
};

const textColorMap = {
  default: "#333",
  red: "#fff",
};

const StyledBubble = styled.div<{ $bg: string; $color: string }>`
  position: relative;
  background: ${({ $bg }) => $bg};
  border-radius: 20px;
  padding: 8px 15px;
  width: fit-content;
  max-width: 100%;
  color: ${({ $color }) => $color};
  line-height: 1.4;
  margin: 5px 0;
  font-size: 13px;
  word-break: break-word;

  &::after {
    content: "";
    position: absolute;
    bottom: 6px;
    left: -4px;
    width: 15px;
    height: 10px;
    background: ${({ $bg }) => $bg};
    border-bottom-right-radius: 20px;
    transform: rotate(45deg);
  }
`;

const ChatBubble = ({ children, type = "default" }: ChatBubbleProps) => {
  const bg = backgroundMap[type];
  const color = textColorMap[type];

  return <StyledBubble $bg={bg} $color={color}>{children}</StyledBubble>;
};

export default ChatBubble;
