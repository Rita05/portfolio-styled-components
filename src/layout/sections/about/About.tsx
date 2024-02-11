import React from 'react';
import photo from '../../../assets/images/about-photo.jpg';
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { AboutContent, AboutDescription, AboutPhoto, AboutPhotoWrapper, AboutSection, AboutTitle } from './About.styled';
import NavTabs from './tabs/NavTabs';
import Tilt from 'react-parallax-tilt';

export const About = () => {
    return (
        <AboutSection id={'about'}>
            <Container>
                <FlexWrapper align="flex-start" justify="space-between" gap='173px'>
                    <Tilt>
                        <AboutPhotoWrapper>
                            <AboutPhoto src={photo}></AboutPhoto>
                        </AboutPhotoWrapper>
                    </Tilt>
                    <AboutContent>
                        <AboutTitle>About Me</AboutTitle>
                        <AboutDescription>
                            {"I've been engaged in commercial development of SPA applications on React for more \
                              than 2 years. I'm able to create high-performance, cross-browser and adaptive web applications using \
                              technologies such as React, Redux, Typescript, StoryBook, Tailwind Css. I'll be glad \
                              to be a part of your team."
                            }
                        </AboutDescription>
                        <NavTabs />
                    </AboutContent>
                </FlexWrapper>
            </Container>
        </AboutSection>
    )
}