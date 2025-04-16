import styled from "styled-components";

export const PostContainer = styled.div`
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

export const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #f5f2f2;
  margin: 15px 15px;
`;

export const PostCategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 100%;
  position: relative;
  border-bottom: 1px solid #F5F2F2;
  padding-bottom: -5px;
`;

export const PostCategoryTitle = styled.p<{ selected?: boolean }>`
  color: ${({ selected }) => (selected ? "#FF0000" : "#626161")};
  font-size: 15px;
  font-weight: bold;
  margin: 0;
  padding-bottom: 5px;
  border-bottom: 1px solid
    ${({ selected }) => (selected ? "#FF0000" : "transparent")};
  cursor: pointer;
  transition: color 0.3s, border-bottom 0.3s;
`;

export const ColumnContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr); /* 가로에 최대 1개의 요소 */
  gap: 20px; /* 요소 간 간격 */
  width: 100%;
  margin-top: 20px;
`;