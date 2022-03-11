import "./login.css";

export default function LogIn() {
    return (
        <div className="logInPage">
            <h3 className="logInHeader">LogIn Page</h3>
            <div className="userUpdate">
                <div className="logInUpdateLeft">
                    <img src="https://th.bing.com/th/id/R.2510937162c679a068a9b349159f4a4b?rik=LS3sa211B9fk9A&pid=ImgRaw&r=0" alt="" className="LogInBanner" />
                </div>
                <div className="logInUpdateRight">
                    <form className="userUpdateForm">
                        <div className="logInContainer">
                            <div className="userUpdateLogo">
                                <h1 className="logInLogo">Logo</h1>
                            </div>
                            <h3 className="logInHeading">Welcome to HealthFix</h3>
                            <div className="logInDetailsItem">
                                <label>User Name or Email</label>
                                <input type="text" placeholder="annabeck998@gmail.com" className="logInUpdateInput" />
                            </div>
                            <div className="logInDetailsItem">
                                <label>Password</label>
                                <input type="password" placeholder="password" className="logInUpdateInput" />
                            </div>
                            <div className="logInDetailsItem">
                                <label>
                                    Forgot Password?
                                </label>
                            </div>
                            <div className="userUpdateRight">
                                <button className="logInUpdateButton">Log In</button>
                            </div>
                            {/* <br/>
                        <div>------------or------------</div>
                        <div>Sign in with Google</div>
                        <div>
                        New to HealthFix?
                        <span>Create Account</span>
                    </div> */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
