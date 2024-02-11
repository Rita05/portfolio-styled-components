import styled from 'styled-components';
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { theme } from '../../../styles/Theme';

export const SkillsSection = styled.section`

    @media ${theme.media.largeDesktop} {
        ${Container} > ${FlexWrapper} {
            justify-content: space-between;
        }
    }

    @media ${theme.media.mediumDesktop} {
        ${Container} > ${FlexWrapper} {
            justify-content: center;
        }
    }

    @media screen and (max-width: 491px) {
        ${Container} > ${FlexWrapper} {
            position: relative;
            overflow: auto;
            column-gap: 0;
            flex-wrap: nowrap;
            justify-content: flex-start;
        }
    }
`

export const SkillItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 231px;
    padding: 50px 0 20px;

    @media ${theme.media.mediumDesktop} {
        width: 330px;
        max-width: 540px;
    }

    @media screen and (max-width: 722px) {
        flex-grow: 1;
        width: 231px;
    }

    @media screen and (max-width: 491px) {
        flex: 0 0 50%;
        min-height: 200px;
    }
`

export const SkillIcon = styled.img`    
    width: 50px;
    height: 50px;
    object-fit: cover;
`

export const SkillTitle = styled.h3`
    font-family: Nunito;
    font-weight: 600;
    line-height: 30px;
    text-transform: capitalize;
    font-size: 19px;
    margin-top: 50px;
`

export const IconWrapper = styled.div`
    position: relative;

    &::before {
        position: absolute;
        left: 50%;
        top: 50%;
        transform-origin: top left;
        content: "";
        display: inline-block;
        width: 80px;
        height: 80px;
        transform: rotate(45deg) translate(-50%,-50%);
        background: #8773ee42;
        box-shadow: 0px 6.734px 10.101px 0px rgba(0, 0, 0, 0.15);
    }
`