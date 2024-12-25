import React, { useEffect } from 'react';
import '../styles/slider.css';

const Slider = () => {
    useEffect(() => {
        let slider = document.querySelector('.slider .list');
        let items = document.querySelectorAll('.slider .list .item');
        let dots = document.querySelectorAll('.slider .dots li');

        let lengthItems = items.length - 1;
        let active = 0;

        const reloadSlider = () => {
            slider.style.transform = `translateX(-${active * 100}%)`;
            let last_active_dot = document.querySelector('.slider .dots li.active');
            last_active_dot.classList.remove('active');
            dots[active].classList.add('active');
        };

        const nextSlide = () => {
            active = active + 1 <= lengthItems ? active + 1 : 0;
            reloadSlider();
        };

        const prevSlide = () => {
            active = active - 1 >= 0 ? active - 1 : lengthItems;
            reloadSlider();
        };

        let refreshInterval = setInterval(nextSlide, 3000);

        dots.forEach((li, key) => {
            li.addEventListener('click', () => {
                active = key;
                reloadSlider();
            });
        });

        window.onresize = () => {
            reloadSlider();
        };

        return () => {
            clearInterval(refreshInterval);
        };
    }, []);

    return (
        <div className="slider">
            <div className="list">
                <div className="item">
                    <img src={require('../assets/img/Slider/Slider1.png').default} alt="Slider 1" />
                </div>
                <div className="item">
                    <img src={require('../assets/img/Slider/Slider2.jpg').default} alt="Slider 2" />
                </div>
                <div className="item">
                    <img src={require('../assets/img/Slider/Slider3.jpg').default} alt="Slider 3" />
                </div>
                <div className="item">
                    <img src={require('../assets/img/Slider/Slider4.jpg').default} alt="Slider 4" />
                </div>
                <div className="item">
                    <img src={require('../assets/img/Slider/Slider5.jpg').default} alt="Slider 5" />
                </div>
            </div>
            <ul className="dots">
                <li className="active"></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    );
};

export default Slider;