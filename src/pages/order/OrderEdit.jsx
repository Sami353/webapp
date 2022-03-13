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
                    <div>
                        <div className="orderUpdateRight">
                            <span className="orderUpdateUpload">
                                <img src="https://technofaq.org/wp-content/uploads/2019/01/word-image-56.png" alt="" className="orderUpdateImg" />
                            </span>
                            <span className="orderImgUploadButton">
                                <label htmlFor="file">
                                    <div className="orderImageUploadBtn">
                                        <span className="imgUploadBtnUpload">
                                            Upload New Image
                                        </span>
                                        <span className="ImgUploadBtnRemove">
                                            Remove
                                        </span>
                                    </div>
                                    <div className="orderImageDescriptn">
                                        Image should be at least 400 x 400px as a png or jpeg file.
                                    </div>
                                </label>
                                <input type="file" id="file" style={{ display: "none" }} />
                            </span>
                        </div>
                        <h3 className="orderHeading">Enter order details below:</h3>
                        <div className="orderItemNameContainer">
                            <div className="orderUpdateItemName">
                                <label>Order Name</label>
                                <input type="text" placeholder="Apple Airpods" className="orderUpdateInputName" />
                            </div>
                            <div className="orderUpdateItemName">
                                <label>Date</label>
                                <input type="text" placeholder="March 13, 2022" className="orderUpdateInputName" />
                            </div>
                        </div>
                        <div className="orderItemNameContainer">
                            <div className="orderUpdateItemName">
                                <label>User Name</label>
                                <input type="text" placeholder="annabeck998" className="orderUpdateInputName" />
                            </div>
                            <div className="orderUpdateItemName">
                                <label>Reciever</label>
                                <input type="text" placeholder="Anna Becker" className="orderUpdateInputName" />
                            </div>
                        </div>
                        <div className="orderUpdateItem">
                            <label>Phone</label>
                            <input type="text" placeholder="+977 9876543210" className="orderUpdateInput" />
                        </div>
                        <div className="orderUpdateItem">
                            <label>Payment Method</label>
                            <input type="text" placeholder="Cash on Delivery" className="orderUpdateInput" />
                        </div>
                        <div className="orderUpdateItem">
                            <label>Total</label>
                            <input type="text" placeholder="Rs. 1100" className="orderUpdateInput" />
                        </div>
                        <div className="orderUpdateItem">
                            <label>Product Count</label>
                            <input type="text" placeholder="2" className="orderUpdateInput" />
                        </div>
                        <div className="orderUpdateRight">
                            <button className="orderUpdateButton">Update</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
