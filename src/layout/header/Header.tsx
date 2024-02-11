import React, { useState, useEffect } from 'react';
import { GlobalStyles } from '../../styles/GlobalStyles.styled';
import { Logo, StyledHeader, Title } from './Header.styled';
import { HeaderMenu } from './menu/HeaderMenu';
import { MobileMenu } from './menu/MobileMenu';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import logoIcon from '../../assets/images/logo.svg';
import { animateScroll as scroll } from 'react-scroll';

export const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    const menuItems = [
        { title: 'Home', href: 'home' },
        { title: 'About', href: 'about' },
        { title: 'Skills', href: 'skills' },
        { title: 'Projects', href: 'projects' },
        { title: 'Contact', href: 'contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setIsScrolled(offset > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <GlobalStyles />
            <StyledHeader isScrolled={isScrolled}>
                <Container>
                    <FlexWrapper justify='space-between' align='center'>
                        <Title onClick={() => { scroll.scrollToTop() }}>
                            Margo
                            <Logo src={logoIcon}></Logo>
                        </Title>
                        <HeaderMenu menuItems={menuItems} />
                        <MobileMenu menuItems={menuItems} />
                    </FlexWrapper>
                </Container>
            </StyledHeader>
        </>

    )
}

