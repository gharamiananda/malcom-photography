import React from 'react';
import auth from '../../Firebase/firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import './Login.css'



const Login = () => {
    // const [user, loading, error] = useAuthState(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

    let location = useLocation();
    let from = location.state?.from?.pathname || "/";


    console.log(from);

    const handleForm = (e) => {



        e.preventDefault();
        const name = e.target.username.value;
        const password = e.target.password.value;
        // console.log(name, password);
        signInWithEmailAndPassword(name, password);


    }

    if (user) {
        navigate(from, { replace: true });

    }

    return (
        <div className="col-md-4">
            <div id="logreg-forms ">
                <form class="form-signin">
                    <h1 class="h3 mb-3 font-weight-normal" > Sign in</h1>
                    <div class="social-login">
                        <button class="btn facebook-btn social-btn" type="button"><span><i class="fab fa-facebook-f"></i> Sign in with Facebook</span> </button>
                        <button class="btn google-btn social-btn" type="button"><span><i class="fab fa-google-plus-g"></i> Sign in with Google+</span> </button>
                    </div>
                    <p> OR  </p>
                    <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="" />
                    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="" />

                    <button class="btn btn-success btn-block" type="submit"><i class="fas fa-sign-in-alt"></i> Sign in</button>
                    <a href="#" id="forgot_pswd">Forgot password?</a>
                    <hr />
                    {/* <!-- <p>Don't have an account!</p>  --> */}
                    <button class="btn btn-primary btn-block" type="button" id="btn-signup"><i class="fas fa-user-plus"></i> Sign up New Account</button>
                </form>

                <form action="/reset/password/" class="form-reset">
                    <input type="email" id="resetEmail" class="form-control" placeholder="Email address" required="" autofocus="" />
                    <button class="btn btn-primary btn-block" type="submit">Reset Password</button>
                    <a href="#" id="cancel_reset"><i class="fas fa-angle-left"></i> Back</a>
                </form>

                <form action="/signup/" class="form-signup">
                    <div class="social-login">
                        <button class="btn facebook-btn social-btn" type="button"><span><i class="fab fa-facebook-f"></i> Sign up with Facebook</span> </button>
                    </div>
                    <div class="social-login">
                        <button class="btn google-btn social-btn" type="button"><span><i class="fab fa-google-plus-g"></i> Sign up with Google+</span> </button>
                    </div>

                    {/* <p style="text-align:center">OR</p> */}

                    <input type="text" id="user-name" class="form-control" placeholder="Full name" required="" autofocus="" />
                    <input type="email" id="user-email" class="form-control" placeholder="Email address" required autofocus="" />
                    <input type="password" id="user-pass" class="form-control" placeholder="Password" required autofocus="" />
                    <input type="password" id="user-repeatpass" class="form-control" placeholder="Repeat Password" required autofocus="" />

                    <button class="btn btn-primary btn-block" type="submit"><i class="fas fa-user-plus"></i> Sign Up</button>
                    <a href="#" id="cancel_signup"><i class="fas fa-angle-left"></i> Back</a>
                </form>


            </div>
        </div>


    );
};

export default Login;