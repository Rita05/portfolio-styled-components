import React from 'react';
import { ProjectWrapper, ProjectsSection } from './Projects.styled';
import { SectionTitle } from '../../../components/SectionTitle';
import { Project } from './Project';
import { Container } from '../../../components/Container';
import { projects } from './projectsData';

export const Projects = () => {

    return (
        <ProjectsSection id={'projects'}>
            <Container>
                <SectionTitle>My Projects</SectionTitle>
                <ProjectWrapper>
                    {projects.map((project, index) => {
                        return <Project key={index} project={project} />
                    })}
                </ProjectWrapper>
            </Container>
        </ProjectsSection>
    )
}

