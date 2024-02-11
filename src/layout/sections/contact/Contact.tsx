import React, { useRef, ElementRef } from 'react';
import { Button } from '../../../components/Button';
import { Container } from '../../../components/Container';
import { SectionTitle } from '../../../components/SectionTitle';
import { ContactInfo, Field, FieldGroup, Label, ContactSection, StyledForm } from './Contact.styled';
import { ContactInfoItem } from './ContactInfoItem';
import { contacts } from './ContactData';
import { FlexWrapper } from '../../../components/FlexWrapper';
import emailjs from '@emailjs/browser';

export const Contacts = () => {

    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) {
            return;
        }

        emailjs.sendForm('service_qrhaoct', 'template_j2912ok', form.current, 'KDwavp_5U4hMF4XWV')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.currentTarget.reset();
    };


    return (
        <ContactSection id='contact'>
            <Container>
                <SectionTitle>Get in Touch</SectionTitle>
                <FlexWrapper
                    align-items='center'
                    gap='151px'
                    padding='53px 30px 46px'
                    margin='0 auto'
                    border='20px'
                >
                    <StyledForm ref={form} onSubmit={sendEmail}>
                        <FieldGroup>
                            <Label htmlFor='email'>Your Email Address</Label>
                            <Field required aria-label='email' placeholder='something@website.com' type='text' name={'email'} />
                        </FieldGroup>
                        <FieldGroup>
                            <Label htmlFor='subject'>Subject</Label>
                            <Field required placeholder='Question about your article' type='text' name={'subject'} />
                        </FieldGroup>
                        <Field as={"textarea"} required placeholder='Your message starts with…' name={'message'} />
                        <Button type={'submit'}>Send</Button>
                    </StyledForm>
                    <ContactInfo>
                        {contacts.map((contact, index) => {
                            return <ContactInfoItem key={index} contact={contact} />
                        })}
                    </ContactInfo>
                </FlexWrapper>
            </Container>
        </ContactSection >
    )
}