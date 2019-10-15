import React from 'react'
import Particles from 'react-particles-js';
import s from './Main.module.css'

const Main = () => {
    return (
        <div className={s.outer}>
            <div className={s.part}>
                <Particles className={s.particles}
                           params={{
                               "particles": {
                                   "number": {"value": 100, "density": {"enable": true, "value_area": 800}},
                                   "color": {"value": "#5e6570"},
                                   "shape": {
                                       "type": "circle",
                                       "stroke": {"width": 0, "color": "#000000"},
                                       "polygon": {"nb_sides": 5},
                                       "image": {"src": "img/github.svg", "width": 100, "height": 90}
                                   },
                                   "opacity": {
                                       "value": 0.5,
                                       "random": false,
                                       "anim": {"enable": false, "speed": 1, "opacity_min": 0.1, "sync": false}
                                   },
                                   "size": {
                                       "value": 3,
                                       "random": true,
                                       "anim": {"enable": false, "speed": 40, "size_min": 0.1, "sync": false}
                                   },
                                   "line_linked": {
                                       "enable": true,
                                       "distance": 150,
                                       "color": "#ffffff",
                                       "opacity": 0.4,
                                       "width": 1
                                   },
                                   "move": {
                                       "enable": true,
                                       "speed": 6,
                                       "direction": "none",
                                       "random": false,
                                       "straight": false,
                                       "out_mode": "out",
                                       "bounce": false,
                                       "attract": {"enable": false, "rotateX": 600, "rotateY": 1000}
                                   }
                               },
                               "interactivity": {
                                   "detect_on": "canvas",
                                   /*"events": {
                                       "onhover": {"enable": true, "mode": "repulse"},
                                       "onclick": {"enable": true, "mode": "push"},
                                       "resize": true
                                   },*/
                                   "modes": {
                                       "grab": {"distance": 400, "line_linked": {"opacity": 1}},
                                       "bubble": {"distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3},
                                       "repulse": {"distance": 200, "duration": 0.4},
                                       "push": {"particles_nb": 4},
                                       "remove": {"particles_nb": 2}
                                   }
                               },
                               "retina_detect": true
                           }}/>
            </div>
            <div className={s.container}>
                <div className={s.wrapper}>
                    <div className={s.left}>
                        <div className={s.name}>
                            <p>I am Alex Viarhei</p>
                        </div>
                    </div>
                    <div className={s.right}>
                        <div>
                            <div className={s.avatar}>
                                <img className={s.photo} src=""/>
                                <div className={s.frame}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Main