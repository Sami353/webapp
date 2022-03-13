import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import "./login.css";
import { refreshTokenSetup } from './refreshTokenSetup';
import GoogleLogo from "../image/GoogleLogo.png";

function SignInGoogle() {
    const clientId = '7315294568-99n503kvjkbsskbsrgclafbv7mh6m4g1.apps.googleusercontent.com';

    const onSuccess = (res) => {
        console.log('Login Success: currentUser:', res.profileObj);
        refreshTokenSetup(res);
    };
    const onFailure = (res) => {
        console.log('Login failed: res:', res);
    };
    const {signIn} = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        isSignedIn: true,
        accessType: 'offline',
    });
    return (
        <button onClick={signIn} className="button">
            <img src={GoogleLogo} 
            alt='google'
            className='imgGoogle'></img>
            <span className='buttonText'>Sign in with Google</span>
        </button>
    )
}

export default SignInGoogle
