import styled from "styled-components";

export const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0 20px;
    justify-content: space-between;
`;

export const LeftContainer = styled.div`
    width: 70%;
    height: auto;  
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 30px;
`;

export const RightContainer = styled.div`
    width: 30%; 
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-top: 30px;
`;

export const AiContainer = styled.div`
    width: 400px;
    height: 229px;
    flex-direction: column;
    align-items: flex-start;
    background-color: #FFFFFF;
    padding: 25px;
    border-radius: 15px;
`;

export const RowSection = styled.div`
    max-width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
`;

export const ColumnSection = styled.div`
    max-width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const RobotImage = styled.img`
    width: 100px;
    height: auto;
    /* object-fit: cover; */
`;

export const MediumTitle = styled.p`
    font-size: 20px;
    font-weight: bold;
    color: #000000;
`;

export const BannerImage = styled.img`
    width: 1130px;
    height: auto;
    max-width: 100%; //부모보다 크기 작게
    border-radius: 15px;
    object-fit: cover;
`;

export const PostListText = styled.p`
    color: #000000;
    font-size: 20px;
    font-weight: bold;
    padding-top: 46px;
    max-width: 100%;
`;

export const PostGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, auto);
    gap: px;
    width: 1130px;
    max-width: 100%;
`;