import "./gym.css"

export default function GymView() {
    return (
        <div className="gym">
            <div className="gymContainer">
                <h1 className="gymTitle">Gym</h1>
                <div className="gymDescription">
                    <span className="GymDeccriptionTitle">Name:</span>
                    <span className="GymDeccriptionValue">HealthFix</span>
                </div>
                <div className="gymDescription">
                    <span className="GymDeccriptionTitle">Opening Time:</span>
                    <span className="GymDeccriptionValue">6:00am-5:00pm</span>
                </div>
                <div className="gymDescription">
                    <span className="GymDeccriptionTitle">Location:</span>
                    <span className="GymDeccriptionValue">Putalisadak, Ktm</span>
                </div>
                <div className="gymDescription">
                    <span className="GymDeccriptionTitle">Packages:</span>
                    <span className="GymDeccriptionValue">HealthFix</span>
                </div>
            </div>
            <div className="gymContainerTwo">
                <div className="gymImageContainer">
                    <img src="https://g4l-images.imgix.net/5c500e5ce4b09836a92fc8e5/c67c1833783526c4e12e9c44831e74e4?fit=crop&auto=format,compress?fit=crop&w=1020&auto=format,compress" alt="" className="gymViewImage" />
                </div>
                <div className="gymDescriptionContainer">
                    <p className="gymDescriptionText">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi autem omnis, aperiam dicta placeat nam! Possimus quod accusamus veniam sit, consequatur quisquam laudantium consectetur repellat? Molestiae accusantium illo unde cum.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi autem omnis, aperiam dicta placeat nam! Possimus quod accusamus veniam sit, consequatur quisquam laudantium consectetur repellat? Molestiae accusantium illo unde cum.
                    </p>
                </div>
            </div>
        </div>
    )
}
