import React from 'react'
import s from './Header.module.css'

const Header = () => {
    return (
        <div className={s.outer}>
            <div className={s.container}>
                <div className={s.wrapper}>
                    <div className={s.name}>Alex</div>
                    <div className={s.nav}>
                        <div className={s.item}><a href="#">Hello</a></div>
                        <div className={s.item}><a href="#">Skills</a></div>
                        <div className={s.item}><a href="#">Education</a></div>
                        <div className={s.item}><a href="#">Works</a></div>
                        <div className={s.item}><a href="#">Contact me</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Header