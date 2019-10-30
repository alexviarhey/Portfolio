import React from 'react'
import s from './Works.module.css'
import Title from "../common/Title/Title";

const Works = () => {
    const work = [{item: 'one', href: 'https://alexviarhey.github.io/ToDoList/'},{item:'two', href: 'https://alexviarhey.github.io/calculator/'},
        {item: 'three', href:'https://alexviarhey.github.io/counter/'}, {item: 'four'}, {item: 'five'}, {item: 'six'}];
    return (
        <div id='works' className={s.outer}>
            <div className={s.container}>
                <div className={s.wrapper}>
                    <Title title='Works'/>
                    <div className={s.works}>
                        {work.map(i => (
                            <div key={i} className={s.work + ' ' + s[i.item]}>
                                <div className={s.workInfo}><a href={i.href}>See</a></div>
                                <div className={s.blur}></div>
                            </div>))}
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Works