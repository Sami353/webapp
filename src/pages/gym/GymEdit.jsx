import { Link } from "react-router-dom";
import "./gym.css";
import { Publish } from "@material-ui/icons";

export default function GymEdit() {
    return (
        <div className="gymEdit">
            <div className="gymEditTitleContainer">
                <h1 className="gymEditTitle">Edit</h1>
                <Link to="/newgym">
                    <button className="gymEditAddButton">Create</button>
                </Link>
            </div>
            <div className="gymEditBottom">
                <form className="gymEditForm">
                    <div className="gymEditFormLeft">
                        <label>Gym Name</label>
                        <input type="text" placeholder="HealthFix" />
                        <div className="gymEditFormLeft">
                            <label>Opening Time</label>
                            <input type="text" placeholder="5:00am - 7:00pm" />
                        </div>
                        <div className="gymEditFormLeft">
                            <label>Package</label>
                            <div className="gymEditFormLeftPackage">
                                <label>Duration</label>
                                <input type="text" placeholder="3 months" />
                                <label>Time</label>
                                <input type="text" placeholder="3 months" />
                            </div>
                        </div>
                        <div className="gymEditFormLeft">
                            <label>Description</label>
                            <input type="text" placeholder="Lorem Ipsum" />
                        </div>
                        <div className="gymEditFormRight">
                            <div className="gymEditUpload">
                                <img src="https://th.bing.com/th/id/R.238334602cbd48e19e3fc7c1940a2b09?rik=8tVv0chIbwB1UA&riu=http%3a%2f%2fstatic.giga.de%2fwp-content%2fuploads%2f2018%2f07%2fapple-airpods-i7s-tws-q_giga-P1066073-rcm992x0.jpg&ehk=NknVQ7tyWud%2bE77KaYZenpQLHnMTiGtLHl7pEv97BWQ%3d&risl=&pid=ImgRaw&r=0" alt="" className="gymEditUploadImg" />
                            </div>
                            <div className="gymImgUploadButton">
                                <label for="file">
                                    <Publish />
                                </label>
                                <input type="file" id="file" style={{ display: "none" }} />
                            </div>
                            <button className="gymEditButton">Update</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
