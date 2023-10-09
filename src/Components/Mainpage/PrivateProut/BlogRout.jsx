
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthRouter/AuthRouter";
import { useContext } from "react";

const BlogRout = ({children}) => {
    const loc = useLocation()
    const {user,loadig} = useContext(AuthContext);
    if(loadig){
        return <h1 className="text-2xl"> Loading...</h1>
    }
    if(user){
        return children
    }
    return <Navigate state={loc.pathname} to="/login"></Navigate>

};

export default BlogRout;