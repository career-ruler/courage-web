import styled from "styled-components";

type BubbleDirection = "left" | "right";

export const StyledBubble = styled.div<{
  $bg: string;
  $color: string;
  $direction: BubbleDirection;
}>`
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

  ${({ $direction }) =>
    $direction === "right"
      ? `
        margin-left: auto;
        text-align: right;
      `
      : `
        margin-right: auto;
        text-align: left;
      `}

  &::after {
    content: "";
    position: absolute;
    bottom: 6px;
    ${({ $direction }) =>
      $direction === "left" ? "left: -4px;" : "right: -4px;"}
    width: 15px;
    height: 10px;
    background: ${({ $bg }) => $bg};
    ${({ $direction }) =>
      $direction === "left"
        ? "border-bottom-right-radius: 20px;"
        : "border-bottom-left-radius: 20px;"}
    transform: ${({ $direction }) =>
      $direction === "left" ? "rotate(45deg)" : "rotate(-45deg)"};
  }
`;
