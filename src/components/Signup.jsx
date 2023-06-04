import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Signup(props) {
    // states
    const [credendials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "", phone: 0 })

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

    const validateAndSignup = async (e) => {
        e.preventDefault()

        // user validation
        const { name, email, password, phone } = credendials

        const response = await fetch("http://localhost:5000/v1/auth/signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password, phone })
        })
        const json = await response.json()
        console.log(json);

        if (json.success) {
            // save the auth token and redirect
            localStorage.setItem('token', json.authtoken)
            navigate("/encrydecry")
        }
        else {
            alert("Invalid details")
        }
    }

    const onChangeMethod = (e) => {
        setCredentials({ ...credendials, [e.target.name]: e.target.value })
    }

    return (
        <>
            <form onSubmit={validateAndSignup}>
                <div className="justify-content-center d-flex align-items-center mt-5">
                    <div className="container w-50 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" name='name' onChange={onChangeMethod} placeholder="John Doe" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" name='email' onChange={onChangeMethod} placeholder="name@example.com" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" name='password' onChange={onChangeMethod} placeholder="password" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" id="cpassword" name='cpassword' onChange={onChangeMethod} placeholder="Confirm password" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone Number</label>
                            <input type="number" className="form-control" id="phone" name='phone' onChange={onChangeMethod} placeholder="eg: 9832XXX894" />
                        </div>
                        <div className="d-grid gap-2 col-4 mx-auto">
                            <button className="btn btn-sm btn-outline-primary" type="submit">Regestered</button>
                            <p>Already have an account? <span onClick={goToLogin} className='customHref'> Login </span> here</p>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Signup