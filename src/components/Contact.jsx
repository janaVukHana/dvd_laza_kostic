import styled from "styled-components";
import { useStateContext } from '../contexts/ContextProvider';
import { useRef } from 'react';

import { containerStyles, redTextStyles } from "../sharedStyles";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import usePageLoadAnimation from "../helpers/usePageLoadAnimation";
import useIntersectionObserver from "../helpers/useIntersectionObserver";

const Container = styled.div`
    ${containerStyles};
    ${redTextStyles};
`

const Left = styled.div`
    flex: 1;
    overflow: hidden;
`
const Right = styled.div`
    flex: 1;
    overflow: hidden;
`

const Address = styled.address`
    color: #be3144;
    font-size: 1.2rem;
    margin-bottom: 1.2rem;
`

const Link = styled.a`
    color: #be3144;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`

const ContactInfo = styled.div`
    font-size: 1.2rem;
    margin-bottom: 1.2rem;
`

const Contact = () => {
    // Fixing on page load animation
    const shouldAnimatePreScroll = usePageLoadAnimation()

    const { setActive } = useStateContext();
    const ref = useRef();
    const sectionId = 'contact'
  
    useIntersectionObserver(ref, sectionId, setActive)


    // useEffect(() => {
    //     const id = document.getElementById('contact').id;
    //     const observer = new IntersectionObserver(
    //         ([entry]) => {
    //             entry.isIntersecting && setActive(id);
    //         },
    //         {
    //             rootMargin: "0px",
    //             threshold: 0.5 // Change this threshold value as per your requirement
    //         }
    //     );

    //     if (ref.current) {
    //         observer.observe(ref.current);
    //     }

    //     return () => {
    //         if (ref.current) {
    //             observer.unobserve(ref.current);
    //         }
    //     };
    // }, []);

    return (
        <section ref={ref} id="contact">
            <Container>
                <Left>
                    <AnimationOnScroll animateIn="animate__fadeInUp" delay={1} animateOnce={true} animatePreScroll={shouldAnimatePreScroll}>
                        <h2>Kontaktiraj nas</h2>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInUp" delay={1000} animateOnce={true} animatePreScroll={shouldAnimatePreScroll}>
                        <Address>
                            <h3>Adresa</h3>
                            <span>Jovana Subotica 11, Novi Sad</span>
                        </Address>

                        <ContactInfo>
                            <h3>Telefon</h3>
                            <Link href="tel:+381652520996" itemProp="telephone">065 252 09 96</Link>
                        </ContactInfo>

                        <ContactInfo>
                            <h3>Email</h3>
                            <Link href="mailto:dvdlazakostic@vsgns.rs" itemProp="email">dvdlazakostic@vsgns.rs</Link>
                        </ContactInfo>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInUpBig" delay={1500} animateOnce={true} animatePreScroll={shouldAnimatePreScroll}>
                        <a className="btn" href="https://vsgns.rs/postani-vatrogasac" target="_blank">POSTANI DOBROVOLJNI VATROGASAC</a>
                    </AnimationOnScroll>
                </Left>
                <Right>
                <AnimationOnScroll animateIn="animate__fadeInUpBig" delay={1} animateOnce={true} animatePreScroll={shouldAnimatePreScroll}>

                    <img src="img/dvd/office.jpg" alt="firefighters in office" loading="lazy" />
                </AnimationOnScroll>
                </Right>
            </Container>
        </section>
    )
}

export default Contact;

