import "./gym.css"

export default function NewGym() {
    return (
        <div className="newGym">
            <h1 className="newGymTitle">New Gym</h1>
            <form className="addGymForm">
                <div className="addGymItem">
                    <label>Image</label>
                    <input type="file" id="file" />
                </div>
                <div className="addGymItem">
                    <label>Name</label>
                    <input type="text" placeholder="HealthFix" />
                </div>
                <div className="addGymItem">
                    <label>Opening Time</label>
                    <input type="text" placeholder="5:00am - 7:00pm" />
                </div>
                <div className="addGymItem">
                    <label>Packages</label>
                    <div className="addGymItemPackage">
                        <label>Duration</label>
                        <input type="text" placeholder="3 months" />
                        <label>Time</label>
                        <input type="text" placeholder="3 months" />
                    </div>
                </div>
                <div className="addGymItem">
                    <label>Description</label>
                    <input type="text" placeholder="Lorem" />
                </div>
                <button className="addGymButton">Create</button>
            </form>
        </div>
    )
}
