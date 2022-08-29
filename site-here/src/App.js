
import './App.css';
import About from './components/About';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header'
import Services from './components/Services';
import Steps from './components/Steps.jsx';
import WiseHome from './components/WiseHome';

function App() {
  return (
    <div className="App">
    <Header/>
    <About/>
    <Services/>
    <Clients/>
    <Steps/>
    
    <WiseHome/>
    <div className='text-center py-48 border bg-gray-100'>Galeria com projetos</div>
    <Contact/>
    <Footer/>
    
    
    
    </div>
  );
}

export default App;
