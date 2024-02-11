import styled from 'styled-components';

type FlexWrapperPropsType = {
    direction?: string;
    justify?: string;
    align?: string;
    wrap?: string;
    gap?: string;
    padding?: string;
    margin?: string;
    maxW?: string;
    shadow?: string;
    border?: string;
    background?: string;

}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justify || 'flex-start'};
    align-items: ${props => props.align || 'stretch'};
    flex-wrap: ${props => props.wrap || 'nowrap'};
    gap: ${props => props.gap || null};
    padding: ${props => props.padding || null};
    margin: ${props => props.margin || null};
    max-width: ${props => props.maxW || null};
    box-shadow:  ${props => props.shadow || null};
    border-radius: ${props => props.border || null};
    background: ${props => props.background || null}
    height: 100%;

`