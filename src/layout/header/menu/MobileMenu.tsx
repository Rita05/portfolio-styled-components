import React, { FC, useState } from 'react';
import styled, { css } from 'styled-components';
import Link from 'react-scroll/modules/components/Link';
import { theme } from '../../../styles/Theme';

//types 
import { MenuType } from './HeaderMenu';

type MobileMenuProps = {
    menuItems: Array<MenuType>
}

export const MobileMenu: FC<MobileMenuProps> = (props) => {
    const { menuItems } = props;

    const [isOpen, setOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(menuItems[0].href);

    const toggleMenu = () => {
        setOpen(!isOpen)
    }

    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={isOpen} onClick={toggleMenu}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup isOpen={isOpen}>
                <ul>
                    {menuItems.map(({ title, href }, index) => {
                        return (
                            <li key={index}>
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
                            </li>
                        )
                    })}
                </ul>
            </MobileMenuPopup>
        </StyledMobileMenu >
    )
}

const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    top: 80px;
    z-index: 99999;
    right: -100px;
    width: 200px;
    height: auto;
    cursor: pointer;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.font};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgb(255, 255, 255, 0);
        `}

        &::before{
            content: '';
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);
            `}
        }

        &::after {
            content: '';
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(10px);
            ${props => props.isOpen && css<{ isOpen: boolean }>`
                width: 36px;
                transform: rotate(45deg) translateY(0);
            `}
        }
    }
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    display: none;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    background-color: rgb(135 115 238 / 90%);

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 52px; 
         
        li {
            position: relative;
            cursor: pointer;
            font-family: Nunito Sans;
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
        }
    }
`
const StyledLink = styled(Link)`
    &.active {
        &::before {
        position: absolute;
        content: "";
        top: 100%;
        width: 100%;
        border-bottom: 3px dotted #301b74;
        }
    }
`

const StyledMobileMenu = styled.nav`
    display: none;
    @media ${theme.media.mediumDesktop} {
        display: block;
    }
`