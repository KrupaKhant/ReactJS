import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Team from './Component/Team';
import History from './Component/History';
import Location from './Component/Location';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
        <Route path="about/team" element={<Team />} />
        <Route path="about/history" element={<History />} />
        <Route path="contact/location" element={<Location />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
