import { CardMembership } from "@material-ui/icons";
import { useState } from "react";
import "./dropdownFitness.css"

function DropdownFitness() {
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
                    <CardMembership className="dropdownIcon" />
                    Fitness Classes
                </div>
                {state ? (
                    <ul className="dropdownList" onMouseEnter={showDropdown}>
                        <li className="dropdownListItem">All Classes</li>
                        <li className="dropdownListItem">Classes Subscriptions</li>
                    </ul>) :
                    null}
            </div>
        </div>
    )
}

export default DropdownFitness;