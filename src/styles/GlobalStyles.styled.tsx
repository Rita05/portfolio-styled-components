import { createGlobalStyle } from 'styled-components';
import { theme } from './Theme';

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        'sans-serif';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #000000;
        line-height: 1.2;
        min-width: 375px;
    }
    
    ul {
        list-style-type: none;
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    section {
        padding: 100px 0 100px;

        @media ${theme.media.mediumDesktop} {
            padding: 127px 0 127px;
        }

        @media ${theme.media.mobile} {
            padding: 116px 0 116px;
        }
    }

    button {
        background: unset;
        border: none;
        cursor: pointer:
    }
`