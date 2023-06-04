import React from 'react'
import { useNavigate } from 'react-router-dom';

function Signup(props) {
    // hooks
    const navigate = useNavigate();

    const goToLogin = () => {
        // top loading bar progress
        props.setProgress(50);
        setTimeout(() => {
            props.setProgress(100);
            navigate("/login");
        }, 500);
    }
    const goToEncryDencry = () => {
        // top loading bar progress
        props.setProgress(50);
        setTimeout(() => {
            props.setProgress(100);
            navigate("/encrydecry");
        }, 500);
    }

    return (
        <>
            <div className="justify-content-center d-flex align-items-center mt-5">
                <div className="container w-50 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="password" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="cpassword" placeholder="Confirm password" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                        <input type="number" className="form-control" id="phone" placeholder="eg: 9832XXX894" />
                    </div>
                    <div className="d-grid gap-2 col-4 mx-auto">
                        <p className="btn btn-sm btn-outline-primary" type="button" onClick={goToEncryDencry} >Regestered</p>
                        <p>Already have an account? <span onClick={goToLogin} className='customHref'> Login </span> here</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup