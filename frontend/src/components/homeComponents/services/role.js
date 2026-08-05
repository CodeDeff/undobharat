import api from '../../../services/api.js';

const getRole= async()=>{
    return api.get('/auth/me');
}

export {getRole}