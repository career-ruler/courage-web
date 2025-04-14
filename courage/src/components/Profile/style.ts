import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: #fff;
  padding: 60px;
  padding-top: 65px;
  margin: 0 auto;
`;

export const RowContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  padding-right: 60px;
`;

export const ColumContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 30px;
  /* margin-left: 10px; */
`;

export const ProfileImage = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
`;

export const ProfileMediumTitle = styled.p`
  color: #626161;
  font-size: 23px;
  font-weight: 600;
  margin-top: 10px;
`;

export const ProfileSmallTitle = styled.p`
  color: #000000;
  font-size: 22px;
  font-weight: 500;
  margin-top: 15px;
`;

export const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #F5F2F2;
  margin: 15px 15px;
`;

export const TwoColumnContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  margin-top: 20px;
`;