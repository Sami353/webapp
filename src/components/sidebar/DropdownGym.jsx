import { FitnessCenter } from "@material-ui/icons";
import { useState } from "react";
import "./dropdownGym.css"

function DropdownGym() {
    const [state, setState] = useState(false);
    const showDropdown = () => {
        setState(true);
    }
    const hideDropdown = () => {
        setState(false);
    }

    return (
        <div className="dropdown">
            <div className="dropdownMenu" onClick={showDropdown} onMouseLeave={hideDropdown}>
                <div className="dropdownListItem">
                    <FitnessCenter className="dropdownIcon" />
                    Gyms
                </div>
                {state ? (
                    <ul className="dropdownList" onMouseEnter={showDropdown}>
                        <li className="dropdownListItem">All Gyms</li>
                        <li className="dropdownListItem">Gym Subscriptions</li>
                    </ul>) :
                    null}
            </div>
        </div>
    )
}

export default DropdownGym;