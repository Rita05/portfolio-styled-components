import styled from "styled-components";
import { ProjectDescription } from "../layout/sections/projects/Projects.styled";
import { theme } from "../styles/Theme";

type ButtonsProps = {
    bgColor?: string,
    borderRadius?: string
}

export const Button = styled.button<ButtonsProps>`
    position: relative;
    cursor: pointer;
    width: 150px;
    height: 50px;
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 1px;
    z-index: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.bgColor || 'unset'};
    border-radius: ${props => props.borderRadius || 'unset'};

    &:hover {
        &::before {
            width: 100%;
            height: 100%;
        }

    }

    &::before {
        position: absolute;
        content: '';
        display: inline-block;
        border-radius: 18px;
        background-color: ${theme.colors.primary};
        bottom: 0;
        left: 50%;
        z-index: -1;
        transform: translateX(-50%);
    }
`