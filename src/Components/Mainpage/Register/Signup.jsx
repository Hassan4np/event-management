import { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthRouter/AuthRouter";
import swal from 'sweetalert';
import { updateProfile } from "firebase/auth";



const Signup = () => {
    const { UserSignup } = useContext(AuthContext);
    const [errors, seterror] = useState('')
    const naavgate = useNavigate()
    const HendleSignup = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const name = form.get('name');
        const pic = form.get('imgurl');
        if (password.length < 6) {
            seterror("this password is not 6 caracter")
            return;
        } else if ( !/[!@#$%^&*()_+{}\[\]:;<>,.?~\\|\-=]/.test(password)) {
            seterror("Give me spical caracter");
            return;
        }else if(!/[A-Z]/.test(password)){
            seterror("Give me captial letter")
            return;
        }


        seterror('')
        UserSignup(email, password)
            .then(result => {
                console.log(result.user)
                swal("Good job!", "You Register success", "success");
                updateProfile(result.user,{
                    displayName:name,photoURL:pic
                })
                naavgate('/login')

            })
            .catch(error => {
                console.log(error)
                seterror(error.message);
                return;
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={HendleSignup} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name='name' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo url</span>
                                </label>
                                <input type="text" placeholder="Photo url" name='imgurl' className="input input-bordered" />
                            </div>
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

                            </div>
                            <label className="label">
                                <p>Have an account<NavLink className="ml-2 text-green-500" to="/login">Login</NavLink></p>
                            </label>
                            <div>
                                {
                                    errors && <p className="text-red-600 text-base">{errors}</p>
                                }
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;