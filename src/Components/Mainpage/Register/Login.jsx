import { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthRouter/AuthRouter';
import swal from 'sweetalert';

const Login = () => {
    const { UserLogin, UserGooglelogin } = useContext(AuthContext);
    const loc = useLocation()
    const [errors, seterror] = useState("")
    const navegte = useNavigate();
    const googlelogin = () => {
        UserGooglelogin()
            .then(result => {
                console.log(result.user)
                navegte(loc?.state ? loc.state:"/");
            })
            .then(error => {
                console.log(error)
                seterror(error.message)

            })
    }

console.log(loc.state)
    const HendleLOgin = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        seterror('')
        UserLogin(email, password)
            .then((result) => {
                console.log(result.user)
                swal("Good job!", "You Login success", "success");
                navegte('/')


            })
            .catch(error => {
                console.log(error.message)
                seterror(error.message)
                return;
            })

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={HendleLOgin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <label className="label">
                                    <p className=''>create an account<NavLink className="ml-2 text-green-500" to="/signup">Register</NavLink></p>
                                </label>
                                {
                                    errors && <p className='text-red-500 text-base'>{errors};</p>
                                }
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className=" text-center">
                                <button className="btn btn-sm btn-success" onClick={googlelogin}>Google</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;