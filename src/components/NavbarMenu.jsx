import styled from 'styled-components'
import { useEffect } from 'react';
import { useStateContext } from '../contexts/ContextProvider';

const List = styled.ul`
    display: flex;
    list-style-type: none;

    @media (max-width: 768px) {
        flex-direction: column;
        position: fixed;
        left: 0;
        top: 69px;
        width: 100%;
        height: calc(100vh - 69px);
        background-color: #008080;
      }
`
const ListItem = styled.li`
    @media (max-width: 768px) {
        margin: 2rem;
    }
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
`

const NavbarMenu = () => {
    const {active, showMenu, setShowMenu} = useStateContext()
    console.log(active);

    useEffect(() => {
        if(window.innerWidth < 768) {
          if(showMenu) {
            document.body.style.overflow = 'hidden'
          }
          else {
            document.body.style.overflow = 'visible'
          }
        }
        
        window.addEventListener('resize', (e) => {
            if(window.innerWidth > 768) {
                setShowMenu(true)
            } else {
              setShowMenu(false)
            }
        })
      }, [showMenu])


    const handleClick = () => {
        if(window.innerWidth <= 768) {
          setShowMenu(false)
        }
      }

    return (
        <>
            {showMenu && 
                <List>
                    <ListItem><Link onClick={handleClick} href="#home" className={active === 'home' ? 'active':''}>Početna</Link></ListItem>
                    <ListItem><Link onClick={handleClick} href="#service" className={active === 'service' ? 'active':''}>Aktivnosti</Link></ListItem>
                    <ListItem><Link onClick={handleClick} href="#donations" className={active === 'donations' ? 'active':''}>Donacije</Link></ListItem>
                    {/* <ListItem><Link onClick={handleClick} href="#gallery" className={active === 'gallery' ? 'active':''}>Galerija</Link></ListItem> */}
                    <ListItem><Link onClick={handleClick} href="#carousel" className={active === 'carousel' ? 'active':''}>Carousel</Link></ListItem>
                    <ListItem><Link onClick={handleClick} href="#contact" className={active === 'contact' ? 'active':''}>Kontakt</Link></ListItem>
                </List>
            }
        </>
    )
}

export default NavbarMenu;