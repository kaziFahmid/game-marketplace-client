import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth/useAuth';
import useIsUser from '../hooks/useIsUser/useIsUser';


const UserRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isUser, isUserLoading] = useIsUser();
    const location = useLocation();
   
    if (loading || isUserLoading) {
  
      return <h1>Loading...</h1>;
    }
  
    if (user && isUser.user) {
      return children;
    }
  
    return (
      <Navigate to="/" state={{ from: location }} replace />
    );
}

export default UserRoute
