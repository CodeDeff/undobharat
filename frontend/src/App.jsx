import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Signup from './features/auth/pages/Signup'
import Signin from './features/auth/pages/Signin'
import VerifyOTP from './features/auth/pages/VerifyOTP'
import WeAreWorking from './components/common/WeAreWorking'
import UserProfilePage from './features/user/pages/UserProfilePage'
import ReportNow from './features/user/pages/ReportNow'
import Settings from './features/user/pages/Settings'
import Support from './features/user/pages/Support'
import History from './features/user/pages/History'

function App() {
  return (
   <Router>
    <div >
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route  path='/auth/signup' element={<Signup/>} />
        <Route path='/auth/signin' element={<Signin/>} />
        <Route path='/auth/verify-otp' element={<VerifyOTP/>} />
        <Route path='/user/home' element={<UserProfilePage />} />
        <Route path='/user/reportnow' element={<ReportNow />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/support' element={<Support />} />
        <Route path='/history' element={<History />} />
        <Route path='*' element={<WeAreWorking/>} />
      </Routes>
    </div>
     </Router>
  )
}

export default App
