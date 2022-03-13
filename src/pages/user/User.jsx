import { Link } from "react-router-dom"
// import { Publish } from "@material-ui/icons"
import "./user.css"

export default function user() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userEditTitle">Edit Customers</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userUpdate">
                    <form className="userUpdateForm">
                        <div>
                            <div className="userUpdateRight">
                                <span className="userUpdateUpload">
                                    <img src="https://i.pinimg.com/originals/89/fd/79/89fd79d35dbcfe7fd70bf5f7c159f56c.jpg" alt="" className="userUpdateImg" />
                                </span>
                                <span className="userImgUploadButton">
                                    <label htmlFor="file">
                                        <div className="userImageUploadBtn">
                                            <span className="imgUploadBtnUpload">
                                                Upload New Image
                                            </span>
                                            <span className="ImgUploadBtnRemove">
                                                Remove
                                            </span>
                                        </div>
                                        <div className="userImageDescriptn">
                                            Image should be at least 400 x 400px as a png or jpeg file.
                                        </div>
                                    </label>
                                    <input type="file" id="file" style={{ display: "none" }} />
                                </span>
                            </div>
                            <h3 className="userHeading">Enter your details below:</h3>
                            <div className="userItemNameContainer">
                                <div className="userUpdateItemName">
                                    <label>First name</label>
                                    <input type="text" placeholder="Anna" className="userUpdateInputName" />
                                </div>
                                <div className="userUpdateItemName">
                                    <label>Last Name</label>
                                    <input type="text" placeholder="Becker" className="userUpdateInputName" />
                                </div>
                            </div>
                            <div className="userItemNameContainer">
                                <div className="userUpdateItemName">
                                    <label>Full name</label>
                                    <input type="text" placeholder="Anna Becker" className="userUpdateInputName" />
                                </div>
                                <div className="userUpdateItemName">
                                    <label>Username</label>
                                    <input type="text" placeholder="annabeck998" className="userUpdateInputName" />
                                </div>
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text" placeholder="annabeck998@gmail.com" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="text" placeholder="+977 9876543210" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text" placeholder="Putalisadak, Ktm" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateRight">
                                <button className="userUpdateButton">Update</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
