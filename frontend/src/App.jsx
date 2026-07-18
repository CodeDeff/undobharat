import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Signup from './features/auth/pages/Signup'
import Signin from './features/auth/pages/Signin'
import WeAreWorking from './components/common/WeAreWorking'
import UserProfilePage from './features/user/pages/UserProfilePage'
 
function App() {
  return (
   <Router>
    <div >
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route  path='auth/signup' element={<Signup/>} />
        <Route path='auth/signin' element={<Signin/>} />
        <Route path='/user/home' element={<UserProfilePage />} />
        <Route path='*' element={<WeAreWorking/>} />
      </Routes>
    </div>
     </Router>
  )
}

export default App
