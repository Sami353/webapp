import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import "./login.css";
import { refreshTokenSetup } from './refreshTokenSetup';

function SignInGoogle() {
    const clientId = 'YOUR_CLIENT_ID.apps.googleusercontent.com';

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
        // <GoogleLogin className='signInWithGoogle'
        //     clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        //     buttonText="Sign in with Google"
        //     onSuccess={handleLogin}
        //     onFailure={handleLogin}
        //     cookiePolicy={'single_host_origin'}
        // />
        <button onClick={signIn} className="button">
            <img src="https://www.outsystems.com/Forge_BL/rest/ComponentThumbnail/GetURL_ComponentThumbnail?ProjectImageId=25044" 
            alt='google'
            className='imgGoogle'></img>
            <span className='buttonText'>Sign In with Google</span>
        </button>
    )
}

export default SignInGoogle
