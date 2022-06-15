import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --secondary: rgb(231, 235, 240);
        --negative: #d32f2f;
        --gray-100: #ecf0f1;
        --gray-1000: rgb(10, 25, 41);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        min-height: 100vh;
    }

    html {  
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: white;
        font-family: sans-serif;
        -webkit-font-smoothing: antialiased;
    }

    a { 
        color: inherit;
    }
`;
