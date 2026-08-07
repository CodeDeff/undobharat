import api from '../../../services/api.js';

export const getUserData = async()=>{
    return api.get('/user/me');
}

export default {getUserData}