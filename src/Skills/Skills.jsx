import React from 'react'
import s from './Skills.module.css'
import Title from "../common/Title/Title";

const Skills = () => {
    return (
        <div id='skills' className={s.outer}>
            <div className={s.container}>
                <div className={s.wrapper}>
                    <Title title='Skills'/>
                    <div className={s.skills}>
                        <div className={s.skill}>
                            <div className={s.icon}>
                                <img src="https://sap.github.io/ui5-webcomponents/images/react.svg" />
                            </div>
                            <div className={s.title}>React</div>
                            <div className={s.subtitle}>

                            </div>
                        </div>
                        <div className={s.skill}>
                            <div className={s.icon}>
                                <img src="https://miro.medium.com/max/1400/0*U2DmhXYumRyXH6X1.png" alt=""/>
                            </div>
                            <div className={s.title}>Redux</div>
                            <div className={s.subtitle}>

                            </div>
                        </div>
                        <div className={s.skill}>
                            <div className={s.icon}>
                                <img src="https://camo.githubusercontent.com/5e511d0a0f2dcd66a843017402001844861979a4/68747470733a2f2f64323169693931693379366f36682e636c6f756466726f6e742e6e65742f67616c6c6572795f696d616765732f66726f6d5f70726f6f662f31303037342f6c617267652f313435353731343038312f747970657363726970742e706e67" alt=""/>
                            </div>
                            <div className={s.title}>Type Script</div>
                            <div className={s.subtitle}>

                            </div>
                        </div>
                        <div className={s.skill}>
                            <div className={s.icon}>
                                <img src="https://icon-library.net/images/html-5-icon/html-5-icon-9.jpg" alt=""/>
                            </div>
                            <div className={s.title}>HTML</div>
                            <div className={s.subtitle}>

                            </div>
                        </div>
                        <div className={s.skill}>
                            <div className={s.icon}>
                                <img src="https://cdn4.iconfinder.com/data/icons/iconsimple-programming/512/css-512.png" alt=""/>
                            </div>
                            <div className={s.title}>CSS</div>
                            <div className={s.subtitle}>

                            </div>
                        </div>
                        <div className={s.skill}>
                            <div className={s.icon}>
                                <img src="https://icon-library.net/images/js-icon/js-icon-24.jpg" alt=""/>
                            </div>
                            <div className={s.title}>Js</div>
                            <div className={s.subtitle}>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Skills