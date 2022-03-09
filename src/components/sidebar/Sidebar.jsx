import "./sidebar.css"
import {
    LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    BrandingWatermark,
    Category,
    Person,
    ShoppingBasket,
} from "@material-ui/icons"
import { Link } from "react-router-dom"
import DropdownGym from "./DropdownGym";
import DropdownFitness from "./DropdownFitness";
import DropdownDiet from "./DropdownDiet";
import { useState } from "react";

export default function Sidebar() {
    const [activeNavID, setActiveNavID] = useState("home");

    const setActiveNav = (e) => {
        var prevTargetID = activeNavID;
        var targetID = e.target.id;
        document.getElementById(prevTargetID).classList.remove("active");
        document.getElementById(targetID).classList.add("active");
        setActiveNavID(targetID);
    }

    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <div className="sidebarTitle">Dashboard</div>
                    <ul className="sidebarList">
                        <Link to="" className="link">
                            <li className="sidebarListItem active"  id="home" onClick={setActiveNav}>
                                <LineStyle className="sidebarIcon" />
                                Home
                            </li>
                        </Link>
                        <li className="sidebarListItem" id="analytics" onClick={setActiveNav} >
                            <Timeline className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
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
                        <Link to="/orders" className="link">
                            <li className="sidebarListItem">
                                <ShoppingBasket className="sidebarIcon" />
                                Orders
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <div className="sidebarTitle">Fitness</div>
                    <ul className="sidebarList">
                        <li className="sidebarListItem"> <DropdownGym /> </li>
                        <li className="sidebarListItem"> <DropdownFitness /> </li>
                        <li className="sidebarListItem"> <DropdownDiet /> </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
