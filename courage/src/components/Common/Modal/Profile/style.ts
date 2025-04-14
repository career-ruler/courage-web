import styled from "styled-components";

export const ProfileModalContainer = styled.div`
  position: absolute;
  top: 60px;
  right: 10px;
  width: 250px;
  height: auto;
  background-color: #ffffff;
  border: 1px solid #f5f2f2;
  border-radius: 10px;
  z-index: 1000;
`;

export const ProfileModalContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 14px;
  color: #333;

  p {
    margin: 0;
    cursor: pointer;

    &:hover {
      color: #007bff;
    }
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #f0f0f0;
  margin: 10px 0;
`;

export const LogoutButton = styled.button`
  background: none;
  border: none;
  color: #000000;
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;
  text-align: left;
  padding: 0;
`;

export const ProfileButton = styled.button`
  background: none;
  border: none;
  color: #000000;
  font-size: 14px;
  cursor: pointer;
  text-align: left;
  padding: 0;
`;

export const ProfileInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
`;

export const GrayText = styled.p`
    color: #626161;
    font-size: 14px;
    font-weight: 400;               
`;

export const BoldText = styled.p`
    color: #000000;
    font-size: 14px;
    font-weight: 700;
`;

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
`;

export const ProfileImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`;

export const AddPostButton = styled.button`
    width: 60%;
    height: 30px;
    background-color: #000000;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`;

export const ButtonIcon = styled.img`
    width: 16px;
    height: 16px;
    object-fit: contain;
`;