import "./newProduct.css"

export default function NewProduct() {
    return (
        <div className="newProduct">
            <h1 className="newProductTitle">New Product</h1>
            <form className="addProductForm">
                <div className="addProductItem">
                    <label>Image</label>
                    <input type="file" id="file" />
                </div>
                <div className="addProductItem">
                    <label>Name</label>
                    <input type="text" placeholder="Apple Airpods" />
                </div>
                <div className="addProductItem">
                    <label>Brand</label>
                    <input type="text" placeholder="Apple" />
                </div>
                <div className="addProductItem">
                    <label>Product Type</label>
                    <input type="text" placeholder="Airpods" />
                </div>
                <div className="addProductItem">
                    <label>Original Price</label>
                    <input type="text" placeholder="Rs. 555" />
                </div>
                <div className="addProductItem">
                    <label>Discounted Price</label>
                    <input type="text" placeholder="Rs. 455" />
                </div>
                <div className="addProductItem">
                    <label>Seller Name</label>
                    <input type="text" placeholder="Anna Becker" />
                </div>
                <button className="addProductButton">Create</button>
            </form>
        </div>
    )
}
