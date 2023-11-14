import styled from "styled-components";
import { useStateContext } from '../contexts/ContextProvider';
import React, { useRef, useEffect } from 'react';

const Container = styled.div`
    width: 95%;
    height: 100%;
    max-width: 992px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    color: var(--primary-red);

    @media(max-width: 600px) {
        flex-direction: column;
    }
`

const Left = styled.div`
    flex: 2;
    overflow: hidden;
`
const Right = styled.div`
    flex: 1;
    overflow: hidden;
`

const List = styled.ul`
    list-style-type: disc;
    font-size: 1.4rem;
    margin-left: 1.4rem;
`

const ListItem = styled.li`
    margin-bottom: 0.6rem;
`

const ImageContainer = styled.div`
    width: 300px;
    height: 500px;
    float: left;
    margin-right: 3rem;
`

const Services = () => {
  const { setActive } = useStateContext();
  const ref = useRef();
  
  useEffect(() => {
      const id = document.getElementById('services').id;
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
    <section ref={ref} id="services">
      <Container>
        <Left>
            <h2>Oblasti delovanja</h2>
            <List>
                <ListItem>zaštita od požara</ListItem>
                <ListItem>zaštite životne sredine</ListItem>
                <ListItem>civilna zaštita</ListItem>
                <ListItem>vatrogasna dežurstava</ListItem>
                <ListItem>edukacije o zaštiti i reagovanju u slučaju požara</ListItem>
                <ListItem>zaštita poljoprivrede i šumarstva</ListItem>
                <ListItem>pomoć u saniranju posledica poplava</ListItem>
                <ListItem>pomoć u saniranju posledica nevremena</ListItem>
                <ListItem>takmičenja</ListItem>
            </List>
        </Left>
        <Right>
            <img src="img/dvd/field_01.jpg" alt="" />
            <img src="img/dvd/school.jpg" alt="" />
        </Right>
      </Container>
    </section>
  );
}

export default Services;
