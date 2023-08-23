import React, { useState } from "react";
import "./formpage.css";
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const [email1, setEmail1] = useState("");
    const [emailError1, setEmailError1] = useState("");
    const [handphone1, setHandphone1] = useState("");
    const [handphoneError1, setHandphoneError1] = useState("");

    const [email2, setEmail2] = useState("");
    const [emailError2, setEmailError2] = useState("");
    const [handphone2, setHandphone2] = useState("");
    const [handphoneError2, setHandphoneError2] = useState("");

    const navigate = useNavigate();

    const handleEmailChange1 = (event) => {
        const newEmail = event.target.value;
        setEmail1(newEmail);
        validateEmail(newEmail, setEmailError1);
    };

    const handleButtonClick = () => {
        navigate('/SuccessPage');
      };

    const handleHandphoneChange1 = (event) => {
        const newHandphone = event.target.value;
        setHandphone1(newHandphone);
        validateHandphone(newHandphone, setHandphoneError1);
    };

    const handleEmailChange2 = (event) => {
        const newEmail = event.target.value;
        setEmail2(newEmail);
        validateEmail(newEmail, setEmailError2);
    };

    const handleHandphoneChange2 = (event) => {
        const newHandphone = event.target.value;
        setHandphone2(newHandphone);
        validateHandphone(newHandphone, setHandphoneError2);
    };

    const validateEmail = (inputEmail, setEmailError) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(inputEmail)) {
            setEmailError("Please enter a valid email address.");
        } else {
            setEmailError("");
        }
    };

    const validateHandphone = (inputHandphone, setHandphoneError) => {
        const handphonePattern = /^\d{8}$/;
        if (!handphonePattern.test(inputHandphone)) {
            setHandphoneError("Please enter a valid handphone number.");
        } else {
            setHandphoneError("");
        }
    };

    return (
        <div className="form-container">
            <div className="form">
                <h2>Adopt A Pet!</h2>
                <form>
                    <label>First name:</label>
                    <input type="text" required />
                    <label>Last name:</label>
                    <input type="text" required />
                    <label>Email:</label>
                    <input
                        type="email"
                        required
                        value={email1}
                        onChange={handleEmailChange1}
                    />
                    {emailError1 && <p className="error">{emailError1}</p>}
                    <label>Handphone Number:</label>
                    <input
                        type="tel"
                        required
                        value={handphone1}
                        onChange={handleHandphoneChange1}
                    />
                    {handphoneError1 && <p className="error">{handphoneError1}</p>}
                    <label>Pet of your choice:</label>
                    <select name="petChoice">
                        <option value="Munchkin Cat">Munchkin Cat</option>
                        <option value="Singapore Special">Singapore Special</option>
                        <option value="Flat Face Cat">Flat Face Cat</option>
                        <option value="Golden Retriever">Golden Retriever</option>
                        <option value="Rottweiler Dog">Rottweiler Dog</option>
                        <option value="Labrador">Labrador</option>
                    </select>
                    <button onClick={handleButtonClick}>Submit</button>
                </form>
            </div>
            <div className="form">
                <h2>Rehoming furbaby</h2>
                <form>
                    <label>First name:</label>
                    <input type="text" required />
                    <label>Last name:</label>
                    <input type="text" required />
                    <label>Email:</label>
                    <input
                        type="email"
                        required
                        value={email2}
                        onChange={handleEmailChange2}
                    />
                    {emailError2 && <p className="error">{emailError2}</p>}
                    <label>Handphone Number:</label>
                    <input
                        type="tel"
                        required
                        value={handphone2}
                        onChange={handleHandphoneChange2}
                    />
                    {handphoneError2 && <p className="error">{handphoneError2}</p>}
                    <label>What type of pet?:</label>
                    <select name="petType">
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                    </select>
                    <button onClick={handleButtonClick}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Form;
