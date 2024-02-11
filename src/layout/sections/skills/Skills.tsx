import React from 'react';
import { SkillsSection } from './Skills.styled';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Skill } from './Skill';
import { skills } from './skillsData';
import { Container } from '../../../components/Container';

export const Skills = () => {
    return (
        <SkillsSection id={'skills'}>
            <Container>
                <SectionTitle>My skills</SectionTitle>
                <FlexWrapper wrap='wrap'>
                    {
                        skills.map((skill, index) => {
                            return <Skill key={index} skill={skill} />
                        })
                    }
                </FlexWrapper>
            </Container>
        </SkillsSection>
    )
}

