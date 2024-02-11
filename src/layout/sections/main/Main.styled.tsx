import styled from 'styled-components';
import TrianglePhoto from '../../../assets/images/triangle-header.png'
import { FlexWrapper } from '../../../components/FlexWrapper';
import { font } from '../../../styles/Common';
import { theme } from '../../../styles/Theme';

export const MainSection = styled.section`
    display: flex;
    padding-top: 100px;
    min-height: 100vh;
    background-color: ${theme.colors.mainSection};

    @media ${theme.media.mediumDesktop} {
        ${FlexWrapper} {
            justify-content: center;
            flex-direction: column-reverse;
        }
    }

`

export const ProfileInfo = styled.div`

    @media ${theme.media.mediumDesktop} {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 87px;
    }
`

export const MainTitle = styled.h1`
    ${font({ family: 'Nunito Sans', weight: 700, Fmax: 24, Fmin: 18 })};
    color: ${theme.colors.font};
    letter-spacing: 1.44px;
    margin-bottom: 16px;

    p {
        display: none;
    }
`
export const StyledTypewriter = styled.div <{ hideCursor?: boolean }>`
    .Typewriter__cursor {
        display: ${(props) => (props.hideCursor ? 'none' : 'inline')};
    }
`

export const StyledGreeting = styled.span`
    color: #000;
    font-family: Nunito Sans;
    font-size: 28px;
    font-weight: 400;
    margin-top: 40px;

    @media ${theme.media.mobile} {
        margin-top: 20px;
    }
`

export const Name = styled.h2`
    ${font({ family: 'Nunito', weight: 700, Fmax: 50, Fmin: 32 })};
    color: ${theme.colors.font};
    text-transform: capitalize;
    margin: 10px 0;
    white-space: nowrap;

    @media ${theme.media.mobile} {
        margin-top: 8px 0;
    }
`

export const Text = styled.span<{ isColor?: boolean }>`
    color: ${({ isColor }) => (isColor ? `${theme.colors.primary}` : `${theme.colors.font}`)};
`

export const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;

    &::before {
        content: "";
        position: absolute;
        z-index: -1;
        width: 432px;
        height: 541px;
        bottom: -52px;
        left: 52px;
        border: 15px solid ${theme.colors.secondary};
        border-radius: 20px;
        border-style: double;

        @media ${theme.media.mediumDesktop} {
            width: 361px;
            height: 452px;
        }

        @media ${theme.media.mobile} {
            width: 281px;
            height: 352px;
            bottom: -30px;
            left: 30px;
        }
    }
`

export const Photo = styled.img`
    width: 432px;
    height: 541px;
    position: relative;
    object-fit: cover;
    border-radius: 20px;
    margin-right: 55px;

    @media ${theme.media.mediumDesktop} {
        width: 361px;
        height: 452px;
    }

    @media ${theme.media.mobile} {
        width: 281px;
        height: 352px;
    }
`

export const TriangleImg = styled.img`
    background-image: url(${TrianglePhoto});
    background-repeat: no-repeat;
    background-position: bottom right;
    width: 621px;
    height: 692px;
`;