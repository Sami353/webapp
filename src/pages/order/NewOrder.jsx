import "./order.css"

export default function NewOrder() {
    return (
        <div className="newOrder">
            <h1 className="newOrderTitle">New Order</h1>
            <form className="addOrderForm">
                <div className="addOrderItem">
                    <label>Image</label>
                    <input type="file" id="file" />
                </div>
                <div className="addOrderItem">
                    <label>Order Name</label>
                    <input type="text" placeholder="Apple Airpods" />
                </div>
                <div className="addOrderItem">
                    <label>Date</label>
                    <input type="text" placeholder="March 4, 2022" />
                </div>
                <div className="addOrderItem">
                    <label>User Name</label>
                    <input type="text" placeholder="Anna" />
                </div>
                <div className="addOrderItem">
                    <label>Reciever</label>
                    <input type="text" placeholder="Anna Becker" />
                </div>
                <div className="addOrderItem">
                    <label>Phone</label>
                    <input type="text" placeholder="+977 9123456780" />
                </div>
                <div className="addOrderItem">
                    <label>Payment Method</label>
                    <input type="text" placeholder="Cash on Delivery" />
                </div>
                <div className="addOrderItem">
                    <label>Total</label>
                    <input type="text" placeholder="Rs. 1100" />
                </div>
                <div className="addOrderItem">
                    <label>Product Count</label>
                    <input type="text" placeholder="1" />
                </div>
                <button className="addOrderButton">Create</button>
            </form>
        </div>
    )
}
