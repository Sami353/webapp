import { CardMembership } from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./dropdown.css"

function DropdownFitness() {
    const [showState, setShowState] = useState(false);
    const showHideDropdown = () => {
        showState ? setShowState(false) : setShowState(true);
    }
    const showDropdown = () => {
        setShowState(true);
    }
    const hideDropdown = () => {
        setShowState(false);

    }

    return (
        <div className="dropdown">
            <div className="dropdownMenu" onClick={showHideDropdown}>
                <div className="sidebarListItemDropdown">
                    <CardMembership className="dropdownIcon" />
                    Fitness Class
                </div>
                {showState ? (
                    <ul className="dropdownList" onMouseEnter={showDropdown}>
                        <Link to="/gyms" className="link">
                            <li className="dropdownListItemDetails">All Classes</li>
                        </Link>
                        <li className="dropdownListItemDetails">Classes Subscriptions</li>
                    </ul>) :
                    null}
            </div>
        </div>
    )
}

export default DropdownFitness;