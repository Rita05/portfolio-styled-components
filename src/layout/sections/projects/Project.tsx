import React from 'react'
import { isEmpty } from 'lodash';
import { ProjectIcon, ProjectTitle, ProjectItem, ProjectDescription, ProjectText, IconWrapper, ProjectInfo } from './Projects.styled'
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Button } from '../../../components/Button';

type ProjectsPropsType = {
    project: {
        icon: string,
        title: string,
        description: string,
        stack: string[];
        link: string;
    }
}

export const Project = (props: ProjectsPropsType) => {
    const { icon, title, description, stack, link } = props.project
    return (
        <ProjectItem>
            <FlexWrapper justify='space-around' direction='column'>
                <IconWrapper url={icon}>
                    <Button as='a' href={link} target="_blank">View Project</Button>
                </IconWrapper>
                <ProjectInfo>
                    <ProjectTitle>{title}</ProjectTitle>
                    <ProjectDescription>{description}</ProjectDescription>
                    {!isEmpty(stack) ? <ProjectText>{`Tech Stack: ${stack.join(', ')}`}</ProjectText> : null}
                </ProjectInfo>
            </FlexWrapper>
        </ProjectItem>
    )
}