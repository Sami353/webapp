import { sliderImages } from "../../dummyData";
import ImageSlider from "./ImageSlider";
import "./login.css";
import Logo from "../image/Logo.png";
import SignInGoogle from "./SignInGoogle";

export default function LogIn() {
    return (
        <div className="logInPage">
            <div className="logInCard">
                <div className="logInUpdateLeft">
                    <ImageSlider slides={sliderImages} className="logInImageSlider" />
                </div>
                <div className="logInUpdateRight">
                    <form className="logInForm">
                        <div className="logInContainer">
                            <div className="logInPageLogo">
                                <img src={Logo} alt="logo" className="logInLogo" />
                            </div>
                            <h3 className="logInHeading">Welcome to HealthFix</h3>
                            <div className="logInDetails">
                                <div className="logInDetailsItem">
                                    <label>User Name or Email</label>
                                    <input type="text" placeholder="annabeck998@gmail.com" className="logInUpdateInput" />
                                </div>
                                <div className="logInDetailsItem">
                                    <label>Password</label>
                                    <input type="password" placeholder="password" className="logInUpdateInput" />
                                </div>
                                <div className="logInForgotPw">
                                    <label>
                                        Forgot Password?
                                    </label>
                                </div>
                            </div>
                            <div className="logInBtnContainer">
                                <button className="logInUpdateButton">SIGN IN</button>
                            </div>
                            <div className="logInOr">------------ or ------------</div>
                            <div className="logInGoogle">
                                <SignInGoogle /></div>
                            <div className="logInDetailsItemRegister">
                                <div className="logInLine1">
                                    To Register an account,
                                </div>
                                <div className="logInLine2">
                                    <span className="logInContact">
                                        <a href="#">Contact</a> 
                                    </span>
                                    Administration.
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
