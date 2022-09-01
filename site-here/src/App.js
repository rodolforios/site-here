
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


function App() {
  return (
    <div className="App">
    <Header/>
    <About/>    
    <Services/>      
    <Steps/>
    <Clients/>        
    <WiseHome/>
    <Projects/>      
    <Contact/>
    <Footer/>
    
    
    
    </div>
  );
}

export default App;
