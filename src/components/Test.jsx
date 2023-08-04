import styled from "styled-components";
import { useState, useEffect } from "react";

import { AnimationOnScroll } from 'react-animation-on-scroll';


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const Container = styled.div`
    width: 80%;
    height: 100%;
    max-width: 992px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Left = styled.div`
    flex: 2;
`

const Title = styled.h1`
    font-size: 3rem;
    color: #000;
`

const Subtitle = styled.h2`
    font-size: 1.2rem;
    font-weight: 400;
    color: #333;
    margin-bottom: 3rem;
`

const Desc = styled.p`
    font-size: 2.2rem;
    color: #333;
    margin-bottom: 2.5rem;
`

const Button = styled.button`
    border: 2px solid #008080;
    border-radius: 5px;
    color: #fff;
    background-color: #008080;
    cursor: pointer;
    padding: 0.5rem 1rem;
    transition: 0.25s ease all;

    &:hover {
        border-color: #008080;
        color: #008080;
        background-color: #fff;
    }
`

const Right = styled.div`
    flex: 3;
    position: relative;
    height: 100%;
`

const Img = styled.img`
    width: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
`

const Test = () => {
    const [shouldAnimatePreScroll, setShouldAnimatePreScroll] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShouldAnimatePreScroll(true);
        }, 1);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimationOnScroll animateIn="animate__fadeInLeftBig" animatePreScroll={shouldAnimatePreScroll}>
            <h5>Look me too.</h5>
        </AnimationOnScroll>
                        
    )
}

export default Test;