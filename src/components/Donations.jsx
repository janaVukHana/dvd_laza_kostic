import styled from "styled-components";
import { useEffect, useRef } from "react";
import { useStateContext } from '../contexts/ContextProvider';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Section = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #008080;
    background-image: linear-gradient(#008080, #fff);
    color: #fff;
    position: relative;
    z-index: -2;
    padding-top: 5rem;
`

const Container = styled.div`
    width: 95%;
    height: auto;
    max-width: 992px;
    padding: 1rem;
    border-radius: 6px;
    background-color: rgba(0,0,0,0.2)
`

const Title = styled.h2`
    margin-bottom: 5rem;
    text-align: center;
`

const Paragraph = styled.p`
    margin-bottom: 1rem;
`

const Span = styled.span`
    font-weight: 700;
`

const Donations = () => {
    const {active, setActive} = useStateContext()
    const ref = useRef();

    useEffect(() => {

        const id = document.getElementById('donations').id
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
        <Section id='donations' ref={ref}>
          <AnimationOnScroll animateIn="animate__fadeInUp" animateOut="animate__fadeOutDown">
                <Container>
                    <Title>Donacije - Podržite Dobrovoljno Vatrogasno Društvo!</Title>
                    <Paragraph>
                        Hvala vam što razmatrate da podržite naše Dobrovoljno vatrogasno društvo! 
                        Vaše donacije igraju ključnu ulogu u našoj sposobnosti da zaštitimo našu 
                        zajednicu od požara i drugih opasnosti.
                    </Paragraph>
                    <Paragraph>
                        <Span>Ako želite donirati, evo broja našeg računa na koji možete uplatiti svoj prilog:</Span><br />
                        Broj računa: [Unesite broj računa]
                    </Paragraph>
                    <Paragraph>
                        Svaka vaša donacija će biti iskorišćena za nabavku opreme, obuku naših 
                        vatrogasaca i unapređenje naše vatrogasne infrastrukture.
                    </Paragraph>
                    <Paragraph>
                        Još jednom, hvala vam na podršci! Vaša pomoć je neprocenjiva i pomaže nam 
                        da održimo sigurnost i dobrobit naše lokalne zajednice.
                    </Paragraph>
                </Container>
            </AnimationOnScroll>
        </Section>
    )
}

export default Donations;