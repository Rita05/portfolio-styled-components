import styled from 'styled-components';
import { theme } from '../../styles/Theme';

export const StyledHeader = styled.header<{ isScrolled: boolean }>`
    ${props => props.isScrolled && `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    `}
    background-color: ${props => props.isScrolled ? '#fff' : theme.colors.mainSection};
`
export const Title = styled.span`
    position: relative;
    z-index: 10;
    font-family: Nova Mono, sans-serif;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    cursor: pointer;

    @media ${theme.media.tablet} {
        top: 5px;
    }
`

export const Logo = styled.img`
    position: absolute;
    width: 21px;
    height: 21px;
    top: 5px;
    right: -10px;
    height: 21px;
    transform: rotate(45deg);
`

