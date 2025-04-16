import styled from "styled-components";

export const DetailPostContainer = styled.div`
  width: 55%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: #fff;
  padding: 40px;
  margin: 0 auto;
  gap: 35px;
  box-sizing: border-box;
  overflow: hidden;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none; 

  &::-webkit-scrollbar {
    display: none;
  }
`;