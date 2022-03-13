import "./order.css";
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { orderRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Order() {
    const [data, setData] = useState(orderRows);
    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'date', headerName: 'Date', width: 130 },
        {
            field: 'userName', headerName: 'User Name', width: 150, renderCell: (params) => {
                return (
                    <div className="orderListItem">
                        <img src={params.row.img} alt="" className="orderListImg" />
                        {params.row.name}
                    </div>
                )
            }
        },
        { field: 'reciever', headerName: 'Reciever', width: 155 },
        { field: 'phone', headerName: 'Phone', width: 155 },
        { field: 'paymentMethod', headerName: 'Payment Method', width: 180 },
        { field: 'total', headerName: 'Total', width: 110 },
        { field: 'productsCount', headerName: 'Products Count', width: 180 },
        {
            field: "action", headerName: "Action", width: 200, renderCell: (params) => {
                return (
                    <>
                        <Link to={"/orderView/" + params.row.id}>
                            <button className="orderListEdit">VIEW</button>
                        </Link>
                        <Link to={"/orderEdit/" + params.row.id}>
                            <button className="orderListEdit">EDIT</button>
                        </Link>
                        <DeleteOutline className="orderListDelete"
                            onClick={() => handleDelete(params.row.id)} />
                    </>
                )
            }
        }
    ];

    return (
        <div className="orderList">
            <div className="orderTitleContainer">
                <h1 className="orderTitle">Orders</h1>
            </div>
            <div className="orderBottom">
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
