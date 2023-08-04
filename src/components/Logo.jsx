import styled from 'styled-components'

const Img = styled.img`
    width: 50px;
    height: 50px;
`

const Logo = () => {
    return (
        <a href="#home">
            <Img src="img/logo.png" alt="logo" />
        </a>
    )
}

export default Logo;