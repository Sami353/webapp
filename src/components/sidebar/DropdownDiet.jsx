import { Report } from "@material-ui/icons";
import { useState } from "react";
import "./dropdown.css"

function DropdownDiet() {
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
                    <Report className="dropdownIcon" />
                    Diet Consultation
                </div>
                {state ? (
                    <ul className="dropdownList" onMouseEnter={showDropdown}>
                        <li className="dropdownListItem">Consultations</li>
                        <li className="dropdownListItem">Subscriptions</li>
                    </ul>) :
                    null}
            </div>
        </div>
    )
}

export default DropdownDiet;