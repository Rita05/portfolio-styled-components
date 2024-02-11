import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { font } from "../../../styles/Common";
import { theme } from "../../../styles/Theme";
import { Photo, PhotoWrapper } from '../main/Main.styled';



export const AboutSection = styled.section`
    @media ${theme.media.mediumDesktop}{
        ${FlexWrapper} {
            flex-wrap: wrap;
            justify-content: center;
            gap: unset;
        }
    }
`
export const AboutPhotoWrapper = styled(PhotoWrapper)`
    top: 32px;

    &::before {
        width: 361px;
        height: 452px;

        @media ${theme.media.mobile} {
            width: 281px;
            height: 352px;
        }
    }
`
export const AboutPhoto = styled(Photo)`
    width: 361px;
    height: 452px;

    @media ${theme.media.mobile} {
        width: 281px;
        height: 352px;
    }
`
export const AboutContent = styled.div`
    @media ${theme.media.mediumDesktop}{
        flex: 0 1 490px;
        margin-top: 86px;
    }
`
export const AboutTitle = styled.h2`
    ${font({ family: 'Nunito', weight: 700, Fmax: 48, Fmin: 28 })};
    color: ${theme.colors.font};
    text-transform: capitalize;

    @media ${theme.media.mediumDesktop} {
        text-align: center;
        margin-top: 47px;
    }
`
export const AboutDescription = styled.p`
    ${font({ family: 'Nunito Sans', weight: 400, Fmax: 22, Fmin: 18 })};
    color: ${theme.colors.font};
    letter-spacing: 1.44px;
    margin: 16px 0 48px;
    text-align: justify;
`
