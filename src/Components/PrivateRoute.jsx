import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router';
import { useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user, loading} = use(AuthContext);


    if(loading){
        return <span className="loading loading-ring loading-xl"></span>
    }

    if(user){
        return children;
    }

    const location = useLocation();
    // console.log(location)

    return <Navigate state={location.pathname} to='/auth/login'></Navigate>
};

export default PrivateRoute;