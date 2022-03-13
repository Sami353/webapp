// import { ScatterPlot } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
// import Dots from './Dots';
// import { sliderImages } from "../../dummyData";
import "./login.css";
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

function ImageSlider() {
    const images = [
        "https://th.bing.com/th/id/R.2510937162c679a068a9b349159f4a4b?rik=LS3sa211B9fk9A&pid=ImgRaw&r=0",
        "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/07/running_at_sunset-1296x728-header.jpg?w=1155&h=1528",
        "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2013/09/inexpensiveExercise-1277759983-770x533-1.jpg"
    ];

    const [current, setCurrent] = useState(0)
    // const length = slides.length

    const nextSlide = () => {
        //     setCurrent(current === length - 1 ? 0 : current + 1);
        setCurrent((i) => (i + 1) % images.length);
    }

    const prevSlide = () => {
        //     setCurrent(current === 0 ? length - 1 : current - 1);
        setCurrent((i) => (i - 1) % images.length);
    }

    // if (!Array.isArray(slides) || slides.length <= 0) {
        // return null;
    // }
    // const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 3000);
        return () => {
            clearInterval(timer);
        };
    }, [nextSlide]);

    return (
        <section className='slider'>
            {/* <button onClick={prev}>&lt;</button> */}
                <img src={images[current]} alt=""
                    className='logInBanner' />
            {/* <button onClick={next}>&gt;</button> */}
            {/* <Dots/> */}
        </section>
    );

    // return (
    //     <section className='slider'>
    //         <FaArrowAltCircleLeft className='leftArrow' onClick={prevSlide} />
    //         <FaArrowAltCircleRight className='rightArrow' onClick={nextSlide} />
    //         {sliderImages.map((slide, index) => {
    //             return (
    //                 <div className={index === current ? 'slideActive' : 'slide'} key={index}>
    //                     {index === current && (
    //                         <img className='logInBanner' src={slide.image} alt="healthfix" />
    //                     )}
    //                 </div>
    //             )
    //         })}
    //     </section>
    // )
}

export default ImageSlider
