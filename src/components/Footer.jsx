import styled from 'styled-components'
import Logo from './Logo'

const Section = styled.footer`
    background-color: rgba(0, 128, 128, 0.5);
    width: 100%;
    display: flex;
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

const Footer = () => {
    return (
        <Section>
            <Container>
                <Logo />
                <h2>Footer</h2>
            </Container>
        </Section>
    )
}

export default Footer;