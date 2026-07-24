import api from '../../../services/api.js';

const getRole= async()=>{
    return api.get('/me');
}

export {getRole}