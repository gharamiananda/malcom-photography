import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebase.init';
import { signOut } from 'firebase/auth';



const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const logOut = () => {
        signOut(auth);

    }
    return (
        <header>

            <div className="header__bottom bg-info ">
                <nav className="navbar navbar-expand-lg navbar-light  custom__nav">
                    <div className="container">

                        <a className="navbar-brand" href="#"> Malcom Photography </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 position-relative">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/"><span>Home</span></Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><span>About</span></a>
                                </li>

                                {!user ? <>  <li className="nav-item">
                                    <Link to='/login' className="nav-link"><span>Login</span></Link>
                                </li>
                                    <li className="nav-item">
                                        <Link to='/register' className="nav-link"><span>Register</span></Link>
                                    </li></> : <button onClick={logOut}>Sign Out</button>}


                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <span>Our Services</span>
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">

                                        <li><a className="dropdown-item" href="#"> COMMERCIAL REPAIRS</a></li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li><a className="dropdown-item" href="#"> DOMESTIC REPAIRS</a></li>
                                    </ul>

                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><span>Contact</span></a>
                                </li>

                            </ul>


                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;