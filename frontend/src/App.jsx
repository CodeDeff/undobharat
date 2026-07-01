import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import PNF from './pages/PNF'
import Home from './pages/Home'
import Signup from './pages/Signup'
import WeAreWorking from './components/common/WeAreWorking'
 
function App() {
  return (
   <Router>
    <div >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route  path='/signup' element={<Signup/>} />
        <Route path='*' element={<WeAreWorking/>} />
      </Routes>
    </div>
    <Footer/>
    </Router>
  )
}

export default App
