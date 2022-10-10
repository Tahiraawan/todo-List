import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import{ selectIsLoggedIn } from'../store/userSlice';



function RequireAuth({children}) {
 const isLoggedIn=useSelector(selectIsLoggedIn)
 if(!isLoggedIn){
    return <Navigate to='/login'/>
 }
// if user is logged in,show the page
return children;
}

export default RequireAuth