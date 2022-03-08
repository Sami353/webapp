import { Link } from "react-router-dom"
import { Publish } from "@material-ui/icons"
import "./user.css"

export default function user() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userEditTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder="annabeck998" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full name</label>
                                <input type="text" placeholder="Anna Becker" className="userUpdateInput" />
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
                                <div className="userUpdateUpload">
                                    <img src="https://th.bing.com/th/id/OIF.Yroca081XInwFEO0xjw6Cw?pid=ImgDet&rs=1" alt="" className="userUpdateImg" />
                                </div>
                                <div className="userImgUploadButton">
                                    <label htmlFor="file">
                                        <Publish className="userUpdateIcon" />
                                    </label>
                                    <input type="file" id="file" style={{ display: "none" }} />
                                </div>
                                <button className="userUpdateButton">Update</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
