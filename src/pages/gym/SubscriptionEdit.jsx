import { Link } from "react-router-dom";
import "./gym.css";

export default function SubscriptionEdit() {
    return (
        <div className="subscriptionEdit">
            <div className="subEditTitleContainer">
                <h1 className="subscriptionEditTitle">Edit Subscriptions</h1>
                <Link to="/newsubscription">
                    <button className="subscriptionEditAddButton">Create</button>
                </Link>
            </div>
            <div className="gymSubContainer">
                <div className="gymSubUpdate">
                    <form className="subscriptionEditForm">
                        <div>
                            <div className="gymSubUpdateRight">
                                <span className="gymSubUpdateUpload">
                                    <img src="https://g4l-images.imgix.net/5c500e5ce4b09836a92fc8e5/c67c1833783526c4e12e9c44831e74e4?fit=crop&auto=format,compress?fit=crop&w=1020&auto=format,compress" alt="" className="gymSubUpdateImg" />
                                </span>
                                <span className="gymSubImgUploadButton">
                                    <label htmlFor="file">
                                        <div className="gymSubImageUploadBtn">
                                            <span className="imgUploadBtnUpload">
                                                Upload New Image
                                            </span>
                                            <span className="ImgUploadBtnRemove">
                                                Remove
                                            </span>
                                        </div>
                                        <div className="gymSubImageDescriptn">
                                            Image should be at least 400 x 400px as a png or jpeg file.
                                        </div>
                                    </label>
                                    <input type="file" id="file" style={{ display: "none" }} />
                                </span>
                            </div>
                            <h3 className="gymSubHeading">Enter your details below:</h3>
                            <div className="gymSubUpdateItem">
                                <label>Subscription Name</label>
                                <input type="text" placeholder="HealthFix" className="gymSubUpdateInput" />
                            </div>
                            <div className="gymSubUpdateItem">
                                <label>Opening Time</label>
                                <input type="text" placeholder="5:00am - 7:00pm" className="gymSubUpdateInput" />
                            </div>
                            <div className="gymEditItemNameContainer">
                                <div className="gymSubUpdatePackage">Packages: </div>
                                <div className="gymSubSubTopics">
                                    <div className="gymEditUpdateItemName">
                                        <label>Duration</label>
                                        <input type="text" placeholder="3 months" className="gymEditUpdateInputName" />
                                    </div>
                                    <div className="gymEditUpdateItemName">
                                        <label>Time</label>
                                        <input type="text" placeholder="3 months" className="gymEditUpdateInputName" />
                                    </div>
                                </div>
                            </div>
                            <div className="gymSubItemNameContainer">
                                <div className="gymSubUpdateItemName">
                                    <label>Starting On</label>
                                    <input type="text" placeholder="March 13, 2022" className="gymSubUpdateInputName" />
                                </div>
                                <div className="gymSubUpdateItemName">
                                    <label>Starting From</label>
                                    <input type="text" placeholder="March 13, 2022" className="gymSubUpdateInputName" />
                                </div>
                            </div>
                            <div className="gymSubUpdateItem">
                                <label>Subscription ID</label>
                                <input type="text" placeholder="0123456789" className="gymSubUpdateInput" />
                            </div>
                            <div className="gymSubUpdateItem">
                                <label>Gym ID</label>
                                <input type="text" placeholder="0001" className="gymSubUpdateInput" />
                            </div>
                            <div className="gymSubUpdateRight">
                                <button className="gymSubUpdateButton">Update</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
