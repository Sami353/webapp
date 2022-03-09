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
        if (targetID !== prevTargetID) {
            document.getElementById(prevTargetID).classList.remove("active");
            document.getElementById(targetID).classList.add("active");
            setActiveNavID(targetID);
        }
    }

    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <div className="sidebarTitle">Dashboard</div>
                    <ul className="sidebarList">
                        <Link to="" className="link">
                            <li className="sidebarListItem active" id="home" onClick={setActiveNav}>
                                <LineStyle className="sidebarIcon" />
                                Home
                            </li>
                        </Link>
                        <li className="sidebarListItem" id="analytics" onClick={setActiveNav}>
                            <Timeline className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem" id="sales" onClick={setActiveNav}>
                            <TrendingUp className="sidebarIcon" />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <div className="sidebarTitle">Users</div>
                    <ul className="sidebarList">
                        <Link to="/users" className="link">
                            <li className="sidebarListItem" id="customers" onClick={setActiveNav}>
                                <PermIdentity className="sidebarIcon" />
                                Customers
                            </li>
                        </Link>
                        <li className="sidebarListItem" id="vendors" onClick={setActiveNav}>
                            <Person className="sidebarIcon" />
                            Vendors
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <div className="sidebarTitle">Products</div>
                    <ul className="sidebarList">
                        <Link to="/products" className="link">
                            <li className="sidebarListItem" id="products" onClick={setActiveNav}>
                                <Storefront className="sidebarIcon" />
                                Products
                            </li>
                        </Link>
                        <li className="sidebarListItem" id="categories" onClick={setActiveNav}>
                            <Category className="sidebarIcon" />
                            Categories
                        </li>
                        <li className="sidebarListItem" id="brands" onClick={setActiveNav}>
                            <BrandingWatermark className="sidebarIcon" />
                            Brands
                        </li>
                        <Link to="/orders" className="link">
                            <li className="sidebarListItem" id="orders" onClick={setActiveNav}>
                                <ShoppingBasket className="sidebarIcon" />
                                Orders
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <div className="sidebarTitle">Fitness</div>
                    <ul className="sidebarList">
                        <li className="sidebarListItem" id="dropdownGym" onClick={setActiveNav}> <DropdownGym /> </li>
                        <li className="sidebarListItem" id="dropdownFitness" onClick={setActiveNav}> <DropdownFitness /> </li>
                        <li className="sidebarListItem" id="dropdownDiet" onClick={setActiveNav}> <DropdownDiet /> </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
