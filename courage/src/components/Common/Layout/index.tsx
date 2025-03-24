import React from "react";
import styled from "styled-components";
import { ProviderProps } from "../Provider/type";
import HeaderBar from "../Header/index";

const Layout = ({ children }: ProviderProps) => {
    return (
        <Container>
            <HeaderBar />
            {children}
        </Container>
    );
};

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    user-select: none;
`;

export default Layout;
