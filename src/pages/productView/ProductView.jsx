// import { AttachMoney, CalendarToday, LocationSearching, MailOutline, MonetizationOn, PermIdentity, PhoneAndroid, Storefront } from "@material-ui/icons"
import "./productView.css"

export default function ProductView() {
    return (
        <div className="productShow">
            <div className="productView">
                <div className="userShowTop">
                    <img src="https://th.bing.com/th/id/R.ec6d4a9ea42a47676eee8f50f127d174?rik=WBA8%2fUG2a%2f8kOw&pid=ImgRaw&r=0" alt="" className="userShowImg" />
                    <div className="userShowTopTitle">
                        Apple Airpods
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Details</span>
                    <div className="userShowInfo">
                        {/* <Storefront  className="userShowIcon" /> */}
                        <span className="userShowInfoTitle">Name:</span>
                        <span className="userShowInfoValue">Airpods</span>
                    </div>
                    <div className="userShowInfo">
                        {/* <CalendarToday className="userShowIcon" /> */}
                        <span className="userShowInfoTitle">Brand:</span>
                        <span className="userShowInfoValue">Airpods</span>
                    </div>
                    {/* <span className="userShowTitle">Contact Details</span> */}
                    <div className="userShowInfo">
                        {/* <PhoneAndroid className="userShowIcon" /> */}
                        <span className="userShowInfoTitle">Product type:</span>
                        <span className="userShowInfoValue">Airpods</span>
                    </div>
                    <div className="userShowInfo">
                        {/* <MonetizationOn className="userShowIcon" /> */}
                        <span className="userShowInfoTitle">Original Price:</span>
                        <span className="userShowInfoValue">$20</span>
                    </div>
                    <div className="userShowInfo">
                        {/* <AttachMoney className="userShowIcon" /> */}
                        <span className="userShowInfoTitle">Discount Price:</span>
                        <span className="userShowInfoValue">$15</span>
                    </div>
                    <div className="userShowInfo">
                        {/* <PermIdentity className="userShowIcon" /> */}
                        <span className="userShowInfoTitle">Seller Name:</span>
                        <span className="userShowInfoValue">Anna Becker</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
