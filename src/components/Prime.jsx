import React, { useState } from 'react'

function Prime() {
    // state variables
    const [value, setValue] = useState("");
    const [text, setText] = useState(" ");

    // functions
    const checkPrime = (e) => {
        let numberInput = document.getElementById('numberInput').value;
        setValue(numberInput);

        if (numberInput < 2) {
            setText("Number should be greaterthan or equals to 2.");
            setValue("");
        }
        else {

            // code to check prime number
            let flag = true;
            for (let i = 2; i <= numberInput / 2; i++) {
                if (numberInput % i === 0) {
                    flag = false;
                    break;
                }
            }

            setText("is prime number.");
            if (flag === true)
                setText("  is a prime number.");
            else
                setText("  is not a prime number.");
        }
        e.preventDefault();
    }

    return (
        <>
            <div className="container containerHeight75vh w-75">
                <div className="container">
                    <div className="container">
                        <h3 className='mt-4 headerText2'>Prime number</h3>
                        <div className='mt-2 mb-5'>
                            <p>   A prime number is a whole number greater than 1 whose only factors are <strong> 1 and itself</strong>. A factor is a whole number that can be divided evenly into another number. </p>
                            <p> The first few prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 etc. </p>
                        </div>
                    </div>
                </div>
                <div className="container my-4 d-flex justify-content-center">
                    <form className="row g-3">
                        <div className="col-auto">
                            <input type="number" className="form-control" id="numberInput" placeholder="Enter a number" />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-outline-primary mb-3" onClick={checkPrime}>Check Prime</button>
                        </div>
                    </form>
                </div>

                <div className="container d-flex justify-content-center align-items-center flex-column my-5">
                    <h3 className='headerText my-4' style={{ fontFamily: "cursive" }}>OUTPUT </h3>
                    <p> <span style={{ fontSize: "20px", fontFamily: "cursive" }}> {value} </span>  {text === " " ? "Nothing to show!" : text}</p>
                </div>
            </div>
        </>
    )
}

export default Prime