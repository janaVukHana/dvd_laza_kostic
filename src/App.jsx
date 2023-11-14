import styled from 'styled-components'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import OurTeam from './components/OurTeam'
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
        <AboutUs />
        <Services />
        <OurTeam />
        <Contact />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
