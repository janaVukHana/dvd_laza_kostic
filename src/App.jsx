import styled from 'styled-components'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Service from './components/Service'
import Donations from './components/Donations'
import Contact from './components/Contact'
// import Gallery from './components/Gallery'
import Carousel from './components/Carousel'

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
        {/* <Gallery /> */}
        <Carousel />
        <Contact />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
