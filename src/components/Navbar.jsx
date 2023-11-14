import styled from 'styled-components'
import Logo from './Logo'
import NavbarMenu from './NavbarMenu'
import Hamburger from './Hamburger'

const Section = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: rgba(190, 49, 68, 0.5);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(5px);

`

const Container = styled.div`
    width: 95%;
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
                <Hamburger />
            </Container>
        </Section>
    )
}

export default Navbar;
