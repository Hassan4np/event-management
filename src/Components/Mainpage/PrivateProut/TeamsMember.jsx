import {  useContext } from "react";
import { AuthContext } from "../AuthRouter/AuthRouter";

import { Navigate, useLocation } from "react-router-dom";


const TeamsMember = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const loc = useLocation()
    if(loading){
        return <h1 className="text-2xl">Loaging...</h1>
    }
    if(user){
        return children
    }
    return <Navigate state={loc.pathname} to="/login"></Navigate>
};

export default TeamsMember;