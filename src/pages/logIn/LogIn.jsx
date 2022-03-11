import { sliderImages } from "../../dummyData";
import ImageSlider from "./ImageSlider";
import "./login.css";

export default function LogIn() {
    return (
        <div className="logInPage">
            <h3 className="logInHeader">LogIn Page</h3>
            {/* <button className="logInCloseButton">Close</button> */}
            <div className="userUpdate">
                <div className="logInUpdateLeft">
                    <ImageSlider slides={sliderImages}/>
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
                            <div className="logInDetailsItemForgotPw">
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
