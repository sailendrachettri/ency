import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar(props) {
    // hooks
    const navigate = useNavigate();

    // methods
    const goToHome = () => {
        // top loading bar progress
        props.setProgress(50);
        setTimeout(() => {
            props.setProgress(100);
            navigate("/");
        }, 500);
    }
    const goToPrime = () => {
        // top loading bar progress
        props.setProgress(50);
        setTimeout(() => {
            props.setProgress(100);
            navigate("/checkprime");
        }, 500);
    }
    const goToEncyDency = () => {
        // // top loading bar progress
        // props.setProgress(50);
        // setTimeout(() => {
        //     props.setProgress(100);
        //     navigate("/encrydecry");
        // }, 500);

        if (localStorage.getItem('token')) {
            navigate('/encrydecry')
        }
        else {
            navigate('/login')
        }


    }
    const goToAbout = () => {
        // top loading bar progress
        props.setProgress(50);
        setTimeout(() => {
            props.setProgress(100);
            navigate("/about");
        }, 500);
    }

    const logoutMethod = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <p className="navbar-brand logo" role='button' > <span onClick={goToHome} id='displayUser'> Encryasmi</span></p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <p className={`nav-link ${window.location.pathname === "/encrydecry" ? "active" : ""}`} aria-current="page" role='button' onClick={goToEncyDency}>Home</p>
                            </li>
                            <li className="nav-item">
                                <p className={`nav-link ${window.location.pathname === "/checkprime" ? "active" : ""}`} role='button' onClick={goToPrime}>Prime</p>
                            </li>
                            <li className="nav-item">
                                <p className={`nav-link ${window.location.pathname === "/about" ? "active" : ""}`} role='button' onClick={goToAbout}>Developer</p>
                            </li>
                        </ul>
                        {/* ! "not login" ? "than show login/signup : "else show logout and username" */}
                        {!localStorage.getItem('token') ? <form className="d-flex">
                            <Link to="/login" className='btn btn-outline-primary mx-1' role='button'>Login</Link>
                            <Link to="/signup" className='btn btn-outline-primary mx-1' role='button'>Signup</Link>

                        </form> : <button className='btn btn-outline-primary mx-1' onClick={logoutMethod}>Logout</button>}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar