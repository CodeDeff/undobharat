import api from '../../../services/api.js';

const logout = async()=>{
    return api.post('/auth/logout');
}

export default {logout}