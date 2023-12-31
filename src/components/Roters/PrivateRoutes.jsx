import React, { useContext } from 'react';

import {Navigate, useLocation} from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider';
import { Spinner } from 'react-bootstrap';

const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation()
    if(loading){
       return( <div className="d-flex justify-content-center d-none">
       <Spinner animation="grow" variant="light">
         <span className="visually-hidden">Loading...</span>
       </Spinner>
     </div>)
    }
    if(user){
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
  
};

export default PrivateRoutes;