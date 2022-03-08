import "./gym.css"

export default function SubscriptionView() {
    return (
        <div className="subscriptionView">
            <div className="subscriptionViewContainer">
                <div className="subscriptionViewDescription">
                    <span className="subscriptionViewDeccriptionTitle">Name:</span>
                    <span className="subscriptionViewDeccriptionValue">HealthFix</span>
                </div>
                <div className="subscriptionViewDescription">
                    <span className="subscriptionViewDeccriptionTitle">Opening Time:</span>
                    <span className="subscriptionViewDeccriptionValue">6:00am-5:00pm</span>
                </div>
                <div className="subscriptionViewDescription">
                    <span className="subscriptionViewDeccriptionTitle">Location:</span>
                    <span className="subscriptionViewDeccriptionValue">Putalisadak, Ktm</span>
                </div>
                <div className="subscriptionViewDescription">
                    <div className="subViewDescription">
                        <div className="subscriptionViewDeccriptionTitle">Packages:</div>
                        <div className="subViewPackageDuration">
                            <span className="subscriptionViewDeccriptionTitle">Duration:</span>
                            <span className="subscriptionViewDeccriptionValue">2 months</span>
                        </div>
                        <div className="subViewPackagePrice">
                            <span className="subscriptionViewDeccriptionTitle">Price:</span>
                            <span className="subscriptionViewDeccriptionValue">Rs. 2000</span>
                        </div>
                    </div>
                </div>
                <div className="subscriptionViewDescription">
                    <span className="subscriptionViewDeccriptionTitle">Starting On:</span>
                    <span className="subscriptionViewDeccriptionValue">March 4, 2022</span>
                </div>
                <div className="subscriptionViewDescription">
                    <span className="subscriptionViewDeccriptionTitle">Starting From:</span>
                    <span className="subscriptionViewDeccriptionValue">March 4, 2022</span>
                </div>
                <div className="subscriptionViewDescription">
                    <span className="subscriptionViewDeccriptionTitle">Subscription ID:</span>
                    <span className="subscriptionViewDeccriptionValue">0123456789</span>
                </div>
                <div className="subscriptionViewDescription">
                    <span className="subscriptionViewDeccriptionTitle">Gym On:</span>
                    <span className="subscriptionViewDeccriptionValue">0001</span>
                </div>
            </div>
            <div className="subscriptionViewContainerTwo">
                <div className="subscriptionViewImageContainer">
                    <img src="https://g4l-images.imgix.net/5c500e5ce4b09836a92fc8e5/c67c1833783526c4e12e9c44831e74e4?fit=crop&auto=format,compress?fit=crop&w=1020&auto=format,compress" alt="" className="subscriptionViewViewImage" />
                </div>
                <div className="subscriptionViewDescriptionContainer">
                    <p className="subscriptionViewDescriptionText">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi autem omnis, aperiam dicta placeat nam! Possimus quod accusamus veniam sit, consequatur quisquam laudantium consectetur repellat? Molestiae accusantium illo unde cum.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi autem omnis, aperiam dicta placeat nam! Possimus quod accusamus veniam sit, consequatur quisquam laudantium consectetur repellat? Molestiae accusantium illo unde cum.
                    </p>
                </div>
            </div>
        </div>
    )
}
