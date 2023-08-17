import styled from 'styled-components'
import Logo from './Logo'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Section = styled.footer`
    background-color: rgba(0, 128, 128, 1);
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
    align-items: center;
    justify-content: center;
    gap: 1rem;
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
    return (
        <Section>
            <Container>
                <Logo />
                <List>
                    <li><ItemLink href="#" target="_blank"><InstagramIcon /></ItemLink></li>
                    <li><ItemLink href="#" target="_blank"><FacebookIcon /></ItemLink></li>
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