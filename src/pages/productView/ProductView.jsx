import Chart from "../../components/chart/Chart"
import { productData } from "../../dummyData"
import "./productView.css"

export default function ProductView() {
    return (
        <div className="productShow">
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance" />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://th.bing.com/th/id/R.4b732aec26168e1aab09413afd874737?rik=HIfm3xLVcBU4Iw&riu=http%3a%2f%2fnewsimg.hankookilbo.com%2f2016%2f12%2f14%2f201612140871091954_1.jpg&ehk=FhWdqqwXwbN%2bKqcMaij0TviVbSFvHVnQ97u8Dir35bE%3d&risl=&pid=ImgRaw&r=0" alt="" className="productInfoImg" />
                        <span className="productName">Apple Airpods</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">ID:</span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Name:</span>
                            <span className="productInfoValue">Airpods</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Brand:</span>
                            <span className="productInfoValue">Airpods</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Product type:</span>
                            <span className="productInfoValue">Airpods</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Original Price:</span>
                            <span className="productInfoValue">$20</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Discount Price:</span>
                            <span className="productInfoValue">$15</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Seller Name:</span>
                            <span className="productInfoValue">Anna Becker</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="productView">
                <div className="userShowTop">
                    <img src="https://th.bing.com/th/id/R.ec6d4a9ea42a47676eee8f50f127d174?rik=WBA8%2fUG2a%2f8kOw&pid=ImgRaw&r=0" alt="" className="userShowImg" />
                    <div className="userShowTopTitle">
                        Apple Airpods
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Details</span>
                    <div className="userShowInfo">
                        <span className="userShowInfoTitle">Name: </span>
                        <span className="userShowInfoValue">Airpods</span>
                    </div>
                    <div className="userShowInfo">
                        <span className="userShowInfoTitle">Brand: </span>
                        <span className="userShowInfoValue">Airpods</span>
                    </div>
                    <div className="userShowInfo">
                        <span className="userShowInfoTitle">Product type: </span>
                        <span className="userShowInfoValue">Airpods</span>
                    </div>
                    <div className="userShowInfo">
                        <span className="userShowInfoTitle">Original Price: </span>
                        <span className="userShowInfoValue">$20</span>
                    </div>
                    <div className="userShowInfo">
                        <span className="userShowInfoTitle">Discount Price: </span>
                        <span className="userShowInfoValue">$15</span>
                    </div>
                    <div className="userShowInfo">
                        <span className="userShowInfoTitle">Seller Name: </span>
                        <span className="userShowInfoValue">Anna Becker</span>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
