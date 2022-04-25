import './App.css';
import Login from './Component/Booking/Login';
import Home from './Component/Home';
import React,{Routes, Route} from  'react-router-dom';
import Navbar from './Component/Navbar'
import Create from './Component/CreateNewAccout/Create'
import About from './Component/About/About'
import Gallery from './Component/Gallery/Gallery';
import Footer from './Component/Footer/Footer';
import ConfirmOtp from './Component/Booking/Confirmation/ConfirmOtp';
function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Home' element={<Home/>} />
          <Route path='/Login' element={<Login/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Create' element={<Create/>}/>
          <Route path='/Gallery' element={<Gallery/>}/>
          <Route path ='/ConfirmOtp' element={<ConfirmOtp/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
