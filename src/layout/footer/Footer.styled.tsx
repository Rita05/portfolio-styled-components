import styled from 'styled-components';
import { font } from '../../styles/Common';
import { theme } from '../../styles/Theme';

export const StyledFooter = styled.footer`
    background-color: ${theme.colors.primary};
    padding: 40px 0;
`
export const Name = styled.span`
    ${font({ family: 'Nunito, sans-serif', weight: 700, Fmax: 22, Fmin: 18 })};
    letter-spacing: 3px;
`

export const SocialList = styled.ul`
    display: flex;
    gap: 20px;
    margin: 30px 0;
`
export const SocialItem = styled.li`

`
export const SocialLink = styled.a`
   
`

export const SocialIcon = styled.img`
    width: 30px;
    height: 30px;
`
export const Copyright = styled.small`
    font-family: Nunito Sans;
    font-size: 12px;
    font-weight: 400;
    color: rgb(29 26 26 / 70%);

    @media ${theme.media.mobile} {
        max-width: 200px;
    }
`