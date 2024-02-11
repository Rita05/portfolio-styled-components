import { useState } from 'react';
import photo from '../../../assets/images/main-photo.jpg';
import { Button } from '../../../components/Button';
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { MainTitle, MainSection, Name, Photo, Text, StyledGreeting, PhotoWrapper, ProfileInfo, StyledTypewriter } from './Main.styled';
import { theme } from "../../../styles/Theme";
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';
import { Particle } from '../../../components/particle/Particle';

export const Main = () => {

    const [hideCursor, setHideCursor] = useState(false);

    return (
        <MainSection id={'home'}>
            <Particle />
            <Container >
                <FlexWrapper align="center" justify="space-between" wrap="wrap-reverse">
                    <ProfileInfo>
                        <StyledGreeting>Hello,</StyledGreeting>
                        <Name>
                            <Text>I’m </Text>
                            <Text isColor>Margarita Taranova</Text>
                        </Name>
                        <MainTitle>
                            <p>Frontend Developer.</p>
                            <StyledTypewriter hideCursor={hideCursor}>
                                <Typewriter
                                    onInit={(typewriter) => {
                                        typewriter
                                            .typeString('Frontend Developer.')
                                            .callFunction(() => {
                                                setHideCursor(true);
                                            })
                                            .start();
                                    }}
                                    options={{
                                        autoStart: true,
                                        loop: false,
                                        delay: 50
                                    }}
                                />
                            </StyledTypewriter>
                        </MainTitle>
                        <Button
                            bgColor={`${theme.colors.primary}`}
                            borderRadius={'18px'}
                        >Download CV</Button>
                    </ProfileInfo>
                    <Tilt>
                        <PhotoWrapper>
                            <Photo src={photo}></Photo>
                        </PhotoWrapper>
                    </Tilt>
                </FlexWrapper>
            </Container>
        </MainSection >
    )
}

