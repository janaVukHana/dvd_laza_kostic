import styled from "styled-components";
import { useStateContext } from '../contexts/ContextProvider';
import { useRef, useEffect } from 'react';

const Container = styled.div`
    width: 95%;
    height: auto;
    max-width: 992px;
    color: #fff;
`

const ImageContainer = styled.div`
    width: 300;
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
    
    useEffect(() => {
        const id = document.getElementById('aboutUs').id;
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
    <section ref={ref} id="aboutUs" style={{backgroundColor: 'var(--primary-red)'}}>
      <Container>
        <ImageContainer>
            <img src="img/dvd/laza-kostic.jpg" alt="dr Laza Kostic" />
        </ImageContainer>
        <p style={{fontWeight: 700}}>
            Dobrovoljno vatrogasno društvo "Dr Laza Kostić" osnovano je davne 1872. godine. 
            Prvi predsednik DVD-a je bio tadašnji gradonačelnik Novog sada Pavle Močvanski (1821.-1914.).
        </p>
        <p>
            U istoriji grada, dobrovoljna vatrogasna društva dala su izuzetan doprinos saniranjem posledica tragičnih događaja 
            kao što su požari, poplave i bombardovanja, sprečavanjem vatrenih i vodenih stihija, kao i u njihovoj prevenciji.
        </p>
        <p>
            Od svih dobrovoljnih udruženja, vatrogasna su se isticala svojim specifičnim funkcijama, strogom hijerarhijom 
            ali pre svega, edukativnim, plemenitim i humanim ciljem, kao i hrabrošću i požrtvovanošću koje simbolizuju.
        </p>
      </Container>
    </section>
  );
}

export default AboutUs;
