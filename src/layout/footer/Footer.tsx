import React from 'react';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Copyright, Name, SocialIcon, SocialItem, SocialLink, SocialList, StyledFooter } from './Footer.styled';
import { socialData } from './FooterData';

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction='column' align='center'>
                <Name>Margarita</Name>
                <SocialList>
                    {
                        socialData.map((item) => {
                            const { icon, link } = item
                            return (
                                <SocialItem>
                                    <SocialLink href={link} target='_blank'>
                                        <SocialIcon src={icon}></SocialIcon>
                                    </SocialLink>
                                </SocialItem>
                            )
                        })
                    }
                </SocialList>
                <Copyright>© 2023 Margarita Taranova, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    )
}

