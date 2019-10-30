import React from 'react'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {

    return (
        <div className={s.outer}>
            <a name='header'/>
            <div className={s.container}>
                <div className={s.wrapper}>
                    <div className={s.name}>Alex</div>
                    <div className={s.nav}>
                        <div className={s.item}><a href="#main">Hello</a></div>
                        <div className={s.item}><a href="#skills">Skills</a></div>
                        <div className={s.item}><a href="#works">Works</a></div>
                        <div className={s.item}><a href="#contact">Contact me</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Header