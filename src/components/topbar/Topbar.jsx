import "./topbar.css"
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Healthfix - Web App Dashboard</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <Link to="/login" className='link'>
              <button className='topbarIconLogIn'>LOG IN</button>
            </Link>
          </div>
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBag">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBag">2</span>
          </div><div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://th.bing.com/th/id/OIP.nTK-yAWL01laY6CKjMEq3gHaHa?pid=ImgDet&rs=1" alt=""
            className="topAvatar" />
        </div>
      </div>
    </div>
  )
}
