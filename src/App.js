import { useRef } from 'react';
import './css/components/App.css';
import FrontPage from './js/Components/FrontPage/FrontPage';
import Home from './js/Components/Home/Home';
import Accommodations from './js/Components/Accommodations/Accommodations';
import RoomFrontPage from './js/Components/RoomFrontPage/RoomFrontPage';
import Promos from './js/Components/Promos/Promos';
import InThePress from './js/Components/InThePress/InThePress';
import Footer from './js/Components/Footer/Footer';


function App() {

  const homeRef = useRef();
  const videoRef = useRef();

  return (
    <div className="App">
      <header className="App-header">
        <FrontPage homeRef={homeRef} videoRef={videoRef} />
      </header>

      <main>
        <Home homeRef={homeRef} />
        <Accommodations />
        <RoomFrontPage />
        <Promos />
        <InThePress />
        <Footer />
      </main>

    </div>
  );
}

export default App;
