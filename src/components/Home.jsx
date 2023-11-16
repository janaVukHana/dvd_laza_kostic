import styled from "styled-components";
import { useStateContext } from '../contexts/ContextProvider';
import { useRef } from 'react';

import { containerStyles } from "../sharedStyles";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import usePageLoadAnimation from "../helpers/usePageLoadAnimation";
import useIntersectionObserver from "../helpers/useIntersectionObserver";

const Container = styled.div`
    ${containerStyles}

    @media(max-width: 600px) {
        padding-top: 6rem;
    }
`

const Left = styled.div`
    flex: 1;
    overflow: hidden;
`
const Right = styled.div`
    flex: 1;
    overflow: hidden;
`

const Desc = styled.p`
    font-size: 2.8rem;
    font-weight: 700;
    color: #be3144;
    margin-bottom: 2.5rem;

    @media (max-width: 992px) {
        font-size: 2.1rem;
      }

    @media(max-width: 768px) {
        font-size: 1.8rem;
    }
`

const Home = () => {
    // Fixing on page load animation
    const shouldAnimatePreScroll = usePageLoadAnimation();

    const { setActive } = useStateContext();
    const ref = useRef();
    const sectionId = 'home';

    useIntersectionObserver(ref, sectionId, setActive)

    return (
        <section ref={ref} id="home">
            <Container>
                <Left>
                    <AnimationOnScroll animateIn="animate__fadeInUp" delay={1000} animateOnce={true} animatePreScroll={shouldAnimatePreScroll}>
                        <Desc>
                            Prevencija, sprečavanje i saniranje posledica požara, poplava i drugih vanrednih situacija.
                        </Desc>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInUpBig" delay={1000} animateOnce={true} animatePreScroll={shouldAnimatePreScroll}>
                        <a className="btn" href="https://vsgns.rs/postani-vatrogasac" target="_blank">
                             POSTANI DOBROVOLJNI VATROGASAC
                        </a>
                    </AnimationOnScroll>
                </Left>
                <Right>
                <AnimationOnScroll animateIn="animate__fadeInUp" delay={1000} animateOnce={true} animatePreScroll={shouldAnimatePreScroll}>
                    <img src="img/dvd/hero.jpeg" alt="firefighters" loading="lazy" />
                </AnimationOnScroll>
                </Right>
            </Container>
        </section>
    )
}

export default Home;