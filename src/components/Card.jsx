import styled from "styled-components";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const AnimatedCardContainer = styled(AnimationOnScroll)`
    flex: 0 0 calc(33.33% - 10px);
    
    @media (max-width: 768px) {
        flex: 0 0 calc(50% - 10px);
    }
    
    @media (max-width: 600px) {
        flex: 0 0 calc(100% - 10px);
    }
    `;
    
const CardStyle = styled.div`
    position: relative;
    height: 80%;
    margin: 24px 5px; /* Add spacing between items */
    background-color: #008080; /* Optional background color */
    padding: 2.4rem 0.5rem 0.8rem; /* Optional padding for content inside items */
    border-radius: 6px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.7); 
`

const IconSpan = styled.span`
    position: absolute;
    left: 50%;
    top: -30px;
    transform: translateX(-50%);
    background-color: #fff;
    width: 60px;
    height: 60px;
    border: 1px solid #008080;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CardHeading = styled.h2`
    text-align: center;
    color: #fff;
    margin-bottom: 10px; /* Add the desired margin-bottom */

    @media (max-width: 768px) {
        font-size: 1rem;
      }
`;

const CardText = styled.p`
    color: #fff;
    font-size: 0.8rem;
`

const Card = ({icon, title,  desc}) => {
    return (
        <AnimatedCardContainer animateIn="animate__fadeInUp" animateOut="animate__fadeOutDown">
            <CardStyle>
                <IconSpan>{icon}</IconSpan>
                <CardHeading>{title}</CardHeading>
                <CardText>{desc}</CardText>
            </CardStyle>
        </AnimatedCardContainer>
    )
}

export default Card;