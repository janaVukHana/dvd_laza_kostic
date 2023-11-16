import styled from "styled-components";
import { useStateContext } from '../contexts/ContextProvider';
import { useRef, useState, useEffect } from 'react';

import { AnimationOnScroll } from 'react-animation-on-scroll';

const Container = styled.div`
    width: 95%;
    height: 100%;
    max-width: 992px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @media(max-width: 600px) {
        padding-top: 6rem;
        flex-direction: column;
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
    const [shouldAnimatePreScroll, setShouldAnimatePreScroll] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShouldAnimatePreScroll(true);
        }, 1);

        return () => clearTimeout(timer);
    }, []);

    const { setActive } = useStateContext();
    const ref = useRef();

    useEffect(() => {
        const id = document.getElementById('home').id;
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
                    <img src="img/dvd/hero.jpeg" />
                </AnimationOnScroll>
                </Right>
            </Container>
        </section>
    )
}

export default Home;