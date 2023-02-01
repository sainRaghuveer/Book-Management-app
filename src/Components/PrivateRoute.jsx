import React from 'react';
import {Navigate,useLocation} from "react-router-dom";
import {useSelector} from "react-redux";

const PrivateRoute = ({children}) => {
    const isAuth = useSelector((store)=>store.authReducer.isAuth );
    const location = useLocation();
    console.log("PrivateRoteLocation", location);
    if(!isAuth){
        return <Navigate to={"/login"} state={location.pathname} replace></Navigate>
    }
  return children;
  
}

export default PrivateRoute