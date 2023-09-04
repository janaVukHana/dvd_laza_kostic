import styled from "styled-components";
import "animate.css/animate.min.css";

import { useStateContext } from '../contexts/ContextProvider';
import { useRef, useState, useEffect } from 'react'
import { AnimationOnScroll } from "react-animation-on-scroll";

const Section = styled.div`
  height: 100vh;
  background-color: #242424;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
    width: 80%;
    height: 100%;
    max-width: 992px;
    display: flex;
    justify-content: space-between;
    align-items: center;: 
`

const Left = styled.div`
  ${'' /* color: #fff; */}
  border: 1px solid red;
  flex: 3;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;
`
const Right = styled.div`
  border: 1px solid green;
  flex: 2;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const AnimateOnScroll = () => {
  const {setActive} = useStateContext();
  const ref = useRef();

  useEffect(() => {
    const id = document.getElementById('onscroll').id
    const observer = new IntersectionObserver(
      ([entry]) => {
        entry.isIntersecting && setActive(id);
      },
      {
        rootMargin: "0px",
        threshold: 0.5 // Change this threshold value as per your requirement
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

    return (
        <Section id="onscroll" ref={ref}>
          <Container>
            <Left>
                <h2>Left</h2>
                <AnimationOnScroll animateIn="animate__bounceIn">
                    <h2>Some Text</h2>
                </AnimationOnScroll>
            </Left>
            <Right>
              OnScroll
            </Right>
          </Container>
        </Section>
    )
}

export default AnimateOnScroll;