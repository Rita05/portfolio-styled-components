import styled from 'styled-components';
import { Button } from '../../../components/Button';
import { theme } from '../../../styles/Theme';

export const ProjectsSection = styled.section`

`
export const ProjectWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(330px, 490px));
    justify-content: center;
    gap: 50px;

    @media ${theme.media.mediumDesktop} {
        grid-template-columns: repeat(1, minmax(330px, 490px));
    }
`
export const ProjectItem = styled.div`
    position: relative;
    border-radius: 20px;
    box-shadow: 5px 5px 15px #d1d9e6, -5px -5px 15px #fff;
    padding: 25px 20px;

    &::before {
        position: absolute;
        content: '';
        border-bottom: 2px solid ${theme.colors.secondary};
        border-left: 2px solid ${theme.colors.secondary};
        border-bottom-left-radius: 20px;
        bottom: 0;
        height: 15%;
        left: 0;
        width: 10%;
        transition: all .4s;
    }

    &::after {
        position: absolute;
        content: '';
        border-right: 2px solid ${theme.colors.secondary};
        border-top: 2px solid ${theme.colors.secondary};
        border-top-right-radius: 20px;
        height: 15%;
        right: 0;
        top: 0;
        width: 10%;
        transition: all .4s;
    }
`

export const IconWrapper = styled.div<{ url: string }>`
    position: relative;
    cursor: pointer;
    width: 100%;
    height: 260px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${props => props.url});

    &:hover{
        &::before {
            position: absolute;
            content: "";
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: linear-gradient( to top, #230ed4, rgba(0, 0, 0, 0) 60%, rgb(192 189 226 / 38%) 100% );
            opacity: 0.5;
            border-radius: 20px 20px 0 0;
            backdrop-filter: blur(4px);
        }
        ${Button} {
            opacity: 1;
        }
    }

    ${Button} {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        border-radius: 18px;
        background-color: ${theme.colors.primary};
        transform: translate(-50%, -50%);
        color: ${theme.colors.font};
        font-weight: 700;
    }

`

export const ProjectIcon = styled.img`    
    width: 100%;
    height: 360px;
    padding: 25px 20px 0;

    @media ${theme.media.mediumDesktop} {
        height: 100%;
        min-height: 260px;
        object-fit: cover;
    }
`

export const ProjectInfo = styled.div`
    padding-top: 25px;
`

export const ProjectTitle = styled.h3`
    font-family: Nunito;
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    text-transform: capitalize;

    @media ${theme.media.mediumDesktop} {
        font-size: 20px;
    }
`
export const ProjectDescription = styled.p`
    font-family: Nunito Sans;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.44px;
    margin: 14px 0 19px;

    @media ${theme.media.mediumDesktop} {
        font-size: 17px;
    }
`
export const ProjectText = styled.p`
    font-family: Nunito Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;

    @media ${theme.media.mediumDesktop} {
        font-size: 14px;
    }
`
