import React from 'react'
import { SkillIcon, SkillTitle, SkillItem, IconWrapper } from './Skills.styled'
import { FlexWrapper } from '../../../components/FlexWrapper';

type SkillPropsType = {
    skill: {
        icon: string,
        title: string,
    }
}

export const Skill = (props: SkillPropsType) => {
    const { icon, title } = props.skill
    return (
        <SkillItem>
            <FlexWrapper direction='column' align='center'>
                <IconWrapper>
                    <SkillIcon src={icon} />
                </IconWrapper>
                <SkillTitle>{title}</SkillTitle>
            </FlexWrapper>
        </SkillItem>
    )
}
