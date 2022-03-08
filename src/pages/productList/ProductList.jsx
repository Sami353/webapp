import "./productList.css"
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductList() {
    const [data, setData] = useState(productRows);
    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'name', headerName: 'Name', width: 230, renderCell: (params) => {
                return (
                    <div className="productListItem">
                        <img src={params.row.img} alt="" className="productListImg" />
                        {params.row.name}
                    </div>
                )
            }
        },
        { field: 'brand', headerName: 'Brand', width: 150 },
        { field: 'productType', headerName: 'Product Type', width: 200 },
        { field: 'discountPrice', headerName: 'Dis. Price', width: 155 },
        { field: 'originalPrice', headerName: 'Ori. Price', width: 155 },
        { field: 'sellerName', headerName: 'Seller Name', width: 155 },
        {
            field: "action", headerName: "Action", width: 200, renderCell: (params) => {
                return (
                    <>
                        <Link to={"/productView/" + params.row.id}>
                            <button className="productListEdit">View</button>
                        </Link>
                        <Link to={"/product/" + params.row.id}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className="productListDelete"
                            onClick={() => handleDelete(params.row.id)} />
                    </>
                )
            }
        }
    ];

    return (
        <div className="productList">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
            </div>
            <div className="productListBottom">
                <DataGrid
                    rows={data}
                    disableSelectionOnClick
                    columns={columns}
                    pageSize={8}
                    checkboxSelection
                />
            </div>
        </div>
    )
}
