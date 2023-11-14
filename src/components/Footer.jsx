import styled, { keyframes } from 'styled-components'
import Logo from './Logo'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useEffect, useState } from 'react';

// Define a keyframe animation
const iconAnimation = keyframes`
    0% {
        transform: scale(1);
    }
    25% {
        transform: scale(1.2)
    }
    50% {
        transform: scale(1);
    }
    75% {
        transform: scale(1.2)
    }
    100% {
        transform: scale(1);
    }
`;

const Section = styled.footer`
    background-color: #be3144;
    width: 100%;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Container = styled.div`
    width: 80%;
    max-width: 992px;
    padding: 0.5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
` 

const List = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    position: fixed;
    top: 50%;
    left: 10px;
    background-color: var(--primary-red);
    border: 2px solid #fff;
    padding: 1rem 0.5rem;
    border-radius: 10px;

    /* Add a class for animation */
    &.animate-icons {
        animation: ${iconAnimation} .7s;
    }
`

const ItemLink = styled.a`
    display: block;
    color: #fff;
    transition: 0.3s linear all;

    &:hover {
        transform: scale(1.5);
    }
`

const ParagraphCopy = styled.p`
    font-size: 10px;
    color: #fff;
    text-align: center;
    position: relative;
    width: 100%;
    z-index: 11;
`

const Divider = styled.div`
    background-color: #fff;
    height: 2px;
    width: 80%;
    margin: 1rem 0;
`


const Footer = () => {
    const [animateIcons, setAnimateIcons] = useState(false)

    useEffect(() => {

        const intervalId = setInterval(() => {
            setAnimateIcons(prev => !prev)
        }, 10000)

        // Clear the interval on component unmount
        return () => clearInterval(intervalId)
    }, [])

    return (
        <Section>
            <Container>
                <Logo />
                <List className={animateIcons ? 'animate-icons':''}>
                    <li><ItemLink href="https://www.instagram.com/dvd_laza_kostic_novi_sad/" target="_blank"><InstagramIcon /></ItemLink></li>
                    <li><ItemLink href="https://www.facebook.com/dvdlazakosticnovisad/" target="_blank"><FacebookIcon /></ItemLink></li>
                </List>
            </Container>
            <Divider></Divider>
            <Container>
                <ParagraphCopy>© 2023 Ilija Radovanović * Made with ♥ & ☕ in Novi Sad, Budva and Belgrade.</ParagraphCopy>
            </Container>
        </Section>
    )
}

export default Footer;