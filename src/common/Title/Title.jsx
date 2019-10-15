import React from 'react'
import s from './Title.module.css'


const Title = ({title}) => {
    return (
        <div>
            <div className={s.text}>{title}</div>
            <div className={s.line}></div>
        </div>
    )
};

export default Title