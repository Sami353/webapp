import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid } from "@material-ui/icons"
import "./userView.css"

export default function UserView() {
    return (
        <div className="userView">
            <div className="userShowTop">
              <img src="https://th.bing.com/th/id/OIF.Yroca081XInwFEO0xjw6Cw?pid=ImgDet&rs=1" alt="" className="userShowImg" />
                <div className="userShowTopTitle">
                    <span className="userShowUsername">Anna Becker</span>
                    <span className="userShowUserTItle">Software Engineer</span>
                </div>
            </div>
            <div className="userShowBottom">
                <span className="userShowTitle">Account Details</span>
                <div className="userShowInfo">
                    <PermIdentity className="userShowIcon" />
                    <span className="userShowInfoTitle">annabeck998</span>
                </div>
                <div className="userShowInfo">
                    <CalendarToday className="userShowIcon" />
                    <span className="userShowInfoTitle">10.12.1998</span>
                </div>
                <span className="userShowTitle">Contact Details</span>
                <div className="userShowInfo">
                    <PhoneAndroid className="userShowIcon" />
                    <span className="userShowInfoTitle">+977 9876543210</span>
                </div>
                <div className="userShowInfo">
                    <MailOutline className="userShowIcon" />
                    <span className="userShowInfoTitle">annabeck998@gmail.com</span>
                </div>
                <div className="userShowInfo">
                    <LocationSearching className="userShowIcon" />
                    <span className="userShowInfoTitle">Putalisadak, Ktm</span>
                </div>
            </div>
        </div>
    )
}
