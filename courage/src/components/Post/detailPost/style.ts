import styled from "styled-components";

export const DetailPostContainer = styled.div`
  width: 55%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: #fff;
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

export const PostImage = styled.img`
  width: 100%;
  height: 345px;
  object-fit: cover;
  padding-bottom: 39px;
`;

export const PostTitle = styled.p`
  font-size: 25px;
  font-weight: 700;
  color: #000;
  padding-bottom: 3px;
`;

export const CategoryTag = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #000;
  border: 1px solid #000;
  border-radius: 20px;
  padding: 5px 10px;
  margin: 5px;
  display: inline-block;
  box-sizing: border-box;
`;

export const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const ProfileImage = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ProfileMediumImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`;
export const ProfileName = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: #000;
  padding-left: 5px;
`;

export const PostContent = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #000;
  padding-top: 25px;
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;
  margin-top: 20px;
  align-items: center;
`;

export const InputField = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px 40px 10px 10px;
  font-size: 16px;
  color: #000000;
  border: 1px solid #fff;
  border-radius: 5px;
  outline: none;
  background-color: #f6f5f8;
  margin-bottom: 8px;

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

export const CommentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 15px;
`;

export const CommentHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ToggleRepliesButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;

  img {
    width: 16px;
    height: 16px;
  }

  span {
    font-size: 14px;
    font-weight: 500;
    color: #626161;
  }
`;

export const RepliesContainer = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ReplyItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const CommentUsername = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: #c4c1c1;
  margin-bottom: 3px;
`;

export const CommentContent = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #626161;
  margin-bottom: 5px;
`;

export const ReplyInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px; /* 아래 마진 줄임 */
  margin-top: 10px;
  position: relative; /* 아이콘 배치를 위해 relative 추가 */
  margin-bottom: 10px; /* 아래 마진 추가 */
`;

export const ReplyInputField = styled.input`
  width: 100%;
  height: 30px;
  font-size: 14px;
  color: #000;
  border: none;
  outline: none;
  background: none;

  ::placeholder {
    color: #aaa;
    font-size: 14px;
  }
`;

export const ReplyInputLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #000;
`;

export const ReplyInputIcon = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
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
