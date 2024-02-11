import styled from "styled-components";
import { font } from "../styles/Common";
import { theme } from "../styles/Theme";


export const SectionTitle = styled.h2`
    ${font({ family: 'Nunito, sans-serif', weight: 700, lineHeight: '42px', Fmax: 48, Fmin: 38 })};
    position: relative;
    color: ${theme.colors.font};
    text-align: center;
    margin-bottom: 80px;

    &::before {
        position: absolute;
        content: "";
        left: 50%;
        bottom: -30px;
        transform: translateX(-50%);
        display: inline-block;
        width: 55px;
        height: 2px;
        background-color: ${theme.colors.primary};

        @media ${theme.media.mobile} {
            bottom: -24px;
        }
    }
`