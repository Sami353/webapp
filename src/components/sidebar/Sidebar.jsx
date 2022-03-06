import "./sidebar.css"
import {
    LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    // AttachMoney,
    // BarChart,
    // MailOutline,
    // DynamicFeed,
    // ChatBubbleOutline,
    // WorkOutline,
    // Report,
    BrandingWatermark,
    // DynamicFeedOutlined,
    Category,
    FitnessCenter,
    CardMembership,
    Person,
    Report
} from "@material-ui/icons"
import { Link } from "react-router-dom"
import Dropdown from "react-dropdown";

export default function Sidebar() {
    const options = [
        'All Gyms', 'Gym Subscriptions'
    ];

    const defaultOption = options[0];

    const classes = [
        'All Classes', 'Classes Subscriptions'
    ];

    const defaultClasses = classes[0];

    const diet = [
        'Consultation', 'Subscriptions'
    ];

    const defaultDiet = diet[0];

    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <div className="sidebarTitle">Dashboard</div>
                    <ul className="sidebarList">
                        <Link to="" className="link">
                            <li className="sidebarListItem active">
                                <LineStyle className="sidebarIcon" />
                                Home
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            Analytics
                        </li><li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon" />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <div className="sidebarTitle">Users</div>
                    <ul className="sidebarList">
                        <Link to="/users" className="link">
                            <li className="sidebarListItem">
                                <PermIdentity className="sidebarIcon" />
                                Customers
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Person className="sidebarIcon" />
                            Vendors
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <div className="sidebarTitle">Products</div>
                    <ul className="sidebarList">
                        <Link to="/products" className="link">
                            <li className="sidebarListItem">
                                <Storefront className="sidebarIcon" />
                                Products
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Category className="sidebarIcon" />
                            Categories
                        </li>
                        <li className="sidebarListItem">
                            <BrandingWatermark className="sidebarIcon" />
                            Brands
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <div className="sidebarTitle">Fitness</div>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <FitnessCenter className="sidebarIcon" />
                            Gyms
                        </li>
                        <Dropdown options={options} onChange={{options}} value={defaultOption} placeholder="Select an option" />
                        <li className="sidebarListItem">
                            <CardMembership className="sidebarIcon" />
                            Fitness Classes
                        </li>
                        <Dropdown options={classes} onChange={{classes}} value={defaultClasses} placeholder="Select an option" />
                        <li className="sidebarListItem">
                            <Report className="sidebarIcon" />
                            Diet Consultation
                        </li>
                        <Dropdown options={diet} onChange={{diet}} value={defaultDiet} placeholder="Select an option" />
                    </ul>
                </div>
            </div>
        </div>
    )
}
