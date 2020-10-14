import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from 'react-bootstrap';
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-3.png';
import carousel4 from '../../../images/carousel-4.png';
import carousel5 from '../../../images/carousel-5.png';




const Work = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <section className="mt-5 mb-5" style={{backgroundColor: "#111430", height: "600px"}}>
            <h2 className="pt-5" style={{color: "white", textAlign: "center"}}>Here are some of <span style={{color: "olivedrab"}}>our works</span></h2>
            <Carousel className="mx-auto mt-5" style={{height: "350px", width: "50%"}}>
                <Carousel.Item>
                    <img className="d-block w-100" style={{height: "350px", width: "50%"}} src={carousel1}alt="First slide"/>
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" style={{height: "350px", width: "50%"}} src={carousel2} alt="second slide"/> 
                </Carousel.Item>
                {/* <Carousel.Item>
                    <img className="d-block w-100" src={carousel3} alt="third slide"/>
                </Carousel.Item> */}
                <Carousel.Item>
                    <img className="d-block w-100" style={{height: "350px", width: "50%"}} src={carousel4} alt="fourth slide"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" style={{height: "350px", width: "50%"}} src={carousel5} alt="Fifth slide"/>
                </Carousel.Item>
            </Carousel>

        </section>
        
    );
};

export default Work;