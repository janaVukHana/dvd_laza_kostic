import styled from 'styled-components'
import Logo from './Logo'
import NavbarMenu from './NavbarMenu'

const Section = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: rgba(0, 128, 128, 0.1);
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

const Navbar = () => {
    return (
        <Section>
            <Container>
                <Logo />
                <NavbarMenu />
            </Container>
        </Section>
    )
}

export default Navbar;