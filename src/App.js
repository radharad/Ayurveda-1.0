import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Legal from './components/Legal/Legal'
import Register from './components/Register';
import Login from './components/Login';
import Contact from './components/Contact';
import ForgetPassword from './components/ForgetPassword';
import ScrollToTop from 'react-scroll-to-top';


function App() {
  return (
    <>
    <ScrollToTop smooth top="20" style={{backgroundColor:"rgba(0,0,0,0.2)",paddingLeft:"5px", width:"40px", height:"38px",borderRadius:"50%",opacity:"0.4",zIndex:"99",position:"fixed",text:"5px",color:'black'}}/> 
    <BrowserRouter>
    <Routes>
      <Route path="/nav" element={<Nav/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Services/>}/>
      <Route path="/legal" element={<Legal/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/forgetPassword" element={<ForgetPassword/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
