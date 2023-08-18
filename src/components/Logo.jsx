import styled from 'styled-components'
import { useStateContext } from '../contexts/ContextProvider';
import WhatshotIcon from '@mui/icons-material/Whatshot';

const Img = styled.img`
    width: 50px;
    height: 50px;
`

const Link = styled.a`
    color: #fff;
    transition: 0.2s linear all;

    &:hover {
        transform: scale(1.2);
    }
`

const Logo = () => {
    const {showMenu, setShowMenu} = useStateContext()

    const handleClick = () => {
        if(window.innerWidth < 768) setShowMenu(false)
    }

    return (
        <Link href="#home" onClick={handleClick}>
            {/* <Img src="img/logo.png" alt="logo" /> */}
            <WhatshotIcon fontSize="large" />
        </Link>
    )
}

export default Logo;