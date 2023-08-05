import styled from 'styled-components'
import { useStateContext } from '../contexts/ContextProvider';

const Img = styled.img`
    width: 50px;
    height: 50px;
`

const Logo = () => {
    const {showMenu, setShowMenu} = useStateContext()

    const handleClick = () => {
        if(window.innerWidth < 768) setShowMenu(false)
    }

    return (
        <a href="#home" onClick={handleClick}>
            <Img src="img/logo.png" alt="logo" />
        </a>
    )
}

export default Logo;