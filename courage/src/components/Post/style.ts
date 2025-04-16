import styled from "styled-components";

export const PostContainer = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: #fff;
  padding: 40px;
  margin: 0 auto;
  gap: 35px;
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
