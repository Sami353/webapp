import { Link } from "react-router-dom";
import "./product.css";
import { Publish } from "@material-ui/icons";

export default function Product() {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product Edit</h1>
                <Link to="/newproduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder="Apple AirPod" />
                        <div className="productFormLeft">
                            <label>Brand</label>
                            <input type="text" placeholder="Apple" />
                        </div>
                        <div className="productFormLeft">
                            <label>Product Type</label>
                            <input type="text" placeholder="Airpods" />
                        </div>
                        <div className="productFormLeft">
                            <label>Original Price</label>
                            <input type="text" placeholder="Rs. 555" />
                        </div>
                        <div className="productFormLeft">
                            <label>Discounted Price</label>
                            <input type="text" placeholder="Rs. 455" />
                        </div>
                        <div className="productFormLeft">
                            <label>Seller Name</label>
                            <input type="text" placeholder="Anna Becker" />
                        </div>
                        <div className="productFormRight">
                            <div className="productUpload">
                                <img src="https://th.bing.com/th/id/R.238334602cbd48e19e3fc7c1940a2b09?rik=8tVv0chIbwB1UA&riu=http%3a%2f%2fstatic.giga.de%2fwp-content%2fuploads%2f2018%2f07%2fapple-airpods-i7s-tws-q_giga-P1066073-rcm992x0.jpg&ehk=NknVQ7tyWud%2bE77KaYZenpQLHnMTiGtLHl7pEv97BWQ%3d&risl=&pid=ImgRaw&r=0" alt="" className="productUploadImg" />
                            </div>
                            <div className="productImgUploadButton">
                                <label for="file">
                                    <Publish />
                                </label>
                                <input type="file" id="file" style={{ display: "none" }} />
                            </div>
                            <button className="productButton">Update</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
