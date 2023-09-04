import styled, {keyframes} from "styled-components";
import { useStateContext } from '../contexts/ContextProvider';
import { useRef, useState, useEffect } from 'react'

import { swing, tada, wobble, zoomIn } from 'react-animations'

// Test Animations
const test = keyframes`${swing}`;

const AnimationDiv = styled.div`
  background-color: #fff;
  padding: 0.5rem;
  animation: ${test} 2s linear;
`;

// Bounce
// const bounceAnimation = keyframes`${bounce}`;

// const BouncyDiv = styled.div`
//   background-color: #fff;
//   padding: 0.5rem;
//   animation: ${bounceAnimation} 1s linear 2s infinite;
// `;

const Section = styled.div`
  height: 100vh;
  background-color: yellow;
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
  align-items: center;
`

const Left = styled.div`
  border: 1px solid red;
  flex: 3;
  height: 100%;
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

const Animations = () => {
  const {active, setActive} = useStateContext();
  const ref = useRef();

  useEffect(() => {
    const id = document.getElementById('animations').id
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
        <Section id="animations" ref={ref}>
          <Container>
            <Left>
                    {active === 'animations' && <AnimationDiv>Fade In Down Big</AnimationDiv>}
                    {/* <FadeInDownDiv>Fade In Down</FadeInDownDiv>
                    <BouncyInLeftDiv>Bounce In Left</BouncyInLeftDiv>
                    <BouncyDiv>Bounce</BouncyDiv>
                    <BouncyOutDiv>BounceOut</BouncyOutDiv>
                    <BouncyInDiv>Bounce In</BouncyInDiv>
                    <BouncyOutLeftDiv>Bounce Out Left</BouncyOutLeftDiv> */}
            </Left>
            <Right>
              Right
            </Right>
          </Container>
        </Section>
    )
}

export default Animations;