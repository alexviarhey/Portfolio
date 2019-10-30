import React from 'react'
import s from './Contacts.module.css'
import {reduxForm} from "redux-form";
import {fieldCreator, Input, Textarea} from "../common/FormControl";
import Title from "../common/Title/Title";

const ContactForm = ({handleSubmit}) => {
    return (
        <div id='contact' className={s.outer}>
            <div className={s.container}>
                <Title title='Contacts'/>
                <form className={s.form} onSubmit={handleSubmit}>
                        {fieldCreator('name', 'Name', [], Input)}
                        {fieldCreator('email', 'E-mail', [], Input)}
                        {fieldCreator('message', 'Your message', [], Textarea)}
                        <div>
                            <button className={s.button}>Send Message</button>
                        </div>
                </form>
            </div>
        </div>

    )
};

const ContactReduxForm = reduxForm({form: 'contactForm'})(ContactForm);
export default ContactReduxForm