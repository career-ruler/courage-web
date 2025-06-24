import styled from "styled-components";

export const PostFormContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
`;

export const PostImg = styled.img`
  min-width: 175px;
  height: 95px;
  object-fit: cover;
  border-radius: 10px;
  background-color: gray;
  display: block;
`;

export const PostHeader = styled.div`
  width: 100%;
  min-height: 95px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
`;

export const PostTitle = styled.h1`
  font-size: 16px;
  font-weight: bold;
  color: #000;
  margin: 0;
`;

export const PostUser = styled.p`
  font-size: 12px;
  color: #555;
  text-align: right;
`;

export const PostFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const PostDate = styled.p`
  font-size: 12px;
  color: #888;
  margin: 0;
  text-align: left;
`;
