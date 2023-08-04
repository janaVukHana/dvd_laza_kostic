import styled from 'styled-components'

const Span = styled.span`
    color: #fff;
    background-color: green;
    border-radius: 5px;
    padding: 1rem 3rem;
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    z-index: 3;
`

const Notification = () => {

    return (
        <Span>Tvoja poruka je poslata. </Span>
    )
}

export default Notification;