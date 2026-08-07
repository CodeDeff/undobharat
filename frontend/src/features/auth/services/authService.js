import api from '../../../services/api.js';

const login= (data)=>
    {  return api.post('/auth/login', data);
}

const signup= (data)=>{
    return api.post('/auth/signup', data)
}

const sendOTP= (data)=>{
    return api.post('/auth/send-otp', data)
}

const verifyOtp=(data)=>{
    return api.post('/auth/verify-otp', data)
}

const updatePassword=(data)=>{
    return api.put('/auth/update-password', data)
}

const getMail= async()=>{
    return api.get('/auth/me')
}
export default { login ,signup, sendOTP, verifyOtp, updatePassword, getMail};