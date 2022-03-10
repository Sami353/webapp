import "./login.css";

export default function LogIn() {
    return (
        <div className="logInPage">
            <h3>LogIn Page</h3>
            <div className="userUpdate">
                <div className="userUpdateLeft">
                    <img src="https://th.bing.com/th/id/R.2510937162c679a068a9b349159f4a4b?rik=LS3sa211B9fk9A&pid=ImgRaw&r=0" alt="" className="LogInBanner" />
                </div>
                <div className="userUpdateRight">
                    <form className="userUpdateForm">
                        <div className="logInContainer">
                            <div className="userUpdateImage">
                                <img src="https://th.bing.com/th/id/R.9ea501d1603a3ae43af22246c1fb6aa7?rik=JzDmX1ihdgCSgg&riu=http%3a%2f%2fsuperawesomevectors.com%2fwp-content%2fuploads%2f2015%2f10%2fflat-dumbbell-icon.jpg&ehk=GaknqxOCx616OzyEfLkNysWYwaXKoyZbfE7WNUcQg8M%3d&risl=&pid=ImgRaw&r=0" alt="logo" className="userUpdateImg" />
                            </div>
                            <h3 className="userHeading">Welcome to HealthFix</h3>
                            <div className="userUpdateItem">
                                <label>User Name or Email</label>
                                <input type="text" placeholder="annabeck998@gmail.com" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Password</label>
                                <input type="password" placeholder="password" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                Forgot Password
                            </div>
                            <div className="userUpdateRight">
                                <button className="userUpdateButton">Log In</button>
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
