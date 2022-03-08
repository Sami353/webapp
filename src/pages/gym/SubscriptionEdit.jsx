import { Link } from "react-router-dom";
import "./gym.css";
import { Publish } from "@material-ui/icons";

export default function SubscriptionEdit() {
    return (
        <div className="subscriptionEdit">
            <div className="subscriptionEditTitleContainer">
                <h1 className="subscriptionEditTitle">Subscription Edit</h1>
                <Link to="/newsubscription">
                    <button className="subscriptionEditAddButton">Create</button>
                </Link>
            </div>
            <div className="subscriptionEditBottom">
                <form className="subscriptionEditForm">
                    <div className="subscriptionEditFormLeft">
                        <label>Subscription Name</label>
                        <input type="text" placeholder="Apple AirPod" />
                        <div className="subscriptionEditFormLeft">
                            <label>Opening Time</label>
                            <input type="text" placeholder="5:00am - 7:00pm" />
                        </div>
                        <div className="subscriptionEditFormLeft">
                            <label>Package</label>
                            <div className="subscriptionEditFormLeftPackage">
                                <label>Duration</label>
                                <input type="text" placeholder="3 months" />
                                <label>Time</label>
                                <input type="text" placeholder="3 months" />
                            </div>
                        </div>
                        <div className="subscriptionEditFormLeft">
                            <label>Starting On</label>
                            <input type="text" placeholder="March 8, 2022" />
                        </div>
                        <div className="subscriptionEditFormLeft">
                            <label>Starting From</label>
                            <input type="text" placeholder="March 8, 2022" />
                        </div>
                        <div className="subscriptionEditFormLeft">
                            <label>Subscription ID</label>
                            <input type="text" placeholder="0123456789" />
                        </div>
                        <div className="subscriptionEditFormLeft">
                            <label>Gym ID</label>
                            <input type="text" placeholder="0001" />
                        </div>
                    </div>
                    <div className="subscriptionEditFormRight">
                        <div className="subscriptionEditUpload">
                            <img src="https://th.bing.com/th/id/R.238334602cbd48e19e3fc7c1940a2b09?rik=8tVv0chIbwB1UA&riu=http%3a%2f%2fstatic.giga.de%2fwp-content%2fuploads%2f2018%2f07%2fapple-airpods-i7s-tws-q_giga-P1066073-rcm992x0.jpg&ehk=NknVQ7tyWud%2bE77KaYZenpQLHnMTiGtLHl7pEv97BWQ%3d&risl=&pid=ImgRaw&r=0" alt="" className="subscriptionEditUploadImg" />
                            <label for="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </div>
                        <button className="subscriptionEditButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
