
import './App.css';
import About from './components/About';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header'
import Projects from './components/Projects';
import Services from './components/Services';
import Steps from './components/Steps.jsx';
import WiseHome from './components/WiseHome';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Fab from '@mui/material/Fab';


function App() {
  return (
    <div className="App">



      <div className='fixed bottom-10 right-10 z-10 animate-bounce '>

      

        <a href="https://tinyurl.com/6ufups54" target="_blank" rel="noreferrer">
          <Fab color="success" aria-label="add">
            <WhatsAppIcon />
          </Fab>
        </a>
      </div>



      <Header />


      <About />
      <Services  />
      <Steps />
      <Clients/>
      <WiseHome/>
      <Projects/>
      <Contact/>
      <Footer/>



    </div>
  );
}

export default App;
