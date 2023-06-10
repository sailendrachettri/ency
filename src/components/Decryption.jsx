import React, { useState } from 'react'

function Decryption() {
    // state variables
    const [text, setText] = useState("");
    const [detext, setDecryptText] = useState("");
    const [secrettext, setSecretText] = useState("");


    // function
    const methodOnChange = (event) => {
        setText(event.target.value);
    }

    const copyText = () => {
        navigator.clipboard.writeText(detext);
        let txt = document.getElementById('textDisplayBox2');
        txt.select();
    }

    const clearTextarea = () => {
        setText("");
        setDecryptText("");
        setSecretText("");
    }

    const decryptText = () => {
        let spinnerHide = document.getElementById('LoadingSpinner');
        setDecryptText("Loading...");

        let str = "";
        let getCharNumber = [];

        if (text.length === 0 || text === ' ') {
            setText("Please enter something!");
            setDecryptText("Output window!");
            spinnerHide.style.display = "none";
        }
        else {
            spinnerHide.style.display = "block";

            let secretKeyLength = secrettext.length;
            if (secretKeyLength === 0)
                secretKeyLength = 2;


            for (let i = 0; i < text.length; i++) {
                getCharNumber.push(text.charCodeAt(i) - secretKeyLength); // subtracting 2 and pushing each character into array
            }

            // converting back in char and pusing it into str variable
            for (let i = 0; i < getCharNumber.length; i++) {
                // this is for space - origin value of space 32 but we added -2 so 30
                if (getCharNumber[i] === 32 - secretKeyLength) {
                    str += String.fromCharCode(32); // if 30 add 32 for space
                }
                else
                    str += String.fromCharCode(getCharNumber[i]); // fronCharCode(97)--> 'a';

            }

            setTimeout(() => {
                spinnerHide.style.display = "none"; // turn off spinner in {time} sec.
                setDecryptText(str);
            }, 2000);
        }
    }

    // private Key Input
    const secretOnChange = (e) => {
        setSecretText(e.target.value);
    }

    const showPrivateKeyInput = () => {
        const secretKey = document.getElementById("privateKeyInputField2");
        setSecretText(secretKey.value);

        if (secretKey.style.display === 'none')
            secretKey.style.display = 'block';
        else
            secretKey.style.display = 'none';
    }


    return (
        <>
            <div className="container my-4">
                <div className="d-flex align-items-center">
                    <h4 className='mt-4 headerText'>Decryption</h4>
                    {/* Loading spinner */}
                    <div className="spinner-grow" role="status" id='LoadingSpinner' style={{ display: "none" }}>
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>

                <div className="row mt-4 titleFont">
                    <div className="col">
                        <h5 className='headerInfoColor'>Enter your text to decrypt</h5>
                        <div className="mb-3">
                            <textarea className="form-control boxBgColor" id="textInputBox" rows="5" placeholder='Start typing...' onChange={methodOnChange} value={text}></textarea>

                            <div className="d-flex mt-2 align-items-center justify-content-center">
                                <div className="form-check form-switch mx-2">
                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={showPrivateKeyInput} />
                                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Secret key</label>
                                </div>
                                <div>
                                    <input onChange={secretOnChange} value={secrettext} className="form-control" id="privateKeyInputField2" style={{ display: "none" }} type="text" placeholder="eg: frnd" />
                                </div>
                            </div>

                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="button" className="btn  btn-outline-primary mx-2" onClick={decryptText}>Start Decryption</button>
                            <button type="button" className="btn  btn-outline-primary" onClick={clearTextarea}>Reset</button>
                        </div>
                    </div>
                    <div className="col">
                        <h5 className='headerInfoColor'>Your decrypted text</h5>
                        <div className="mb-3">
                            <textarea className="form-control boxBgColor" id="textDisplayBox2" rows="5" placeholder='Decrypted text' value={detext} readOnly></textarea>
                            <div className="d-flex justify-content-center">
                                <button type="button" className="btn btn-outline-primary mt-3" onClick={copyText}>Copy text</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Decryption