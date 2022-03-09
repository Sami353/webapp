import { FitnessCenter } from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./dropdown.css"

function DropdownGym() {
    const [showState, setShowState] = useState(false);
    const showHideDropdown = () => {
        showState ? setShowState(false) : setShowState(true);
    }

    const showDropdown = () => {
        setShowState(true);
    }

    return (
        <div className="dropdown">
            <div className="dropdownMenu" onClick={showHideDropdown}>
                <div className="sidebarListItemDropdown">
                    <FitnessCenter className="dropdownIcon" />
                    Gyms
                </div>
                {showState ? (
                    <ul className="dropdownList" onMouseEnter={showDropdown}>
                        <Link to="/gyms" className="link">
                            <li className="dropdownListItemDetails">All Gyms</li>
                        </Link>
                        <Link to="/subscriptions" className="link">
                        <li className="dropdownListItemDetails">Gym Subscriptions</li>
                        </Link>
                    </ul>) :
                    null}
            </div>
        </div>
    )
}

export default DropdownGym;