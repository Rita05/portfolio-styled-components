import React, { FC, useState } from 'react';
import styled from 'styled-components';
import Link from 'react-scroll/modules/components/Link';
import { theme } from '../../../styles/Theme';

export type MenuType = {
    title: string,
    href: string
}

type HeaderMenuProps = {
    menuItems: Array<MenuType>
}

export const HeaderMenu: FC<HeaderMenuProps> = (props) => {
    const { menuItems } = props;
    const [activeItem, setActiveItem] = useState(menuItems[0].href);

    return (
        <StyledMenu>
            <ul>
                {menuItems.map(({ title, href }, index) => {
                    return (
                        <StyledItem key={index}
                            isActive={activeItem === href}
                        >
                            <StyledLink
                                className={activeItem === href ? 'active' : ''}
                                to={href}
                                smooth={true}
                                duration={500}
                                offset={-50}
                                onClick={() => setActiveItem(href)}
                            >
                                {title}
                            </StyledLink>
                        </StyledItem>
                    )
                })}
            </ul>
        </StyledMenu >
    )
}

const StyledMenu = styled.nav`
    @media ${theme.media.mediumDesktop} {
        display: none;
    }

    ul {
        display: flex;
        gap: 52px; 
    }
`
const StyledItem = styled.li<{ isActive: boolean }>`
    position: relative;
    cursor: pointer;
    z-index: 10;
    font-family: Nunito Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${({ isActive }) => (isActive ? `${theme.colors.primary}` : `${theme.colors.font}`)};
`

const StyledLink = styled(Link)`
    &.active {
        &::before {
            position: absolute;
            content: "";
            top: 100%;
            display: inline-block;
            width: 100%;
            height: 2px;
            background-color: ${theme.colors.primary};
        }
    }
`