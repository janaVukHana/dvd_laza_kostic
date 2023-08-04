import styled from "styled-components";
import { useStateContext } from '../contexts/ContextProvider';
import React, { useRef, useState, useEffect } from 'react';
// Components
import Card from "./Card";
// Mui Icons
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import FireHydrantAltIcon from '@mui/icons-material/FireHydrantAlt';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SchoolIcon from '@mui/icons-material/School';

const cardInfo = [
  {
    icon: <FireHydrantAltIcon color="primary" />,
    title: 'Gašenje požara',
    desc: 'Gašenje različitih vrsta požara, uključujući požare u zgradama, vozilima, šumske požare i druge hitne situacije.'
  },
  {
    icon: <LocalHospitalIcon color="primary" />,
    title: 'Hitna medicinska pomoć',
    desc: 'Pružanje osnovnih hitnih medicinskih usluga i prve pomoći do dolaska ambulante.'
  },
  {
    icon: <HomeSharpIcon color="primary" />,
    title: 'Spašavanje i evakuacija',
    desc: 'Operacije spašavanja u slučajevima prometnih nesreća, spašavanje iz poplava, evakuacije ljudi iz opasnih situacija i druge vrste tehničkih spašavanja.'
  },
  {
    icon: <SchoolIcon color="primary" />,
    title: 'Obuka i edukacija',
    desc: 'Organizovani programi obuke i edukacije za građane, učenike i druge organizacije o sigurnosnim merama, pružanju prve pomoći i drugim hitnim postupcima.'
  },
]

const Section = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
`

const Container = styled.div`
    width: 95%;
    height: auto;
    max-width: 992px;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: stretch;
`

const Service = () => {
  const {active, setActive} = useStateContext()
  const ref = useRef();

  useEffect(() => {

    const id = document.getElementById('service').id
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
    <Section id="service" ref={ref}>
      <Container>
        {cardInfo.map(card => {
          return (
              <Card key={card.title} icon={card.icon} title={card.title} desc={card.desc} />
          )
        })}
      </Container>
    </Section>
  );
}

export default Service;
