import {Routes, Route} from 'react-router-dom';

import UserLayout from '../layouts/UserLayout';

import UserProfilePage from '../features/user/pages/UserHomePage'
import ReportNow from '../features/user/pages/ReportNow'
import Settings from '../features/user/pages/Settings'
import Support from '../features/user/pages/Support'
import History from '../features/user/pages/History'


const UserRoutes=(
    <Route path='/user' element={<UserLayout/>} >
    <Route path='home' element={<UserProfilePage/>} />        
    <Route path='reportNow' element={< ReportNow />} />        
    <Route path='settings' element={<Settings  />} />        
    <Route path='support' element={<Support />} />        
    <Route path='history' element={<History />} />        

    </Route>
)

export default UserRoutes;