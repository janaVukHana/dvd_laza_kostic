import styled from 'styled-components'
import { useStateContext } from '../contexts/ContextProvider';
import WhatshotIcon from '@mui/icons-material/Whatshot';

const Img = styled.img`
    display: block;
    width: 50px;
    height: 50px;
    margin-right: 10px;
    border-radius: 6px;
`

const Link = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    transition: 0.2s linear all;
    text-decoration: none;

    &:hover {
        transform: scale(1.2);
    }

    @media(max-width: 992px) {
        flex-direction: column;
        align-items: start;
    }
`

const Span = styled.span`
    @media(max-width: 992px) {
        font-size: 0.7rem;
    }
    // font-size: 1rem;
`

const Logo = () => {
    const {showMenu, setShowMenu} = useStateContext()

    const handleClick = () => {
        if(window.innerWidth < 768) setShowMenu(false)
    }

    return (
        <Link href="#home" onClick={handleClick}>
            <Img src="img/dvd/logo.jpg" alt="logo" />
            <Span>
                DOBROVOLJNO VATROGASNO DRUŠTVO <br />
                "DR LAZA KOSTIĆ"
                NOVI SAD
            </Span>
            {/* <WhatshotIcon fontSize="large" /> */}
        </Link>
    )
}

export default Logo;