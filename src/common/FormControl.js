import React from 'react';
import {Field} from "redux-form";
import s from './FormControl.module.css'

export const Textarea = ({input, placeholder}) => {
    return (
        <div>
            <textarea className={s.textarea} {...input} placeholder={placeholder} />
        </div>
    )
};


export const Input = ({input, placeholder}) => {
    return (
        <div>
            <input autoComplete='off'  className={s.input} {...input} placeholder={placeholder}/>
        </div>
    )
};

export const fieldCreator = (name, placeholder, validate, component, props={}, text='') => {
    return (
        <div>
            <Field name={name} placeholder={placeholder} validate={validate} component={component}
                   {...props} />{text}
        </div>
    )
};