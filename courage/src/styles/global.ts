import { createGlobalStyle } from 'styled-components';
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Pretendard-Regular, sans-serif;
    }
    
    body {
        background-color: #FBFAFA;
    }

    a {
        text-decoration: none;
    }
    
    button {
        border: 0;
        background-color: transparent;
    }
`;

export default GlobalStyle;
