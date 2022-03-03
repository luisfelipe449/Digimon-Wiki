import './App.css';
import NavBar from './components/NavBar';
import CarouselHome from './components/Carousel';
import CardsProducts from './components/CardProducts';
import {Row} from 'react-bootstrap';

function App() {
  return ( 
      <>
      <NavBar/>
      <CarouselHome/>
      <Row>
        <CardsProducts/>
        </Row>
      </>
  );
}

export default App;
