import styled from 'styled-components'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Service from './components/Service'
import Donations from './components/Donations'
import Contact from './components/Contact'

const Container = styled.div`
  height: 100%;
`

function App() {

  return (
    <div className="App">
      <Navbar />
      <Container>
        <Home />
        <Service />
        <Donations />
        <Contact />
      </Container>
    </div>
  );
}

export default App;
