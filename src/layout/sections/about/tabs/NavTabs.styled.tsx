import styled, { css } from "styled-components";
import { theme } from "../../../../styles/Theme";


export const NavTabsContainer = styled.div`
`

export const NavTab = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 52px;
    font-family: Nunito Sans;
    font-size: 22px;
    font-weight: 700;
    
`
export const NavTabItem = styled.li<{ isActive: boolean }>`
    position: relative;
    color: ${({ isActive }) => (isActive ? `${theme.colors.primary}` : `${theme.colors.font}`)};
    font-family: Nunito Sans;
    font-weight: 700;

   
    &::before {
        position: absolute;
        content: "";
        top: 100%;
        display: inline-block;
        width: 100%;
        height: 2px;
        background-color: ${({ isActive }) => (isActive ? `${theme.colors.primary}` : '#fff')};
    }
`

export const NavTabPanel = styled.div`

`

export const NavContent = styled.p<{ isShowMore: boolean }>` 
    padding: 20px 0 0;
    min-height: 238px;

    ${props => !props.isShowMore && css`
    & > *:nth-child(n+3) {
      display: none;
    }
  `}
`