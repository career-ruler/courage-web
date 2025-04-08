import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderBarContainer = styled.div`
  width: 100%;
  min-width: 260px;
  min-height: 65px; // 최소 높이만 지정
  display: flex;
  align-items: center;
  background: #FFF;
  padding: 0 20px;
  justify-content: space-between;
`;

export const Logo = styled.img`
    width: auto;
    height: 30px;
    margin-left: 100px;
`;

export const NavMenu = styled.nav`
    display: flex;
    align-items: center;
    margin-left: 54px;
`;

export const MenuItem = styled(Link)`
    text-decoration: none;
    color: black;
    font-size: 15px;
    font-weight: 500;
    margin-right: 52px;
    
    &:last-child {
        margin-right: 0;
    }
`;

export const ProfileWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: 100px;
`;

export const ProfileImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
`;

export const LoginButton = styled.button`
    width: 68px;
    height: 40px;
    background-color: white;
    color: #626161;
    font-size: 15px;
    font-weight: 600;
    border-radius: 15px;
    border: 1px solid #C4C1C1;
    display: flex;
    justify-content: center;
    align-items: center;
`;
