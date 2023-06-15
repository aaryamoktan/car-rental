import logo from './logo.svg';
import './App.css';
import "./app.scss"
import Footer from './Components/footer/Footer';
import Home from './Components/Home/Home';
import Model from './Components/Models/Model';
import Pricing from './Components/Pricing/Pricing';
import Contact from './Components/Contack/Contact';
import Service from './Components/Services/Service';
import Nevbar from './Nevbar/Nevbar';
import CarDisplay from './Components/Models/Cars/CarDisplay';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
function App() {
  return (
    <><BrowserRouter>
    <div className='home'>
<Nevbar/>
  <Routes>
    <Route path="/" element={<Home props/>}/>
    <Route path="/models" element={<Model/>}/>
    <Route path="/CarD/:name"element={<CarDisplay/>}/>
    <Route path="/pricing" element={<Pricing/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/service" element={<Service/>}/>
  </Routes></div>
</BrowserRouter>

    </>
  );
}

export default App;
