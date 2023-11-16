import styled from "styled-components";
import { useStateContext } from '../contexts/ContextProvider';
import React, { useState, useRef, useEffect } from 'react';

import { AnimationOnScroll } from 'react-animation-on-scroll';

const Container = styled.div`
    width: 95%;
    height: auto;
    max-width: 992px;
    padding: 3rem 0;
`

const TeamContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media(max-width: 600px) {
        flex-direction: column;
        gap: 2rem;
    }
`

const Figure = styled.figure`
    flex: 1;
    max-width: 300px;
    padding: 0.5rem;
`

const Img = styled.img`
    max-height: 200px;
    border-radius: 5px;
`

const FigCaption = styled.figcaption`
    color: #fff;
    line-height: 1.6rem;
    padding-top: 1.2rem;
`

const Span = styled.span`
    display: block;
    margin-top: 1rem;
    font-weight: 700;
    color: #fff;
`

const OurTeam = () => {
    const { setActive } = useStateContext();
    const ref = useRef();
    
    // Fixing on page load animation
    const [shouldAnimatePreScroll, setShouldAnimatePreScroll] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShouldAnimatePreScroll(true);
        }, 1);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const id = document.getElementById('ourteam').id;
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
    <section ref={ref} id="ourteam" style={{backgroundColor: 'var(--primary-red)'}}>
      <Container>
        <h2 style={{color: '#fff'}}>Naš tim</h2>
        <TeamContainer>
            <AnimationOnScroll animateIn="animate__fadeInUp" delay={1} animateOnce={true} animatePreScroll={shouldAnimatePreScroll}>
                <Figure>
                    <Img src='img/dvd/darko.png' alt='member' />
                    <FigCaption>
                        "Poštovanje koje vatrogasci zaslužuju proizilazi iz svesti o riziku koji oni prihvataju 
                        u borbi sa požarima i njihovoj spremnosti da izgube svoj život spasavajući živote drugih."
                        
                        <Span>- Darko Jocić, predsednik</Span>
                    </FigCaption>
                </Figure>
                </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp" delay={500} animateOnce={true} animatePreScroll={shouldAnimatePreScroll}>
                <Figure>
                    <Img src='img/dvd/zeljko.png' alt='member' />
                    <FigCaption>
                        “Dobrovoljno vatrogastvo sebično koristim kako bih ostvario svoju potrebu da pomognem drugima.”

                        <Span>- Dr Željko Vuković, potpredsednik</Span>
                    </FigCaption>
                </Figure>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp" delay={1000} animateOnce={true} animatePreScroll={shouldAnimatePreScroll}>
                <Figure>
                    <Img src='img/dvd/radica.jpg' alt='member' />
                    <FigCaption>
                        “S obzirom na to da ceo svoj život živim sa vatrogascem, za mene je vatrogastvo način života, zanimanje i 
                        velika strast.”

                        <Span>- Radica Milovac, sekretar</Span>
                    </FigCaption>
                </Figure>
            </AnimationOnScroll>
        </TeamContainer>
      </Container>
    </section>
  );
}

export default OurTeam;
