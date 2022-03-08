import { Link } from "react-router-dom";
import "./order.css";
import { Publish } from "@material-ui/icons";

export default function OrderEdit() {
    return (
        <div className="order">
            <div className="orderTitleContainer">
                <h1 className="orderTitle">Edit Order</h1>
                <Link to="/neworder">
                    <button className="orderAddButton">Create</button>
                </Link>
            </div>
            <div className="orderEditBottom">
                <form className="orderForm">
                    <div className="orderFormLeft">
                        <label>Order Name</label>
                        <input type="text" placeholder="Apple AirPod" />
                        <div className="orderFormLeft">
                            <label>Date</label>
                            <input type="text" placeholder="March 4,2022" />
                        </div>
                        <div className="orderFormLeft">
                            <label>User Name</label>
                            <input type="text" placeholder="Anna" />
                        </div>
                        <div className="orderFormLeft">
                            <label>Reciever</label>
                            <input type="text" placeholder="Anna Becker" />
                        </div>
                        <div className="orderFormLeft">
                            <label>Phone</label>
                            <input type="text" placeholder="+977 9123456780" />
                        </div>
                        <div className="orderFormLeft">
                            <label>Payment Method</label>
                            <input type="text" placeholder="Cash on Delivery" />
                        </div>
                        <div className="orderFormLeft">
                            <label>Total</label>
                            <input type="text" placeholder="Rs. 1100" />
                        </div>
                        <div className="orderFormLeft">
                            <label>Product Count</label>
                            <input type="text" placeholder="1" />
                        </div>
                        <div className="productFormRight">
                            <div className="orderUpload">
                                <img src="https://th.bing.com/th/id/R.238334602cbd48e19e3fc7c1940a2b09?rik=8tVv0chIbwB1UA&riu=http%3a%2f%2fstatic.giga.de%2fwp-content%2fuploads%2f2018%2f07%2fapple-airpods-i7s-tws-q_giga-P1066073-rcm992x0.jpg&ehk=NknVQ7tyWud%2bE77KaYZenpQLHnMTiGtLHl7pEv97BWQ%3d&risl=&pid=ImgRaw&r=0" alt="" className="orderUploadImg" />
                            </div>
                            <div className="orderUploadButton">
                                <label for="file">
                                    <Publish />
                                </label>
                                <input type="file" id="file" style={{ display: "none" }} />
                            </div>
                            <button className="orderButton">Update</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
