import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import WeAreWorking from './components/common/WeAreWorking'

import AuthRoutes from './routes/AuthRoutes'
import UserRoutes from './routes/UserRoutes'

function App() {
  return (
   <Router>
    <div >
       <Routes>
      <Route path='/' element={<Home/>} />
       {AuthRoutes}
        {UserRoutes}
        <Route path='*' element={<WeAreWorking/>} />
      </Routes>
    </div>
     </Router>
  )
}

export default App
