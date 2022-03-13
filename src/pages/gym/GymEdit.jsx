import { Link } from "react-router-dom";
import "./gym.css";

export default function GymEdit() {
    return (
        <div className="gymEdit">
            <div className="gymEditTitleContainer">
                <h1 className="gymEditTitle">Edit All Gyms</h1>
                <Link to="/newgym">
                    <button className="gymEditAddButton">Create</button>
                </Link>
            </div>
            <div className="gymEditContainer">
                <div className="gymEditUpdate">
                    <form className="gymEditForm">
                        <div>
                            <div className="gymEditUpdateRight">
                                <span className="gymEditUpdateUpload">
                                    <img src="https://g4l-images.imgix.net/5c500e5ce4b09836a92fc8e5/c67c1833783526c4e12e9c44831e74e4?fit=crop&auto=format,compress?fit=crop&w=1020&auto=format,compress" alt="" className="gymEditUpdateImg" />
                                </span>
                                <span className="gymEditImgUploadButton">
                                    <label htmlFor="file">
                                        <div className="gymEditImageUploadBtn">
                                            <span className="imgUploadBtnUpload">
                                                Upload New Image
                                            </span>
                                            <span className="ImgUploadBtnRemove">
                                                Remove
                                            </span>
                                        </div>
                                        <div className="gymEditImageDescriptn">
                                            Image should be at least 400 x 400px as a png or jpeg file.
                                        </div>
                                    </label>
                                    <input type="file" id="file" style={{ display: "none" }} />
                                </span>
                            </div>
                            <h3 className="gymEditHeading">Enter all gym details below:</h3>
                            <div className="gymEditUpdateItem">
                                <label>Gym Name</label>
                                <input type="text" placeholder="HealthFix" className="gymEditUpdateInput" />
                            </div>
                            <div className="gymEditUpdateItem">
                                <label>Opening Time</label>
                                <input type="text" placeholder="5:00am - 7:00pm" className="gymEditUpdateInput" />
                            </div>
                            <div className="gymEditItemNameContainer">
                                <div className="gymEditUpdatePackage">Packages: </div>
                                <div className="gymEditSubTopics">
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
                            <div className="gymEditUpdateItem">
                                <label>Description</label>
                                <input type="text" placeholder="Lorem Ipsum" className="gymEditUpdateInput" />
                            </div>
                            <div className="gymEditUpdateRight">
                                <button className="gymEditUpdateButton">Update</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
