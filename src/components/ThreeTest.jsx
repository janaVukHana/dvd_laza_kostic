import styled from 'styled-components'
import {OrbitControls} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import { BoxGeometry } from 'three'

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #242424;
  color: #fff;
  scroll-snap-align: center;
`

const ThreeTest = () => {
    return (
        <Container id="threetest">
          {/* <Canvas>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3,2,1]} />
            <mesh>
              <boxGeometry args={[2,2,2]}/>
              <meshStandardMaterial color="yellow" />
            </mesh>
          </Canvas> */}
        </Container>
    )
}

export default ThreeTest;