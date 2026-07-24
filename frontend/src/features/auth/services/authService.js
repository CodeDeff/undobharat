import api from '../../../services/api.js';

const login= (data)=>
    {  return api.post('/auth/login', data);
}

const signup= (data)=>{
    return api.post('/auth/signup', data)
}

export default { login ,signup};