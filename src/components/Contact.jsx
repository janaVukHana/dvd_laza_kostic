import styled from "styled-components";
import { useForm } from 'react-hook-form'
import { useStateContext } from '../contexts/ContextProvider';
import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import NoviSadMap from "./NoviSadMap";
import Notification from './Notification'
import { AnimationOnScroll } from 'react-animation-on-scroll';

import TextField from '@mui/material/TextField';
import ForwardIcon from '@mui/icons-material/Forward';
import Spinner from "./Spinner";

const Section = styled.section`
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
  background-color: rgba(0,128,128,0.2);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.7); 

  @media (max-width: 992px) {
    width: 95%;
    margin: auto;
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
  background-color: rgba(255,255,255,0.3);
  padding: 5px; 
  border-radius: 5px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.7); 
  transition: 0.25s ease all;

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

  const {register, handleSubmit, reset, watch, formState: { errors }} = useForm({mode: 'onChange'})

  const [sending, setSending] = useState(false)
  const {setActive} = useStateContext()
  const ref = useRef();
  const formRef = useRef();
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    if(sending) {
        document.body.style.overflow = 'hidden'
    }
    else {
        document.body.style.overflow = 'visible'
    }
  }, [sending])

  const registerOptions = {
    name: {
        required: 'Obavezno polje.',
        minLength: {
            value: 3,
            message: 'Ime mora biti minimum 3 karaktera.'
        }
    },
    email: {required: 'Obavezno polje.'},
    message: {
        required: 'Obavezno polje.',
        minLength: {
            value: 20,
            message: 'Poruka mora biti minumum 20 karaktera'
        },
        maxLength: {
            value: 1000,
            message: 'Maksimalno 1000 karaktera.'
        }
    }
  }

  const handleError = (errors) => {}

  const handleMessage = (e) => {
    setSending(true)
    emailjs.sendForm('service_h2f12xb', 'template_rgj08vb', formRef.current, 'UWirvxxXyA94uge89')
      .then((result) => {
        console.log(result.text);
        setSuccess(true);
        formRef.current.reset();
        setSending(false)
      }, (error) => {
        console.log(error.text);
        setSuccess(false);
        setSending(false)
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
            <Form ref={formRef} onSubmit={handleSubmit(handleMessage, handleError)}>
                <Title>Kontakt</Title>
              
                <TextField
                        fullWidth
                        variant="outlined"
                        label="Ime"
                        error={!!errors?.name}
                        helperText={errors?.name && errors.name.message}
                        id="name"
                        name="name"
                        {...register('name', registerOptions.name)}
                    />
                <TextField
                        fullWidth
                        variant="outlined"
                        label="Email"
                        error={!!errors?.email}
                        helperText={errors?.email && errors.email.message}
                        id="email"
                        name="email"
                        type="email"
                        {...register('email', registerOptions.email)}
                    />
                <TextField
                        fullWidth
                        variant='outlined'
                        label="Poruka"
                        error={!!errors?.message}
                        helperText={errors?.message && errors.message.message}
                        id="message"
                        name="message"
                        multiline
                        rows={4}
                        inputProps={{
                            style: {
                                whiteSpace: 'pre-wrap'
                            }
                        }}
                        {...register('message', registerOptions.message)}
                    />
                <CheckboxWrapper>
                  <CheckboxInput type="checkbox" name="checkbox" value='Zelim da postanem clan DVD' />
                  <CheckboxLabel>Želim da postanem dobrovoljni vatrogasac.</CheckboxLabel>
                </CheckboxWrapper>
                <Button type="submit"><ForwardIcon /> Pošalji</Button>
            </Form>
          </AnimationOnScroll>
        </Left>
        <Right>
          <NoviSadMap />
        </Right>
      </Container>
      {/* While sending data show Spinner and prevent user to do anything! */}
      {sending && <Spinner />}
      {/* Show message is data is send with success */}
      {success && <Notification />}
    </Section>
  );
}

export default Contact;
