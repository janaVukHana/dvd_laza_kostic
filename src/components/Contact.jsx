import styled from "styled-components";
import { useStateContext } from '../contexts/ContextProvider';
import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import NoviSadMap from "./NoviSadMap";
import Notification from './Notification'
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Section = styled.div`
  height: 100vh;
  background-color: #008080;
  background-image: linear-gradient(#008080, #fff);
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 50px;

  @media (max-width: 992px) {
    justify-content: center;
    align-items: center;
    gap: 0px;  
  }
`
const Left = styled.div`
  position: relative;
  z-index: 6;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 992px) {
    justify-content: center;
  }
`

const Title = styled.h2`
  font-size: 3rem;
  color: #fff;
`

const Form = styled.form`
  width: 100%;
  max-width: 450px;
  padding: 1rem;
  margin-top: 60px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: rgba(0,128,128,0.3);

  @media (max-width: 992px) {
    width: 95%;
  }
`

const Input = styled.input`
  width: 100%;
  border: 1px solid #008080;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 0.5rem;

  &:focus {
    outline: none;
  }
`

const Textarea = styled.textarea`
  width: 100%;
  padding: 20px;
  border: 1px solid #008080;
  border-radius: 5px;
  margin-bottom: 0.5rem;

  &:focus {
    outline: none;
  }
`

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`

const CheckboxLabel = styled.label`
  color: #242424;
  font-weight: 700;
  margin-left: 0.5rem;
`

const CheckboxInput = styled.input`
  margin-right: 0.5rem;
`

const Button = styled.button`
  color: teal;
  border: 1px solid #008080;
  background-color: #fff;
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: teal;
    color: #fff;
  }
`

const Right = styled.div`
  flex: 1;

  @media (max-width: 992px) {
    display: none; 
  }
`

const Contact = () => {
  const {setActive} = useStateContext()
  const ref = useRef();
  const formRef = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    const name = formRef.current.name.value.trim();
    const email = formRef.current.email.value.trim();
    const message = formRef.current.message.value.trim();

    if (!name || !email || !message) {
      // If any of the required fields are empty
      setSuccess(false);
      return;
    }

    // TODO: Additional validation logic
    // ...

    // Send form data using emailjs
    emailjs.sendForm('service_h2f12xb', 'template_rgj08vb', formRef.current, 'UWirvxxXyA94uge89')
      .then((result) => {
        console.log(result.text);
        setSuccess(true);
        formRef.current.reset();
      }, (error) => {
        console.log(error.text);
        setSuccess(false);
      });
  }

  useEffect(() => {
    // Remove notification after 4sec
    setTimeout(() => {
      setSuccess(false)
    }, 4000)


    const id = document.getElementById('contact').id
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
  }, [success]);

  return (
    <Section id="contact" ref={ref}>
      <Container>
        <Left>
          <AnimationOnScroll animateIn="animate__fadeInUp" animateOut="animate__fadeOutDown">
            <Form ref={formRef} onSubmit={handleSubmit}>
                <Title>Kontakt</Title>
              
                <Input placeholder="Ime" name="name" />
                <Input type="email" placeholder="Email" name="email" />
                <Textarea placeholder="Napiši poruku" rows="7" name="message" />
                <CheckboxWrapper>
                  <CheckboxInput type="checkbox" name="checkbox" value='Zelim da postanem clan DVD' />
                  <CheckboxLabel>Zelim da postanem dobrovoljni vatrogasac.</CheckboxLabel>
                </CheckboxWrapper>
                <Button>Pošalji</Button>
                {success && <Notification />}
            </Form>
          </AnimationOnScroll>
        </Left>
        <Right>
          <NoviSadMap />
        </Right>
      </Container>
    </Section>
  );
}

export default Contact;
