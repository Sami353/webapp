import "./gym.css"

export default function NewSubscription() {
    return (
        <div className="newGym">
            <h1 className="newGymTitle">New Subscription</h1>
            <form className="addGymForm">
                <div className="addGymItem">
                    <label>Image</label>
                    <input type="file" id="file" />
                </div>
                <div className="addGymItem">
                    <label>Subscription Id</label>
                    <input type="text" placeholder="0123456789" />
                </div>
                <div className="addGymItem">
                    <label>Gym Id</label>
                    <input type="text" placeholder="0001" />
                </div>
                <div className="addGymItem">
                    <label>Name</label>
                    <input type="text" placeholder="Anna Becker" />
                </div>
                <div className="addGymItem">
                    <label>Gym Name</label>
                    <input type="text" placeholder="HealthFix" />
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
                    <label>Starting On</label>
                    <input type="text" placeholder="March 4, 2022" />
                </div>
                <div className="addGymItem">
                    <label>Starting From</label>
                    <input type="text" placeholder="March 4, 2022" />
                </div>
                <button className="addGymButton">Create</button>
            </form>
        </div>
    )
}
