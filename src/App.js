import logo from './logo.svg';
import './App.css';
// import './js/main';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Resume from './components/Resume';
import Footer from './components/Footer';
import {BrowserRouter,Routes,Route,} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
  <div>
   
    <Navbar />
  
    <Routes >
        <Route path='/Home' element={<Home/>} /> 
        <Route path='/About' exact element={<About/>} /> 
        <Route path='/Resume' element={<Resume/>} />
        <Route path='/Contact' element={<Contact/>} /> 
        <Route path='/' element={<Home/>} />    
    </Routes>
    <Footer/>
      
  </div>
  </BrowserRouter>

  );
}

export default App;
