import "./order.css"

export default function OrderView() {
    return (
        <div className="orderShow">
            <div className="orderTop">
                <div className="orderTopRight">
                    <div className="orderViewInfoTop">
                        <img src="https://th.bing.com/th/id/R.4b732aec26168e1aab09413afd874737?rik=HIfm3xLVcBU4Iw&riu=http%3a%2f%2fnewsimg.hankookilbo.com%2f2016%2f12%2f14%2f201612140871091954_1.jpg&ehk=FhWdqqwXwbN%2bKqcMaij0TviVbSFvHVnQ97u8Dir35bE%3d&risl=&pid=ImgRaw&r=0" alt="" className="orderInfoImg" />
                        <span className="orderName">Apple Airpods</span>
                    </div>
                    <div className="orderViewInfoItem">
                        <div className="ordersInfoItem">
                            <span className="orderInfoKey">Date:</span>
                            <span className="orderInfoValue">March 4, 2022</span>
                        </div>
                        <div className="ordersInfoItem">
                            <span className="orderInfoKey">User Name:</span>
                            <span className="orderInfoValue">Anna</span>
                        </div>
                        <div className="ordersInfoItem">
                            <span className="orderInfoKey">Reciever:</span>
                            <span className="orderInfoValue">Anna Becker</span>
                        </div>
                        <div className="ordersInfoItem">
                            <span className="orderInfoKey">Phone:</span>
                            <span className="orderInfoValue">+977 9123456780</span>
                        </div>
                        <div className="ordersInfoItem">
                            <span className="orderInfoKey">Payment Methods:</span>
                            <span className="orderInfoValue">LoremIpsum</span>
                        </div>
                        <div className="ordersInfoItem">
                            <span className="orderInfoKey">Total:</span>
                            <span className="orderInfoValue">Rs. 555.00</span>
                        </div>
                        <div className="ordersInfoItem">
                            <span className="orderInfoKey">Product Count:</span>
                            <span className="orderInfoValue">1</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
