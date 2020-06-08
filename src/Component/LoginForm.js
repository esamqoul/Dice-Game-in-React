import React from 'react';
import SignIn from "./SignIn";
import SignUp from "./SignUp"

import Tabs from './Tabs';

import { Main } from "./Style"

import Logo from "./images/dice-logo.svg";

function Login() {
    return (
        <div className="login-box">
            <Main><img style={{ width: "130px" }} src={Logo} alt="Dice Logo" /></Main>
            <Tabs>
                <div label="SOGN IN">
                    <SignIn />
                </div>
                <div label="SIGN UP">
                    <SignUp />
                </div>
            </Tabs>
        </div>
    );
}
const container = document.createElement('div');
document.body.appendChild(container);
export default Login;
