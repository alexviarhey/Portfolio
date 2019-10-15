import React from 'react'
import s from './Works.module.css'
import Title from "../common/Title/Title";

const Works = () => {
    const work = ['one','two','three','four','five','six'];
    return (
        <div className={s.outer}>
            <div className={s.container}>
                <div className={s.wrapper}>
                    <Title title='Works'/>
                    <div className={s.works}>
                        {work.map(i => (
                            <div key={i} className={s.work + ' ' + s[i]}>
                                <div className={s.workInfo}>See</div>
                                <div className={s.blur}></div>
                            </div>))}
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Works