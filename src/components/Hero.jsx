import styled, { keyframes } from "styled-components";
import { useStateContext } from '../contexts/ContextProvider';
import { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

const Section = styled.div`
  background-color: teal;
  background-image: url('img/bg-2.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const Container = styled.div`
    width: 80%;
    height: 100%;
    max-width: 992px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Left = styled.div`
    flex: 2;
`

const Title = styled.h1`
    font-size: 3rem;
    color: #fff;
`

const Subtitle = styled.h2`
    font-size: 1.2rem;
    font-weight: 400;
    color: #fff;
    margin-bottom: 3rem;
`

const Desc = styled.p`
    font-size: 2.2rem;
    color: #ccc;
    margin-bottom: 2.5rem;
`

const Button = styled.button`
    border: 1px solid teal;
    border-radius: 5px;
    color: teal;
    background-color: #fff;
    cursor: pointer;
    padding: 0.5rem 1rem;
    transition: 0.25 ease all;

    &:hover {
        border: 1px solid #fff;
        color: #fff;
        background-color: teal;
    }
`

const Right = styled.div`
    flex: 3;
    position: relative;
    height: 100%;
`

const Img = styled.img`
    width: 100%;
    border-radius: 50%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: animate 2s infinite ease alternate;

    @keyframes animate {
        to{
            transform: translateY(30px);
        }
    }
`

const Hero = () => {
    const {setActive} = useStateContext();
    const ref = useRef();

    useEffect(() => {
        const id = document.getElementById('home').id
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
                    <Title>DVD&nbsp;dr&nbsp;Laza&nbsp;Kostić</Title>
                    <Subtitle>Dobrovoljno Vatrogasno Društvo - Novi Sad</Subtitle>
                    <Desc>Za Sigurnost.<br /> Zastita imovine.<br />Hitne Situacije.</Desc>
                    <Button>Pridruži nam se!</Button>
                </Left>
                <Right>
                    {/* 3D Model */}
                    <Canvas>
                        <OrbitControls enableZoom={false} />
                        <ambientLight intensity={1} />
                        <directionalLight position={[3, 2, 1]} />
                        <Sphere args={[1, 100, 200]} scale={2.4}>
                            <MeshDistortMaterial
                            color="#fff"
                            attach="material"
                            distort={0.5}
                            speed={2}
                            />
                        </Sphere>
                    </Canvas>

                    <Img src="img/Firefighters.png" alt="" />
                </Right>
            </Container>
        </Section>
    )
}

export default Hero;