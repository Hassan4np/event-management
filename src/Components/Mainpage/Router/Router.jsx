import { createBrowserRouter } from "react-router-dom";
import Mainpage from "../Mainpage";
import Home from "../Pages/Home";
import Signup from "../Register/Signup";
import Login from "../Register/Login";
import Errorpage from "../Pages/Errorpage";
import CardDetais from "../Pages/CardDetais";
import PrivateRout from "../PrivateProut/PrivateRout";
import Blog from "../Pages/Blog";
import OurTmas from "../Pages/OurTmas";
import BlogRout from "../PrivateProut/BlogRout";

const MyRouter = createBrowserRouter([
    {
        path:"/",
        element:<Mainpage></Mainpage>,
        errorElement: <Errorpage></Errorpage>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader: ()=>fetch('/card.json')
            },
            {
                path:"/signup",
                element:<Signup></Signup>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/cardde/:id",
                element:<PrivateRout><CardDetais></CardDetais></PrivateRout>,
                loader:()=>fetch('/card.json')
            },
            {
                path:"/blog",
                element:<BlogRout><Blog></Blog></BlogRout>
            },
            {
                path:'/member',
                element:<PrivateRout><OurTmas></OurTmas></PrivateRout>
            }
            

        ]
        }
])


export default MyRouter