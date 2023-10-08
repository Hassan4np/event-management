
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import { useContext } from 'react';
import { AuthContext } from '../AuthRouter/AuthRouter';

const Navbar = () => {
    const { user, UserLogOut } = useContext(AuthContext)
    console.log(user)
    const links = <>
        <NavLink className="mr-4 text-base font-normal" to="/" >Home</NavLink>
        <NavLink className="mr-4 text-base font-normal" to="/donation" >About us</NavLink>
        <NavLink className="text_base font-normal mr-4" to="/blog" >Blog</NavLink>
    </>
    const henglelogout = () => {
        UserLogOut()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <nav>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn  lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {links}
                            </ul>
                        </div>
                        <a className="btn btn-ghost normal-case text-xl">Social events</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {user && <div className="w-10 mr-1"><img className='rounded-full' src={user.photoURL} /></div>}
                        {user && <p className='mr-1'>{user.displayName}</p>}
                        {!user && <NavLink to="/login"><a className="btn btn-sm">Login</a></NavLink>}
                        {user && <a className="btn btn-sm" onClick={henglelogout}>Logout</a>}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;