import React from 'react'
import { useNavigate } from 'react-router-dom';

function Signup(props) {
    // hooks
    const navigate = useNavigate();

    // methods
    const goToSignUp = () => {
        // top loading bar progress
        props.setProgress(50);
        setTimeout(() => {
            props.setProgress(100);
            navigate("/signup");
        }, 500);
    }
    const validateAndLoggedInUser = () => {
        // TODO:

        // top loading bar progress
        props.setProgress(50);
        setTimeout(() => {
            props.setProgress(100);
            navigate("/encrydecry");
        }, 500);

    }

    return (
        <>
            <div className="justify-content-center d-flex align-items-center" style={{ height: "78vh" }}>
                <div className="container w-50 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="loginEmail" placeholder="john@email.com" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="loginPassword" placeholder="password" />
                    </div>
                    <div className="d-grid gap-2 col-4 mx-auto">
                        <button className="btn btn-sm btn-outline-primary" type="button" onClick={validateAndLoggedInUser}>Login</button>
                        <p>Don't have an account? <span className='customHref' onClick={goToSignUp}> Create </span> here</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup