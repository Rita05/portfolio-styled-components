import React from 'react';
import { Item, Name, Specialization, StyledDate } from './NavTabsContent.styled';

export interface EducationContentProps {
    name?: string;
    company: string;
    specialization?: string;
    date: string;
};

interface EducationProps {
    content: EducationContentProps[]
}

export const Education: React.FC<EducationProps> = ({ content }) => {
    return (
        <>
            {content.map((exp, index) => (
                <Item key={index}>
                    <Name>{exp.company}</Name>
                    <Specialization>{exp.specialization}</Specialization>
                    <StyledDate>{exp.date}</StyledDate>
                </Item>
            ))}
        </>
    );
};