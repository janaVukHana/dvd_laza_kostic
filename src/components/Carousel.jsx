import styled from "styled-components";
import { useEffect, useRef } from "react";
import { useStateContext } from '../contexts/ContextProvider';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import firemanImage from '../assets/firedep/fireman.png';
import equipment from '../assets/firedep/equipment_1.png';
import equipment2 from '../assets/firedep/equipment_2.png';
import fireman6 from '../assets/firedep/fireman_6.png';
import fireman8 from '../assets/firedep/fireman_8.png';
import fireman3 from '../assets/firedep/fireman_3.png';

const Img = styled.img`
    width: auto;
    max-width: 100%;
    height: 500px;
    margin: 0 auto;

    @media (max-width: 768px) {
        height: 300px;
      }
`

const Section = styled.section`
    min-height: 100vh;
    max-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #008080;
    background-image: linear-gradient(#008080, #fff);
    // color: #fff;
    // position: relative;
    // z-index: -2;
    // padding-top: 5rem;
    // padding-bottom: 3rem;
    overflow: hidden;
`

const Container = styled.div`
    width: 95%;
    height: auto;
    margin: auto;
    max-width: 992px;
    padding: 1rem;
    // border-radius: 6px;
    // border-radius: 20% 8px 20% 8px;
    // background-color: rgba(0,128,128, 0.7);
`

const Carousel = () => {
    const { setActive } = useStateContext()
    const ref = useRef();

    useEffect(() => {
        const id = document.getElementById("carousel").id
        const observer = new IntersectionObserver(
            ([entry]) => {
                entry.isIntersecting && setActive(id);
            },
            {
                rootMargin: "0px",
                threshold: 0.5 
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <Section id='carousel' ref={ref}>
            <AnimationOnScroll animateIn="animate__fadeInRight" animateOut="animate__fadeOutRight">
                <Container>
                    {/* <Title>Carousel</Title> */}
                    <Slider {...settings}>
                        <div>
                            <Img src={firemanImage} alt="" />
                        </div>
                        <div>
                            <Img src={equipment} alt="" />
                        </div>
                        <div>
                            <Img src={equipment2} alt="" />
                        </div>
                        <div>
                            <Img src={fireman3} alt="" />
                        </div>
                        <div>
                            <Img src={fireman6} alt="" />
                        </div>
                        <div>
                            <Img src={fireman8} alt="" />
                        </div>
                        <div>
                            <h3>6</h3>
                        </div>
                    </Slider>
                </Container>
            </AnimationOnScroll>
        </Section>
    )
}

export default Carousel;


    