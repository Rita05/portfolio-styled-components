import React, { useState } from 'react';
import { Item, Name, Specialization, StyledDate } from './NavTabsContent.styled';

export interface ExperienceContentProps {
    position: string;
    company: string;
    specialization: string;
    date: string;
};
export interface ExperienceProps {
    content: ExperienceContentProps[];
}

export const Experience: React.FC<ExperienceProps> = ({ content }) => {
    return (
        <>
            {content.map((exp, index) => (
                <Item key={index}>
                    <Name>{exp.position} - {exp.company}</Name>
                    <Specialization>{exp.specialization}</Specialization>
                    <StyledDate>{exp.date}</StyledDate>
                </Item>
            ))}
        </>
    );
};

