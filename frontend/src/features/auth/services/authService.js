import api from '../../../services/api.js';

const login= (data)=>
    {  return api.post('/auth/login', data);
}

export default { login };