import React from 'react';
import { ContactBlock, ContactDescription, ContactDetails, ContactIcon, ContactTitle } from './Contact.styled';

type ContactPropsType = {
    contact: {
        title: string,
        icon: string,
        description: string
    }
}

export const ContactInfoItem = (props: ContactPropsType) => {
    const { title, icon, description } = props.contact
    return (
        <ContactBlock>
            <ContactIcon src={icon} />
            <ContactDetails>
                <ContactTitle>{title}</ContactTitle>
                <ContactDescription>{description}</ContactDescription>
            </ContactDetails>
        </ContactBlock>

    )
}