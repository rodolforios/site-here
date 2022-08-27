
import './App.css';
import About from './components/About';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Header from './components/Header'
import Services from './components/Services';
import Steps from './components/Steps.jsx';

function App() {
  return (
    <div className="App">
    <Header/>
    <About/>
    <Services/>
    <Steps/>
    <Clients/>
    <div className='text-center py-48 border bg-gray-100'>Empresa (wise Home)</div>
    <div className='text-center py-48 border bg-gray-100'>Galeria com projetos</div>
    <Contact/>
    
    
    
    </div>
  );
}

export default App;
