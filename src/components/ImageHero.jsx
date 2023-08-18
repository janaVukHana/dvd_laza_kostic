import { useEffect, useState } from "react";
import styled from "styled-components";
import { useStateContext } from '../contexts/ContextProvider';
import firemanImage from '../assets/firedep/fireman.png';

const Img = styled.img`
    opacity: 0;
    transition: 1s cubic-bezier(.07,.34,.94,.1);
`

const ImageHero = () => {
    const { active } = useStateContext();
    const [imageOpacity, setImageOpacity] = useState(0)
    const [imageSizeAndPosition, setImagaSizeAndPositions] = useState({
        width: '40%',
        position: 'fixed',
        bottom: 0,
        right: 0,
        zIndex: '5'
    })

    useEffect(() => {
        setTimeout(() => {
            if(active === 'service') setImagaSizeAndPositions(prevVal => {
                return {...prevVal, width: '20%', right: 0}
            })
            else if(active === 'donations') setImagaSizeAndPositions(prevVal => {
                return {...prevVal, width: '10%', right: '0%'}
            })
            else if(active === 'gallery') setImagaSizeAndPositions(prevVal => {
                return {...prevVal, width: '15%', right: '0%'}
            })
            else if(active === 'contact') setImagaSizeAndPositions(prevVal => {
                return {...prevVal, width: '50%', right: '40%'}
            })
            else if(active === 'home') setImagaSizeAndPositions(prevVal => {
                return {...prevVal, width: '50%', right: 0}
            })
            
            // Change image opacity. Transition is 1sec
            setImageOpacity(1)
        }, 1000)

    }, [active]);

    return <Img src={firemanImage} alt="firefighter" style={{opacity: imageOpacity, ...imageSizeAndPosition}} />
}

export default ImageHero;