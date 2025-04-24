import styled from "styled-components";

export const PostSection = styled.div`
    width: 485px;
    height: 194px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 20px;
    margin-right: 30px;
    background-color: #FFFFFF;
    border-radius: 15px;
    padding: 30px;
    max-width: 100%;
`;

export const PostTitleText = styled.p`
    color: #000000;
    font-size: 20px;
    font-weight: bold;
`;

export const PostInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px; 
    padding-top: 5px;
`;

export const PostProfileImage = styled.img`
    width: 13px;
    height: 16px;
    object-fit: cover;
    overflow: hidden;
`;

export const PostSectionWriter = styled.p`
    color: #939191;
    font-size: 18px;
    font-weight: 400;
`;

export const PostFooter = styled.div`
    margin-top: auto;
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;


export const PostFooterText = styled(PostSectionWriter)``; 
