import {Route} from 'react-router-dom';

import AuthLayout from '../layouts/AuthLayout';

import Signup from '../features/auth/pages/Signup';
import Signin from '../features/auth/pages/Signin';
import VerifyOTP from '../features/auth/pages/VerifyOTP';
import ForgotPassword from '../features/auth/pages/ForgotPassword';


const AuthRoutes=(

    <Route path='/auth' element={<AuthLayout/>} >
        <Route path='signup' element={<Signup/>} />
        <Route path='signin' element={<Signin/>} />
        <Route path='forgot-password' element={<ForgotPassword/>} />
        <Route path='verify-otp' element={<VerifyOTP/>} />
    </Route>

)

export default AuthRoutes;