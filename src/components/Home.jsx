import styled from "styled-components";
import { useStateContext } from '../contexts/ContextProvider';
import { useRef, useState, useEffect } from 'react';
import TouchAppIcon from '@mui/icons-material/TouchApp';

import ImageHero from "./ImageHero";

import { AnimationOnScroll } from 'react-animation-on-scroll';

const Section = styled.section`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #008080;
    background-image: linear-gradient(#008080, #fff);
`

const Container = styled.div`
    width: 95%;
    height: 100%;
    max-width: 992px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Left = styled.div`
    flex: 2;
`

const Title = styled.h1`
    font-family: 'Playfair Display', serif;
    font-size: 3.6rem;
    color: #fff;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
        font-size: 2rem;
      }
`

const Subtitle = styled.h2`
    font-size: 1.2rem;
    font-weight: 400;
    color: #fff;
    margin-bottom: 3rem;

    @media (max-width: 768px) {
        font-size: 1rem;
      }
`

const Desc = styled.p`
    font-size: 1.4rem;
    color: #fff;
    margin-bottom: 2.5rem;

    @media (max-width: 768px) {
        font-size: 1rem;
      }
`

const Button = styled.a`
    color: #fff;
    background-color: #008080;
    font-weight: 700;
    text-decoration: none;
    border: 2px solid #008080;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    display: flex;
    width: auto;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.7); 
    transition: 0.25s ease all;

    &:hover {
        color: #008080;
        border-color: #008080;
        background-color: #fff;
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
        <Section id="home" ref={ref}>
            <Container>
                <Left>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true} animatePreScroll={shouldAnimatePreScroll}>
                        <Title>DVD&nbsp;dr&nbsp;Laza&nbsp;Kostić</Title>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInUp" delay={500} animateOnce={true} animatePreScroll={shouldAnimatePreScroll}>
                        <Subtitle>Dobrovoljno Vatrogasno Društvo - Novi Sad</Subtitle>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInUp" delay={1000} animateOnce={true} animatePreScroll={shouldAnimatePreScroll}>
                        <Desc>
                            Bezbednost zajednice. Humanost. Akcija.<br /> 
                            Solidarnost. Pomoć drugima.<br />
                            Adrenalinski izazov. Služenje zajednici.<br />
                            Bezbednost zajednice. Sigurnost.<br />
                        </Desc>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInUpBig" delay={1000} animateOnce={true} animatePreScroll={shouldAnimatePreScroll}>
                        <Button href="#contact"><TouchAppIcon /> Pridruži nam se!</Button>
                    </AnimationOnScroll>
                </Left>
                <ImageHero />
            </Container>
        </Section>
    )
}

export default Home;