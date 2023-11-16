import styled from "styled-components";
import { useStateContext } from '../contexts/ContextProvider';
import { useRef } from 'react';

import { AnimationOnScroll } from 'react-animation-on-scroll';
import usePageLoadAnimation from "../helpers/usePageLoadAnimation";
import useIntersectionObserver from "../helpers/useIntersectionObserver";

const Container = styled.div`
    width: 95%;
    height: auto;
    max-width: 992px;
    color: #fff;
`

const ImageContainer = styled.div`
    width: 300px;
    height: 500px;
    float: left;
    margin-right: 2rem;

    @media(max-width: 600px) {
        width: 130px;
        height: 200px;
    }
`


const AboutUs = () => {
    const { setActive } = useStateContext();
    const ref = useRef();
    const sectionId = 'aboutUs'
    
    // Fixing on page load animation
    const shouldAnimatePreScroll = usePageLoadAnimation()

    useIntersectionObserver(ref, sectionId, setActive)

  return (
    <section ref={ref} id="aboutUs" style={{backgroundColor: 'var(--primary-red)'}}>
      <Container>
        <AnimationOnScroll animateIn="animate__fadeInUp" delay={1} animateOnce={true} animatePreScroll={shouldAnimatePreScroll}>
            <ImageContainer>
                <img src="img/dvd/laza-kostic.jpg" alt="dr Laza Kostic" loading="lazy" />
            </ImageContainer>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInUp" delay={1} animateOnce={true} animatePreScroll={shouldAnimatePreScroll}>
            <p style={{fontWeight: 700}}>
                Dobrovoljno vatrogasno društvo "Dr Laza Kostić" osnovano je davne 1872. godine. 
                Prvi predsednik DVD-a je bio tadašnji gradonačelnik Novog sada Pavle Močvanski (1821.-1914.).
            </p>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInUp" delay={500} animateOnce={true} animatePreScroll={shouldAnimatePreScroll}>
            <p>
                U istoriji grada, dobrovoljna vatrogasna društva dala su izuzetan doprinos saniranjem posledica tragičnih događaja 
                kao što su požari, poplave i bombardovanja, sprečavanjem vatrenih i vodenih stihija, kao i u njihovoj prevenciji.
            </p>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInUp" delay={1000} animateOnce={true} animatePreScroll={shouldAnimatePreScroll}>
            <p>
                Od svih dobrovoljnih udruženja, vatrogasna su se isticala svojim specifičnim funkcijama, strogom hijerarhijom 
                ali pre svega, edukativnim, plemenitim i humanim ciljem, kao i hrabrošću i požrtvovanošću koje simbolizuju.
            </p>
        </AnimationOnScroll>
      </Container>
    </section>
  );
}

export default AboutUs;
