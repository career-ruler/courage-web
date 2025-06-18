import React from "react";
import * as S from "./style";

type BubbleType = "default" | "red";
type BubbleDirection = "left" | "right";

interface ChatBubbleProps {
  children: React.ReactNode;
  type?: BubbleType;
  direction?: BubbleDirection;
}

const backgroundMap = {
  default: "#F5F2F2",
  red: "#FF6666",
};

const textColorMap = {
  default: "#333",
  red: "#fff",
};

const ChatBubble = ({
  children,
  type = "default",
  direction = "left",
}: ChatBubbleProps) => {
  const bg = backgroundMap[type];
  const color = textColorMap[type];

  return (
    <S.StyledBubble $bg={bg} $color={color} $direction={direction}>
      {children}
    </S.StyledBubble>
  );
};

export default ChatBubble;
