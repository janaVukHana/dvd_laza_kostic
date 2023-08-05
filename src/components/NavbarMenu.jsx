import styled from 'styled-components'
import { useStateContext } from '../contexts/ContextProvider';

const List = styled.ul`
    display: flex;
    list-style-type: none;
`

const Link = styled.a`
    padding: 0.5rem 1rem;
    margin-left: 3px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;

    &:hover, &.active {
        border-bottom: 3px solid #fff;
    }

    @media (max-width: 768px) {
        font-size: 0.7rem;
      }
`

const NavbarMenu = () => {
    const {active} = useStateContext()

    return (
        <List>
            <li><Link href="#home" className={active === 'home' ? 'active':''}>Pocetna</Link></li>
            <li><Link href="#service" className={active === 'service' ? 'active':''}>Aktivnosti</Link></li>
            <li><Link href="#donations" className={active === 'donations' ? 'active':''}>Donacije</Link></li>
            <li><Link href="#contact" className={active === 'contact' ? 'active':''}>Kontakt</Link></li>
        </List>
    )
}

export default NavbarMenu;