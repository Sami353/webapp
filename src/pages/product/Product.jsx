import { Link } from "react-router-dom";
import "./product.css";
import { Publish } from "@material-ui/icons";

export default function Product() {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Edit Product</h1>
                <Link to="/newproduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productBottom">
                <form className="productForm">
                <div>
                            <div className="productUpdateRight">
                                <span className="productUpdateUpload">
                                    <img src="https://technofaq.org/wp-content/uploads/2019/01/word-image-56.png" alt="" className="productUpdateImg" />
                                </span>
                                <span className="productImgUploadButton">
                                    <label htmlFor="file">
                                        <div className="productImageUploadBtn">
                                            <span className="imgUploadBtnUpload">
                                                Upload New Image
                                            </span>
                                            <span className="ImgUploadBtnRemove">
                                                Remove
                                            </span>
                                        </div>
                                        <div className="productImageDescriptn">
                                            Image should be at least 400 x 400px as a png or jpeg file.
                                        </div>
                                    </label>
                                    <input type="file" id="file" style={{ display: "none" }} />
                                </span>
                            </div>
                            <h3 className="productHeading">Enter product details below:</h3>
                            <div className="productItemNameContainer">
                                <div className="productUpdateItemName">
                                    <label>Name</label>
                                    <input type="text" placeholder="Apple Airpods" className="productUpdateInputName" />
                                </div>
                                <div className="productUpdateItemName">
                                    <label>Brand</label>
                                    <input type="text" placeholder="Apple" className="productUpdateInputName" />
                                </div>
                            </div>
                            <div className="productUpdateItem">
                                <label>Product Type</label>
                                <input type="text" placeholder="Airpods" className="productUpdateInput" />
                            </div>
                            <div className="productItemNameContainer">
                                <div className="productUpdateItemName">
                                    <label>Original Price</label>
                                    <input type="text" placeholder="Rs. 555" className="productUpdateInputName" />
                                </div>
                                <div className="productUpdateItemName">
                                    <label>Discounted Price</label>
                                    <input type="text" placeholder="Rs. 455" className="productUpdateInputName" />
                                </div>
                            </div>
                            <div className="productUpdateItem">
                                <label>Seller Name</label>
                                <input type="text" placeholder="Anna Becker" className="productUpdateInput" />
                            </div>
                            <div className="productUpdateItem">
                                <label>Ratings</label>
                                <input type="text" placeholder="1-10" className="productUpdateInput" />
                            </div>
                            <div className="productUpdateRight">
                                <button className="productUpdateButton">Update</button>
                            </div>
                        </div>
                </form>
            </div>
        </div>
    )
}
