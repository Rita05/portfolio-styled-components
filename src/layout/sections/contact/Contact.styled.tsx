import styled from 'styled-components';
import { Button } from '../../../components/Button';
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { theme } from '../../../styles/Theme';

export const ContactSection = styled.section`
    @media only screen and (max-width: 1280px) {
        ${Container} > ${FlexWrapper} {
            max-width: 900px;
            padding: 53px 0 46px;
        }
    }

    @media ${theme.media.mediumDesktop} {
        ${Container} > ${FlexWrapper} {
            flex-wrap: wrap;
            flex-direction: column;
            align-items: center;
            gap: 80px;
        }
    }
`

export const Field = styled.input`
    width: 100%;
    margin-top: 7px;
    border: 1px solid #dadada;
    background: #FFF;
    padding: 13px 14px;
    border-radius: 3px;
    font-family: Nunito Sans, sans-serif;
    font-size: 16px;
    font-weight: 400;

    &::placeholder {
        opacity: 0.6;
        color: #071A58; 
    }
     &:focus-visible{
        outline: 1px solid #dadada;
     }
`
export const StyledForm = styled.form`
    max-width: 524px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 33px;

    ${Button} {
        opacity: 1;
        background-color: ${theme.colors.primary};
        border-radius: 18px;
    }

    textarea {
        resize: none;
        height: 176px;
    }

    div:nth-child(2) ${Field}::placeholder {
        opacity: 1;
    }

    @media only screen and (max-width: 1280px) {
        max-width: 450px;
    }

`
export const FieldGroup = styled.div`
    width: 100%;
`

export const Label = styled.label`
    align-self: flex-start;
    color: #27186a;
    font-family: Nunito Sans;
    font-size: 18px;
    font-weight: 400;
`

export const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 36px;
    max-width: 514px;

    @media only screen and (max-width: 1280px) {
        max-width: 299px;
    }

    @media ${theme.media.mediumDesktop} {
        max-width: 450px;
        width: 100%;
    }
`

export const ContactBlock = styled.div`
    display: flex;
    gap: 26px;
`
export const ContactIcon = styled.img`
    width: 38px;
    height: 38px;
`
export const ContactDetails = styled.div`
    display: flex;
    flex-direction: column;
`

export const ContactTitle = styled.span`
    font-family: Nunito Sans;
    font-size: 18px;
    font-weight: 700;
`
export const ContactDescription = styled.span`
    font-family: Nunito;
    font-size: 16px;
    font-weight: 500;
`